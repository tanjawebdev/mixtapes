// src/hooks/useTransitionSync.ts
import { useEffect, useRef } from "react";
import { useStore } from "../store";

const CHANNEL_NAME = "portfolio_machine_sync";

export function useTransitionSync(isMaster: boolean) {
  const transitionStage = useStore((state) => state.transitionStage);
  const setTransitionStage = useStore((state) => state.setTransitionStage);

  // NEW: Also sync student ID, project, and active state
  const currentStudentId = useStore((state) => state.currentStudentId);
  const setCurrentStudent = useStore((state) => state.setCurrentStudent);
  const currentProject = useStore((state) => state.currentProject);
  const setCurrentProject = useStore((state) => state.setCurrentProject);
  const studentActive = useStore((state) => state.studentActive);
  const setStudentActive = useStore((state) => state.setStudentActive);

  // Ref verhindert Endlosschleifen (Ping-Pong zwischen Tabs)
  const isUpdatingFromChannel = useRef(false);

  useEffect(() => {
    // Öffne den Kommunikationskanal zwischen den Tabs
    const channel = new BroadcastChannel(CHANNEL_NAME);

    if (isMaster) {
      // --- MASTER MODE (PortfolioDisplay) ---
      // Wenn sich hier der State ändert, senden wir das an alle anderen Tabs.
      if (!isUpdatingFromChannel.current) {
        channel.postMessage({
          type: "STATE_SYNC",
          payload: {
            transitionStage,
            currentStudentId,
            currentProject,
            studentActive,
          },
        });
      }
      isUpdatingFromChannel.current = false;
    } else {
      // --- SLAVE MODE (AboutDisplay, CvDisplay) ---
      // Hört auf Befehle vom Master
      channel.onmessage = (event) => {
        if (event.data.type === "STATE_SYNC") {
          const {
            transitionStage: newStage,
            currentStudentId: newStudentId,
            currentProject: newProject,
            studentActive: newStudentActive,
          } = event.data.payload;

          console.log(`📡 Sync empfangen:`, event.data.payload);
          isUpdatingFromChannel.current = true; // Markieren, dass das Update von außen kam

          // Update all synced state
          if (newStage !== transitionStage) {
            setTransitionStage(newStage);
          }
          if (newStudentId !== currentStudentId) {
            setCurrentStudent(newStudentId, newProject);
          }
          if (newProject !== currentProject) {
            setCurrentProject(newProject);
          }
          if (newStudentActive !== studentActive) {
            setStudentActive(newStudentActive);
          }
        }
      };
    }

    return () => {
      channel.close();
    };
  }, [
    transitionStage,
    setTransitionStage,
    currentStudentId,
    setCurrentStudent,
    currentProject,
    setCurrentProject,
    studentActive,
    setStudentActive,
    isMaster,
  ]);
}
