import React, { useMemo, useState, useEffect } from "react";
import "./IdleScreen.css";
import disk from "../../public/Icons/disk.png";
import cross from "../assets/Closing-Icon.png";
import idleBg from "../assets/idle-bg.jpg";
import stars from "../../public/Icons/chrome-star.png";
import "../styles/typography.css";
interface IdleScreenProps {
  isConnected: boolean;
}

export const IdleScreen: React.FC<IdleScreenProps> = ({ isConnected }) => {
  const [foundImages, setFoundImages] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      // ANPASSEN: Wie viele Bilder sollen maximal geprüft werden?
      // Da du 39 hast, stellen wir sicherheitshalber auf 60.
      const MAX_ID = 60;

      // Wir erstellen ein Array von Promises für alle möglichen Bilder (1 bis 60)
      const checkPromises = Array.from({ length: MAX_ID }, (_, i) => {
        const index = i + 1;
        const path = `/covers/${index}.webp`;

        // Versuche Pfad zu erreichen
        return fetch(path, { method: "HEAD" }) // HEAD ist schneller als GET
          .then((res) => {
            const type = res.headers.get("content-type");
            // Wir akzeptieren das Bild nur, wenn Status 200 ist UND es ein Bild ist
            if (res.ok && type && type.startsWith("image")) {
              return path;
            }
            return null;
          })
          .catch(() => null); // Bei Fehler (Netzwerk etc.) einfach null zurückgeben
      });

      // Wir warten bis ALLE Checks fertig sind (geht parallel -> sehr schnell)
      const results = await Promise.all(checkPromises);

      // Wir filtern alle 'null' Werte raus (die nicht gefunden wurden)
      const validPaths = results.filter(
        (path): path is string => path !== null
      );

      console.log(`Gefunden: ${validPaths.length} Bilder`);
      setFoundImages(validPaths);
    };

    loadImages();
  }, []);

  const displayImages = useMemo(() => {
    if (foundImages.length === 0) return [];

    // Bilder vervielfachen für flüssigen Marquee-Loop
    return [...foundImages, ...foundImages, ...foundImages, ...foundImages];
  }, [foundImages]);

  return (
    <div className="idle-container">
      <div className="idle-wrapper">
        <div className="idle-top-bar">
          <div className="idle-headline">
            <p>Portfolio Machine</p>
          </div>

          <div className="cross-image-wrapper">
            <img src={cross} alt="Cross Icon" className="cross-icon" />
          </div>
        </div>

        <div className="idle-window">
          <div className="idle-window-bg">
            <img src={idleBg} className="idle-bg-img" />

            <div className="idle-marquee-wrapper">
              <div className="idle-marquee-track">
                {displayImages.map((coverImg, index) => (
                  <div key={index} className="idle-image-block">
                    <img src={coverImg} alt="Portfolio Cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="idle-stars-1-wrapper">
            <img src={stars} className="idle-stars-1" />
          </div>
          <div className="idle-stars-2-wrapper">
            <img src={stars} className="idle-stars-2" />
          </div>
        </div>

        <div className="idle-disk-container">
          <div className="idle-disk-img-container">
            <img
              src={disk}
              alt="Disk Icon"
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
