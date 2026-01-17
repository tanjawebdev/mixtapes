import { useEffect, useRef } from "react";
import { useStudentMedia } from "../hooks/useStudentMedia";
import { useStudentsData } from "../hooks/useStudentsData";
import { useStore } from "../store";
import leftIcon from "../assets/left.png";
import rightIcon from "../assets/right.png";
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
  const setScrollMetrics = useStore((state) => state.setScrollMetrics);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Calculate and store scroll metrics when gallery content loads
  useEffect(() => {
    if (!galleryRef.current || mediaFiles.length === 0) return;

    const calculateTotalWidth = () => {
      if (!galleryRef.current) return;

      const { clientWidth } = galleryRef.current;

      // Manually calculate total width by summing all gallery items + gaps
      const galleryItems = galleryRef.current.querySelectorAll('.gallery-item');
      let totalWidth = 0;
      const GAP = 32; // 2rem = 32px (match CSS gap: 2rem)

      galleryItems.forEach((item, index) => {
        totalWidth += (item as HTMLElement).offsetWidth;
        if (index < galleryItems.length - 1) {
          totalWidth += GAP; // Add gap between items
        }
      });

      console.log('Calculated total width:', totalWidth, 'Client width:', clientWidth);
      setScrollMetrics(totalWidth, clientWidth);
    };

    // Wait for all images and videos to load before calculating
    const images = galleryRef.current.querySelectorAll('img');
    const videos = galleryRef.current.querySelectorAll('video');
    const allMedia = [...Array.from(images), ...Array.from(videos)];

    let loadedCount = 0;
    const totalMedia = allMedia.length;

    const handleMediaLoad = () => {
      loadedCount++;
      if (loadedCount === totalMedia) {
        // All media loaded, now calculate
        calculateTotalWidth();
      }
    };

    // Add load listeners to all media
    allMedia.forEach((media) => {
      if (
        (media instanceof HTMLImageElement && media.complete) ||
        (media instanceof HTMLVideoElement && media.readyState >= 2)
      ) {
        // Already loaded
        loadedCount++;
      } else {
        media.addEventListener('load', handleMediaLoad);
        media.addEventListener('loadedmetadata', handleMediaLoad); // For videos
      }
    });

    // If all media already loaded, calculate immediately
    if (loadedCount === totalMedia) {
      calculateTotalWidth();
    }

    // Also use ResizeObserver as fallback to detect size changes
    const resizeObserver = new ResizeObserver(() => {
      calculateTotalWidth();
    });
    resizeObserver.observe(galleryRef.current);

    return () => {
      allMedia.forEach((media) => {
        media.removeEventListener('load', handleMediaLoad);
        media.removeEventListener('loadedmetadata', handleMediaLoad);
      });
      resizeObserver.disconnect();
    };
  }, [mediaFiles, setScrollMetrics]);

  // Update gallery scroll position when scrollPosition changes in store
  useEffect(() => {
    if (galleryRef.current) {
      // Map scrollPosition (0-127 or your OSC range) to scroll pixel value
      // Adjust multiplier/mapping based on your needs
<<<<<<< Updated upstream
      const scrollLeft = scrollPosition; // Example: multiply by 10 for pixel position
=======
      const scrollLeft = scrollPosition; // *200 // Example: multiply by 10 for pixel position
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    <>
      <div className="project-left-icon project-icon">
        <img src={leftIcon} alt="Left" />
      </div>
      <div className="project-content">
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
      <div className="project-right-icon project-icon">
        <img src={rightIcon} alt="Right" />
=======
    <div className="project-content">
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
>>>>>>> Stashed changes
      </div>
    </>
  );
}
