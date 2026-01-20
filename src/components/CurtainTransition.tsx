import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useStore } from "../store";

interface CurtainTransitionProps {
  onCovered?: () => void;
  onRevealed?: () => void;
}

export const CurtainTransition: React.FC<CurtainTransitionProps> = ({
  onCovered,
  onRevealed,
}) => {
  const transitionStage = useStore((state) => state.transitionStage);
  const curtainRef = useRef<HTMLDivElement>(null);

  // 1. Definition: Wann ist die Komponente aktiv?
  // Wir nehmen 'FINISHED' dazu, damit sie nicht abrupt verschwindet, bevor wir das wollen.
  const isActive = ["CURTAIN_UP", "CURTAIN_DOWN", "FINISHED"].includes(
    transitionStage,
  );

  // 2. HOOKS MÜSSEN IMMER HIER OBEN STEHEN (Vor dem return!)
  useGSAP(() => {
    // Sicherheits-Check: Wenn der Ref null ist (weil wir unten 'null' returnen),
    // brechen wir hier einfach ab. Das ist erlaubt.
    if (!curtainRef.current) return;

    // --- PHASE 1: VORHANG HOCH (Verdeckt Screen) ---
    if (transitionStage === "CURTAIN_UP") {
      gsap.fromTo(
        curtainRef.current,
        { y: "100%" }, // Start: Unten
        {
          y: "0%", // Ende: Vollflächig
          duration: 0.8,
          ease: "power3.inOut",
          onComplete: () => {
            if (onCovered) onCovered();
          },
        },
      );
    }

    // --- PHASE 2: VORHANG WEG (Enthüllt Content) ---
    else if (transitionStage === "CURTAIN_DOWN") {
      gsap.to(curtainRef.current, {
        y: "-100%",
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => {
          if (onRevealed) onRevealed();
        },
      });
    }
  }, [transitionStage]); // Abhängigkeit array

  // 3. JETZT erst das Conditional Rendering (Early Return)
  // Wenn nicht aktiv, rendern wir null. Der Hook oben lief zwar,
  // hat aber durch den "if (!curtainRef.current)" Check nichts getan.
  if (!isActive) return null;

  return (
    <div
      ref={curtainRef}
      className="transition-curtain"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#fd97c6",
        zIndex: 9999,
        transform: "translateY(100%)",
      }}
    ></div>
  );
};
