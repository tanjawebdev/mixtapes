import React, { useMemo } from "react";
import { type Project } from "../data/studentData"; // Pfad ggf. anpassen
import "./ProjectGallery.scss";

interface ProjectGalleryProps {
  project: Project;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ project }) => {
  // LOGIK: Wir verdreifachen die Bilderliste für einen nahtlosen Loop.
  // useMemo verhindert, dass dies bei jedem Render neu berechnet wird.
  const displayImages = useMemo(() => {
    const images = project.images || []; // Fallback, falls undefined
    if (images.length === 0) return [];

    // 3x duplizieren: [1,2] -> [1,2, 1,2, 1,2]
    return [...images, ...images, ...images];
  }, [project.images]);

  return (
    <div className="project-wrapper">
      {/* --- HEADER BEREICH --- */}
      <div className="project-header">
        <div className="project-title-row">
          <h2>{project.title}</h2>
          <span className="project-year">{project.year}</span>
        </div>

        {/* Metadaten Raster */}
        <div className="project-meta-grid">
          <div className="meta-item">
            <span className="label">Type</span>
            <span className="value">{project.type}</span>
          </div>
          <div className="meta-item">
            <span className="label">Client</span>
            <span className="value">{project.client}</span>
          </div>
          <div className="meta-item">
            <span className="label">Collaborators</span>
            <span className="value">{project.collaborators || "—"}</span>
          </div>
        </div>

        {/* Beschreibung */}
        <div className="project-description">
          <p>{project.about}</p>
        </div>
      </div>

      {/* --- BILDER MARQUEE (Laufschrift) --- */}
      {displayImages.length > 0 ? (
        <div className="project-marquee-container">
          <div className="marquee-track">
            {displayImages.map((imgSrc, index) => (
              <div key={index} className="project-image-card">
                <img
                  src={imgSrc}
                  alt={`${project.title} work ${index}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Fallback, wenn keine Bilder da sind
        <div className="no-images-placeholder">
          <p>[ No images uploaded for this project ]</p>
        </div>
      )}

      {/* Trennlinie zum nächsten Projekt */}
      <hr className="project-divider" />
    </div>
  );
};
