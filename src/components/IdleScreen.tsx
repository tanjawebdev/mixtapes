import React, { useMemo, useState, useEffect, useRef } from "react";
import "./IdleScreen.css";
import disk from "../../public/Icons/disk.png";
import cross from "../assets/Closing-Icon.png";
import idleBg from "../assets/idle-bg.jpg";
import stars from "../../public/Icons/chrome-star.png";
import "../styles/typography.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { studentsData } from "../data/students";

interface IdleScreenProps {
  isConnected: boolean;
  targetStudentId?: string | null;
  onAnimationComplete?: () => void;
  onFakeNfc?: (id: string) => void;
}

export const IdleScreen: React.FC<IdleScreenProps> = ({
  isConnected,
  targetStudentId,
  onAnimationComplete,
  onFakeNfc,
}) => {
  const [foundImages, setFoundImages] = useState<string[]>([]);
  const marqueeTrackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // --- Bilder laden ---
  useEffect(() => {
    const loadImages = async () => {
      const MAX_ID = 60;
      const checkPromises = Array.from({ length: MAX_ID }, (_, i) => {
        const index = i + 1;
        const path = `/covers/${index}.webp`;
        return fetch(path, { method: "HEAD" })
          .then((res) => {
            const type = res.headers.get("content-type");
            if (res.ok && type && type.startsWith("image")) {
              return path;
            }
            return null;
          })
          .catch(() => null);
      });
      const results = await Promise.all(checkPromises);
      const validPaths = results.filter(
        (path): path is string => path !== null
      );
      setFoundImages(validPaths);
    };
    loadImages();
  }, []);

  // --- Helper: Name finden ---
  const getNameForImage = (imagePath: string) => {
    const match = imagePath.match(/\/covers\/(\d+)\.webp/);
    if (match && match[1]) {
      const id = parseInt(match[1]);
      const student = studentsData.find((s) => s.studentID === id);
      if (student) {
        return `${student.name} ${student.surname}`;
      }
    }
    return "";
  };

  // --- Array vervielfachen für 4K Loop ---
  const displayImages = useMemo(() => {
    if (foundImages.length === 0) return [];
    // 8-fache Duplizierung für Sicherheit auf 4K
    return [
      ...foundImages,
      ...foundImages,
      ...foundImages,
      ...foundImages,
      ...foundImages,
      ...foundImages,
      ...foundImages,
      ...foundImages,
    ];
  }, [foundImages]);

  // --- ANIMATION LOGIK ---
  useGSAP(
    () => {
      if (!targetStudentId || !marqueeTrackRef.current) return;

      const track = marqueeTrackRef.current;

      // 1. Freeze Position (CSS stoppen, GSAP übernehmen)
      const computedStyle = window.getComputedStyle(track);
      const matrix = new DOMMatrix(computedStyle.transform);
      const currentX = matrix.m41;

      gsap.set(track, { x: currentX });
      track.style.animation = "none";

      // 2. Zielbild finden
      const targetSrcFragment = `/covers/${targetStudentId}.webp`;
      const allImages = Array.from(track.querySelectorAll("img"));
      const candidates = allImages.filter((img) =>
        img.src.includes(targetSrcFragment)
      );

      if (candidates.length === 0) {
        if (onAnimationComplete) onAnimationComplete();
        return;
      }

      // 3. Besten Kandidaten (Mitte Screen) finden
      const viewportCenter = window.innerWidth / 2;
      let bestCandidateImg = candidates[0];
      let minDistance = Infinity;

      candidates.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const imgCenter = rect.left + rect.width / 2;
        const dist = Math.abs(imgCenter - viewportCenter);
        if (dist < minDistance) {
          minDistance = dist;
          bestCandidateImg = img;
        }
      });

      // Wir animieren den ganzen Block (Bild + Text)
      const imageBlock = bestCandidateImg.parentElement as HTMLElement;
      const nameElement = imageBlock.querySelector(".idle-student-name");

      // 4. Catch Distanz berechnen
      const rect = bestCandidateImg.getBoundingClientRect();
      const currentScreenX = rect.left + rect.width / 2;
      const screenDiff = viewportCenter - currentScreenX;
      // Faktor 1.414 (Wurzel 2) ist mathematisch korrekt für 45deg
      const moveAmount = screenDiff * 1.414;

      const tl = gsap.timeline({
        onComplete: () => {
          // Animation fertig -> PortfolioDisplay übernimmt
          if (onAnimationComplete) onAnimationComplete();
        },
      });

      // ============================================================
      // DIE ANIMATIONS TIMELINE
      // ============================================================

      // --- PHASE 1: CATCH (Hinfahren & Zentrieren) ---
      tl.to(track, {
        x: currentX + moveAmount,
        duration: 1.5,
        ease: "power2.inOut",
      });

      // --- PHASE 2: PAUSE (Marquee steht still) ---
      // Kurzes Innehalten für Dramaturgie
      tl.to({}, { duration: 0.5 });

      // --- PHASE 3: SPLIT (Die 4K Vektor-Mathematik) ---

      // Distanzen für 4K definieren:
      const trackRetreatDist = 5000; // Wie weit der Track nach links abhaut
      const imageTravelDist = 3500; // Wie weit das Bild netto nach rechts reist

      // A) Track bewegt sich nach LINKS (Diagonal Oben-Links auf Screen)
      tl.to(track, {
        x: `-=${trackRetreatDist}`,
        duration: 2.2, // Etwas langsamer für Wucht auf großem Screen
        ease: "power3.inOut",
      });

      // B) Bild bewegt sich nach RECHTS (Gerade Waagrecht auf Screen)
      // Wir müssen ZWEI Dinge tun:
      // 1. Die Bewegung des Tracks kompensieren (+trackRetreatDist)
      // 2. Zusätzlich nach rechts fahren. Um bei -45deg Rotation gerade nach rechts zu fahren,
      //    müssen wir +X und -Y um den gleichen Betrag bewegen.
      tl.to(
        imageBlock,
        {
          // X: Kompensation + diagonaler Rechts-Anteil
          x: trackRetreatDist + imageTravelDist,
          // Y: Negativer diagonaler Rechts-Anteil (zieht es optisch nach oben gerade)
          y: -imageTravelDist,

          scale: 1.25, // Leichter Zoom für Fokus
          duration: 2.2,
          ease: "power3.inOut",
        },
        "<"
      ); // Startet exakt gleichzeitig mit der Track-Bewegung

      // --- PHASE 4: TEXT REVEAL ---
      if (nameElement) {
        tl.to(
          nameElement,
          {
            autoAlpha: 1, // Macht es sichtbar (opacity: 1, visibility: visible)
            y: 0, // Endposition
            startAt: { y: -50 }, // Startet leicht versetzt von oben
            duration: 0.8,
            ease: "power2.out",
          },
          "-=1.2"
        ); // Startet, wenn die Split-Bewegung noch im Gange ist
      }

      // --- PHASE 5: HOLD (Warten und Lesen) ---
      // 3 Sekunden Standbild, bevor der Screen wechselt
      tl.to({}, { duration: 3 });
    },
    { scope: containerRef, dependencies: [targetStudentId] }
  );

  return (
    <div className="idle-container" ref={containerRef}>
      <div className="idle-wrapper">
        <div className="idle-top-bar">
          <div className="idle-headline">
            <p>Portfolio Machine</p>
          </div>
          <div className="cross-image-wrapper">
            <img src={cross} className="cross-icon" />
          </div>
        </div>

        <div className="idle-window">
          <div className="idle-window-bg">
            <img src={idleBg} className="idle-bg-img" />

            {/* Marquee Wrapper (rotiert) */}
            <div className="idle-marquee-wrapper">
              <div className="idle-marquee-track" ref={marqueeTrackRef}>
                {displayImages.map((coverImg, index) => (
                  <div key={index} className="idle-image-block">
                    <img src={coverImg} alt="Portfolio Cover" />
                    {/* Name (initial unsichtbar) */}
                    <p className="idle-student-name">
                      {getNameForImage(coverImg)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="idle-stars-1-wrapper">
            <img src={stars} />
          </div>
          <div className="idle-stars-2-wrapper">
            <img src={stars} />
          </div>
        </div>

        {/* Fake NFC Trigger für Tests */}
        <div
          className="idle-disk-container"
          onClick={() => onFakeNfc && onFakeNfc("1")}
          style={{ cursor: "pointer" }}
        >
          <div className="idle-disk-img-container">
            <img
              src={disk}
              className="idle-disk-icon"
              style={{ opacity: isConnected ? 1 : 0.5 }}
            />
          </div>
          <div className="idle-disk-text-container">
            <div className="idle-disk-text-wrapper">
              <p>{isConnected ? "Insert Disk" : "Connecting..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
