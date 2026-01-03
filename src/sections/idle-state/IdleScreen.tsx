import React, { useMemo } from "react";
import "./IdleScreen.scss";
import "../../data/studentData";
import cross from "../../assets/icons/X_Icons.svg";
import disk from "../../assets/icons/Insertdisk_Icon.png";

interface IdleScreenProps {
  images: string[];
  onConnect: () => void;
  isConnected: boolean;
}

export const IdleScreen: React.FC<IdleScreenProps> = ({
  images,
  onConnect,
  isConnected,
}) => {
  const displayImages = useMemo(() => {
    const imgs = images || [];
    return [...imgs, ...imgs, ...imgs];
  }, [images]);

  return (
    <div className="idle-container">
      <div className="idle-wrapper">
        <div className="top-bar">
          <p>portfoliomachine</p>
          <img src={cross} alt="Cross Icon" className="cross-icon" />
        </div>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {displayImages.map((coverImg, index) => (
              <div key={index} className="image-block">
                <img src={coverImg} alt="Portfolio Cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="insert-disk-container">
          <div className="disk-img-container">
            <img src={disk} alt="Disk Icon" className="disk-icon" />
          </div>
          <div className="inner-container">
            <p>Insert Disk</p>
          </div>
        </div>
      </div>

      {!isConnected && (
        <button className="start-button" onClick={onConnect}>
          Connect Arduino
        </button>
      )}
    </div>
  );
};
