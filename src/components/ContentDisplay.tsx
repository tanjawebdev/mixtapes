import { useStudentMedia } from "../hooks/useStudentMedia";
import { useStudentsData } from "../hooks/useStudentsData";
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
      {/* Optional: Display project metadata */}
      <div className="project-header">
        <h2 className="project-title">{project.title}</h2> test
        <p className="project-meta">
          {project.year} · {project.type}
        </p>
      </div>

      {/* Media Gallery */}
      <div className="project-gallery">
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

      {/* Optional: Display project description at bottom */}
      {project.about && (
        <div className="project-footer">
          <p className="project-about">{project.about}</p>
          {project.collaborators && (
            <p className="project-collaborators">
              Collaborators: {project.collaborators}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
