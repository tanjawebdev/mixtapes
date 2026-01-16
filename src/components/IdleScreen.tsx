import React, { useMemo, useState, useEffect } from "react";
import "./IdleScreen.css";
import cross from "../../public/Icons/Closing-Icon.png";
import disk from "../../public/Icons/disk.png";
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
        <div className="top-bar">
          <p>Portfolio Machine</p>
          <div className="cross-image-wrapper">
            <img src={cross} alt="Cross Icon" className="cross-icon" />
          </div>
        </div>

        {/* <div className="marquee-wrapper">
          <div className="marquee-track">
            {displayImages.map((coverImg, index) => (
              <div key={index} className="image-block">
                <img src={coverImg} alt="Portfolio Cover" />
              </div>
            ))}
          </div>
        </div> */}

        <div className="insert-disk-container">
          <div className="disk-img-container">
            <img
              src={disk}
              alt="Disk Icon"
              className="disk-icon"
              style={{ opacity: isConnected ? 1 : 0.5 }}
            />
          </div>
          <div className="inner-container">
            <p>{isConnected ? "Insert Disk" : "Connecting..."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
