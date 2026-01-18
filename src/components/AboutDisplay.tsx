import { useStore } from "../store";
import {
  useStudentsData,
  getStudentBackgroundNumber,
} from "../hooks/useStudentsData";
import "./AboutDisplay.css";
import closeIcon from "../assets/close.svg";
import starIcon from "../assets/stars.png";
import textFileIcon from "../assets/text-file.png";
import categoriesIcon from "../assets/categories.png";
import textEditorIcon from "../assets/text-editor.png";
import cross from "../assets/Closing-Icon.png";
import idleBg from "../assets/idle-bg.jpg";
import book from "../assets/contact-book.png";
import stars from "../../public/Icons/chrome-star.png";

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
      <div className="abt-waiting-container">
        <div className="abt-waiting-wrapper">
          <div className="abt-waiting-top-bar">
            <div className="abt-waiting-headline">
              <p>OVERLAYS.EXE</p>
            </div>

            <div className="abt-cross-image-wrapper">
              <img src={cross} alt="Cross Icon" className="cross-icon" />
            </div>
          </div>

          <div className="abt-waiting-window">
            <div className="abt-waiting-window-bg">
              <img src={idleBg} className="abt-bg-img" />
              <div className="abt-stars-2-wrapper">
                <img src={stars} className="abt-stars-2" />
              </div>
              <div className="abt-waiting-instructions">
                <div className="abt-inst-top-bar ">
                  <div className="abt-inst-top-bar-left">
                    <div className="abt-bar-img-wrapper">
                      <img src={book} className="abt-bar-img" />
                    </div>
                    <p>instructions</p>
                  </div>
                  <div className="abt-bar-cross-img-wrapper">
                    <img src={cross} alt="Cross Icon" className="abt-bar-img" />
                  </div>
                </div>
                <div className="abt-inst-window">
                  <div className="abt-inst-center-btn">
                    <p>Please insert Disc to view Portfolio</p>
                  </div>

                  <div className="abt-inst-text">
                    <p>WEAR HEADPHONES FOR THE FULL EXPERIENCE</p>
                  </div>
                </div>
              </div>
              <div className="abt-stars-1-wrapper">
                <img src={stars} className="abt-stars-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Loading state
  if (studentsLoading) {
    return (
      <div className="about-loading">
        <div className="loading-spinner"></div>
        <p>Loading project data...</p>
      </div>
    );
  }

  // Student or project not found
  if (!student || !project) {
    return (
      <div className="about-error">
        <h2>Project Not Found</h2>
        <p>
          Could not find project {currentProject} for student {currentStudentId}
        </p>
      </div>
    );
  }

  // Split project type into individual types
 // const projectTypes = project.type.split(" ");

  // Display project info
  return (
    <div className="about-display">
      <div className="about-display-bg">
        <img
          src={`major-bg/${student.major}-${randomBgNumber}.jpg`}
          alt="Background"
        />
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
                {project.type.map((skill, index) => (
                    <li key={index}>
                        {skill}
                    </li>
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
              {project.collaborators && project.collaborators !== "/" && (
                <div className="about-collaborators">
                  <span className="collaborators-label">COLLABORATORS:</span>
                  <span className="collaborators-names">
                    {project.collaborators}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
