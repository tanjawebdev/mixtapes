import { useEffect, useRef } from "react";
import { useStudentMedia } from "../hooks/useStudentMedia";
import { useStudentsData } from "../hooks/useStudentsData";
import { useStore } from "../store";
import "./ContentDisplay.css";

interface ContentDisplayProps {
  studentId: string;
  projectNumber: number;
}

/**
 * Displays all images and videos from a project folder
 * Project structure: /public/students/[studentID]/[projectNumber]/
 *
 * Now uses automatic media discovery via useStudentMedia hook
 */
export function ContentDisplay({
  studentId,
  projectNumber,
}: ContentDisplayProps) {
  // Convert studentId string to number (e.g., "01" -> 1)
  const studentID = parseInt(studentId);

  // Get student data and project metadata
  const { getStudentById, loading: studentsLoading } = useStudentsData();
  const student = getStudentById(studentID);
  const project = student?.projects[projectNumber - 1];

  // Auto-discover media files from folder
  const { all: mediaFiles } = useStudentMedia(studentID, projectNumber);

  // Get scroll position from store and create ref for gallery
  const scrollPosition = useStore((state) => state.scrollPosition);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Update gallery scroll position when scrollPosition changes in store
  useEffect(() => {
    if (galleryRef.current) {
      // Map scrollPosition (0-127 or your OSC range) to scroll pixel value
      // Adjust multiplier/mapping based on your needs
      const scrollLeft = scrollPosition * 10; // Example: multiply by 10 for pixel position
      galleryRef.current.scrollLeft = scrollLeft;
    }
  }, [scrollPosition]);

  // Loading state
  if (studentsLoading) {
    return (
      <div className="project-loading">
        <div className="loading-spinner"></div>
        <p>Loading project {projectNumber}...</p>
      </div>
    );
  }

  // Error states
  if (!student) {
    return (
      <div className="project-empty">
        <p>Student not found</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-empty">
        <p>Project {projectNumber} not found for this student</p>
      </div>
    );
  }

  if (mediaFiles.length === 0) {
    return (
      <div className="project-empty">
        <p>No media files in this project</p>
        <p className="project-empty__hint">
          Add images or videos to: /public/students/{studentID}/{projectNumber}/
        </p>
      </div>
    );
  }

  return (
    <div className="project-content">
      {/* TEMPORARY: Dev test buttons - remove when OSC is working */}
      <div style={{ position: 'absolute', top: 10, left: '40%', zIndex: 1000, display: 'flex', gap: '8px' }}>
        <button onClick={() => useStore.getState().setScrollPosition(0)} style={{ padding: '8px 12px', background: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Start (0)
        </button>
        <button onClick={() => useStore.getState().setScrollPosition(100)} style={{ padding: '8px 12px', background: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Mid (100)
        </button>
        <button onClick={() => useStore.getState().setScrollPosition(500)} style={{ padding: '8px 12px', background: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Far (500)
        </button>
        <button onClick={() => useStore.getState().setScrollPosition(1000)} style={{ padding: '8px 12px', background: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Further (1000)
        </button>
      </div>

      {/* TEMPORARY: Dev test buttons - prev next test of projects */}
      <div style={{ position: 'absolute', top: 10, left: '60%', zIndex: 1000, display: 'flex', gap: '8px' }}>
        <button onClick={() => useStore.getState().navigateProject('prev')} style={{ padding: '8px 12px', background: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Prev
        </button>
        <button onClick={() => useStore.getState().navigateProject('next')} style={{ padding: '8px 12px', background: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Next
        </button>
      </div>

      <div className="project-gallery" ref={galleryRef}>
        {mediaFiles.map((media, index) => (
          <div key={index} className="gallery-item">
            {media.type === "image" ? (
              <img
                src={media.path}
                alt={`${project.title} - ${media.filename}`}
                className="gallery-image"
                loading="lazy"
              />
            ) : (
              <video
                src={media.path}
                controls
                autoPlay
                loop
                muted
                className="gallery-video"
              >
                Your browser does not support video playback.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
