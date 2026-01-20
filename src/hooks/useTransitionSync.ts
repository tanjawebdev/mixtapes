// src/hooks/useTransitionSync.ts
import { useEffect, useRef } from "react";
import { useStore, type TransitionStage } from "../store";

const CHANNEL_NAME = "portfolio_machine_sync";

export function useTransitionSync(isMaster: boolean) {
  const transitionStage = useStore((state) => state.transitionStage);
  const setTransitionStage = useStore((state) => state.setTransitionStage);

  // Ref verhindert Endlosschleifen (Ping-Pong zwischen Tabs)
  const isUpdatingFromChannel = useRef(false);

  useEffect(() => {
    // Öffne den Kommunikationskanal zwischen den Tabs
    const channel = new BroadcastChannel(CHANNEL_NAME);

    if (isMaster) {
      // --- MASTER MODE (PortfolioDisplay) ---
      // Wenn sich hier der State ändert (z.B. durch GSAP onComplete),
      // senden wir das an alle anderen Tabs.
      if (!isUpdatingFromChannel.current) {
        channel.postMessage({ type: "STAGE_CHANGE", payload: transitionStage });
      }
      isUpdatingFromChannel.current = false;
    } else {
      // --- SLAVE MODE (AboutDisplay, CvDisplay) ---
      // Hört auf Befehle vom Master
      channel.onmessage = (event) => {
        if (event.data.type === "STAGE_CHANGE") {
          const newStage = event.data.payload as TransitionStage;

          // Nur updaten, wenn es wirklich eine Änderung ist
          if (newStage !== transitionStage) {
            console.log(`📡 Sync empfangen: ${newStage}`);
            isUpdatingFromChannel.current = true; // Markieren, dass das Update von außen kam
            setTransitionStage(newStage);
          }
        }
      };
    }

    return () => {
      channel.close();
    };
  }, [transitionStage, setTransitionStage, isMaster]);
}
