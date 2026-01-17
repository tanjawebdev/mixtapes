import { useStore } from '../store';
import { useStudentsData, getStudentBackgroundNumber } from '../hooks/useStudentsData';
import './AboutDisplay.css';
import closeIcon from '../assets/close.svg';
import starIcon from '../assets/stars.png';
import textFileIcon from '../assets/text-file.png';
import categoriesIcon from '../assets/categories.png';
import textEditorIcon from '../assets/text-editor.png';

/**
 * About Display Component
 *
 * Displays current project description on the right screen
 * Shows: project title, year, type, client, description, collaborators
 */
export function AboutDisplay() {
  const currentStudentId = useStore((state) => state.currentStudentId);
  const currentProject = useStore((state) => state.currentProject);

  const { getStudentById, loading: studentsLoading } = useStudentsData();

  const studentID = currentStudentId ? parseInt(currentStudentId) : null;
  const student = studentID ? getStudentById(studentID) : null;
  const project =
    student && currentProject ? student.projects[currentProject - 1] : null;

    // Get consistent background number for this student (1-4)
    const randomBgNumber = studentID ? getStudentBackgroundNumber(studentID) : 1;

    // No student or project selected yet
    if (!currentStudentId || currentProject === null) {
        return (
            <div className="about-waiting">
                <div className="waiting-message">
                    <h1>Project Info</h1>
                    <p>Waiting for OSC trigger...</p>
                </div>
            </div>
          </div>

          <div className="window-content-mask">
            <div className="window-bg-img-wrapper">
              <img src={idleBg} className="idle-bg-img" />
            </div>

            <div className="stars-abt-2-wrapper">
              <img src={stars} className="stars-2" />
            </div>
          </div>
        </div>

    // Split project type into individual types
    const projectTypes = project.type.split(' ');

    // Display project info
    return (
        <div className="about-display">
            <div className="about-display-bg">
                <img src={`major-bg/${student.major}-${randomBgNumber}.jpg`} alt="Background" />
            </div>
            <div className="cross-image-wrapper">
              <img src={cross} alt="Cross Icon" className="cross-icon" />
            </div>
          </div>

            <div className="about-display-inner">
                {/* Main Project Description Container */}
                <div className="about-main-container">
                    <div className="about-main-header">
                        <h3>Project Description</h3>
                        <img src={closeIcon} alt="Close" />
                    </div>

                    <div className="about-content-wrapper">
                        {/* Project Title Section */}
                        <div className="about-title-section">

                            <div className="about-title-header">
                                <div className="header-left">
                                    <img src={textFileIcon} alt="Text File" />
                                    <h5>PROJECT TITLE</h5>
                                </div>
                                <img src={closeIcon} alt="Close" />
                            </div>
                            <div className="about-title-content">
                                <h2>{project.title}</h2>
                                <div className="about-year-badge primary-button">
                                    <span>{project.year}</span>
                                </div>
                            </div>
                        </div>

                        {/* Type of Project Section */}
                        <div className="about-type-section">
                            <div className="about-type-header">
                                <div className="header-left">
                                    <img src={categoriesIcon} alt="Categories" />
                                    <h5>TYPE OF PROJECT</h5>
                                </div>
                                <img src={closeIcon} alt="Close" />
                            </div>
                            <div className="about-type-content">
                                {projectTypes.map((type, index) => (
                                    <div key={index} className="type-item">{type}</div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* About the Project Section */}
                    <div className="about-description-container">
                        <div className="about-description-header">
                            <div className="header-left">
                                <img src={textEditorIcon} alt="Text Editor" />
                                <h5>ABOUT THE PROJECT</h5>
                            </div>
                            <img src={closeIcon} alt="Close" />
                        </div>
                        <div className="about-description-content">
                            <div className="about-client primary-button">
                                <span>{project.client}</span>
                            </div>
                            <div className="about-star-icon">
                                <img src={starIcon} alt="Star" />
                            </div>
                            <p className="about-description-text">{project.about}</p>
                            {project.collaborators && project.collaborators !== '/' && (
                                <div className="about-collaborators">
                                    <span className="collaborators-label">COLLABORATORS:</span>
                                    <span className="collaborators-names">{project.collaborators}</span>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </div>

      {project.about && (
        <section className="about-description">
          <p>{project.about}</p>
        </section>
      )}

      {project.collaborators && (
        <section className="about-collaborators">
          <h3>Collaborators</h3>
          <p>{project.collaborators}</p>
        </section>
      )}

      <footer className="about-footer">
        <p className="student-credit">
          by {student.surname} {student.name}
        </p>
      </footer>
    </div>
  );
}
