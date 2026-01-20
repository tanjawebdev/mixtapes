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
import { useStore } from "../store";

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
  const studentActive = useStore((state) => state.studentActive);

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
        (path): path is string => path !== null,
      );
      setFoundImages(validPaths);
    };
    loadImages();
  }, []);

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

  const displayImages = useMemo(() => {
    if (foundImages.length === 0) return [];
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

  // --- ANIMATION ---
  useGSAP(
    () => {
      // 1. Grund-Checks
      if (!marqueeTrackRef.current) return;

      // WICHTIG: Wenn Bilder noch laden, brechen wir hier ab,
      // OHNE onAnimationComplete aufzurufen. Wir warten einfach.
      // Der Hook feuert erneut, sobald foundImages gefüllt ist.
      if (foundImages.length === 0) return;

      // Wenn wir gar kein Ziel haben (normaler Idle Mode), machen wir nichts
      if (!targetStudentId || !studentActive) return;

      const track = marqueeTrackRef.current;

      // 2. Freeze
      const computedStyle = window.getComputedStyle(track);
      const matrix = new DOMMatrix(computedStyle.transform);
      const currentX = matrix.m41;

      gsap.set(track, { x: currentX });
      track.style.animation = "none";

      // 3. Find Target
      // Hier können wir uns jetzt sicher sein, dass Bilder im DOM sind,
      // weil foundImages > 0 ist.
      const targetSrcFragment = `/covers/${targetStudentId}.webp`;
      const allImages = Array.from(track.querySelectorAll("img"));
      const candidates = allImages.filter((img) =>
        img.src.includes(targetSrcFragment),
      );

      // Falls WIRKLICH kein Bild gefunden wurde (obwohl geladen), dann skippen.
      if (candidates.length === 0) {
        console.warn("Target image not found in marquee:", targetStudentId);
        if (onAnimationComplete) onAnimationComplete();
        return;
      }

      // 4. Middle
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

      const imageBlock = bestCandidateImg.parentElement as HTMLElement;
      const nameElement = imageBlock.querySelector(".idle-student-name");

      // 5. Calc Dist
      const rect = bestCandidateImg.getBoundingClientRect();
      const currentScreenX = rect.left + rect.width / 2;
      const screenDiff = viewportCenter - currentScreenX;
      const moveAmount = screenDiff * 1.414;

      const tl = gsap.timeline({
        onComplete: () => {
          if (onAnimationComplete) onAnimationComplete();
        },
      });

      // --- PHASE 1: CATCH ---
      tl.to(track, {
        x: currentX + moveAmount,
        duration: 1.5,
        ease: "power2.inOut",
      });

      // --- PHASE 2: PAUSE ---
      tl.to({}, { duration: 0.5 });

      // --- PHASE 3: FINAL SPLIT (X: 1700 / Y: 1500) ---

      const trackRetreat = 800;

      // A) TRACK: -800
      tl.to(track, {
        x: `-=${trackRetreat}`,
        y: -trackRetreat,
        duration: 2.2,
        ease: "power3.inOut",
      });

      // B) BILD:
      tl.to(
        imageBlock,
        {
          x: 1700,
          y: 1500,
          scale: 1.25,
          duration: 2.2,
          ease: "power3.inOut",
        },
        "<",
      );

      // --- PHASE 4: REVEAL ---
      if (nameElement) {
        tl.to(
          nameElement,
          {
            autoAlpha: 1,
            y: 0,
            startAt: { y: -50 },
            duration: 0.8,
            ease: "power2.out",
          },
          "-=1.5",
        );
      }

      // --- PHASE 5: HOLD ---
      tl.to({}, { duration: 1 });
    },
    // WICHTIG: foundImages muss hier rein, damit der Hook neu feuert, wenn der Fetch fertig ist!
    { scope: containerRef, dependencies: [targetStudentId, foundImages] },
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
            <div className="idle-marquee-wrapper">
              <div className="idle-marquee-track" ref={marqueeTrackRef}>
                {displayImages.map((coverImg, index) => (
                  <div key={index} className="idle-image-block">
                    <img src={coverImg} alt="Portfolio Cover" />
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

        <div
          className="idle-disk-container"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (onFakeNfc) onFakeNfc("1");
          }}
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
