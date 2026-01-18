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

  useGSAP(
    () => {
      if (!targetStudentId || !marqueeTrackRef.current) return;

      const track = marqueeTrackRef.current;

      // 1. Freeze
      const computedStyle = window.getComputedStyle(track);
      const matrix = new DOMMatrix(computedStyle.transform);
      const currentX = matrix.m41;

      gsap.set(track, { x: currentX });
      track.style.animation = "none";

      // 2. Find Target
      const targetSrcFragment = `/covers/${targetStudentId}.webp`;
      const allImages = Array.from(track.querySelectorAll("img"));
      const candidates = allImages.filter((img) =>
        img.src.includes(targetSrcFragment)
      );

      if (candidates.length === 0) {
        if (onAnimationComplete) onAnimationComplete();
        return;
      }

      // 3. Middle
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

      // 4. Calc Dist
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

      // --- PHASE 3: BALANCED HORIZONTAL SPLIT ---

      // 1. TRACK: Zieht moderat nach LINKS (-1200)
      const trackRetreat = 1200;

      // 2. BILD:
      // Um GENAU waagrecht zu bleiben, müssen X und Y identisch sein.
      // Wir gleichen die 1200 aus und addieren 600 für die Bewegung nach rechts.
      // Summe = 1800.
      const imageMove = 1800;

      // A) TRACK
      tl.to(track, {
        x: `-=${trackRetreat}`,
        y: -trackRetreat,
        duration: 2.2,
        ease: "power3.inOut",
      });

      // B) BILD
      // Identische X und Y Werte garantieren eine gerade Linie im -45° System
      tl.to(
        imageBlock,
        {
          x: imageMove, // 1800
          y: imageMove, // 1800 (Identisch zu X -> kein Drift nach oben!)
          scale: 1.25,
          duration: 2.2,
          ease: "power3.inOut",
        },
        "<"
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
          "-=1.5"
        );
      }

      // --- PHASE 5: HOLD ---
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
