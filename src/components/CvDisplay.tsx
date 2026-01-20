import { useStore } from "../store";
import {
  useStudentsData,
  getMajorFullName,
  getStudentBackgroundNumber,
} from "../hooks/useStudentsData";
import "./CvDisplay.css";

// --- NEU: Imports für die Animation ---
import { CurtainTransition } from "./CurtainTransition";
import { useTransitionSync } from "../hooks/useTransitionSync";

// Assets
import closeIcon from "../assets/close.svg";
import discIcon from "../assets/cd.gif";
import starIcon from "../assets/chrome-star.png";
import textfileIcon from "../assets/text-file.png";
import paintIcon from "../assets/paint.png";
import contactBookIcon from "../assets/contact-book.png";
import paperplaneIcon from "../assets/Paperplane.png";

/**
 * CV Display Component
 */
export function CvDisplay() {
  const currentStudentId = useStore((state) => state.currentStudentId);

  // --- NEU: State für die Animation holen & Sync aktivieren ---
  const transitionStage = useStore((state) => state.transitionStage);

  // WICHTIG: false = Slave Mode (hört nur zu)
  useTransitionSync(false);

  // Data Loading
  const { getStudentById, loading: studentsLoading } = useStudentsData();

  const studentID = currentStudentId ? parseInt(currentStudentId) : null;
  const student = studentID ? getStudentById(studentID) : null;
  const randomBgNumber = studentID ? getStudentBackgroundNumber(studentID) : 1;

  // --- NEU: Die Logik-Weiche ---
  // Wir zeigen den echten CV nur, wenn die Animation in der 'Enthüllungs-Phase' ist
  // UND wir einen Studenten gefunden haben.
  const showRealContent =
    ["CURTAIN_DOWN", "FINISHED"].includes(transitionStage) && student;

  return (
    <>
      {/* 1. Der Vorhang (Passiv, ohne Callbacks) */}
      <CurtainTransition />

      {/* 2. Die Entscheidung: Inhalt oder Warte-Bildschirm? */}
      {showRealContent ? (
        // -------------------------
        // A) ECHTER CV CONTENT
        // -------------------------
        <div className="cv-display">
          <div className="cv-display-inner">
            <div className="cv-display-bg">
              <img
                src={`major-bg/${student.major}-${randomBgNumber}.jpg`}
                alt="Background"
              />
            </div>

            <div className="cv-header">
              <h3>Curriculum Vitae</h3>
              <img src={closeIcon} alt="Close" />
            </div>

            <div className="cv-top-section">
              <div className="cv-cover-section">
                <div className="cv-cover-image">
                  <img src={`covers/${studentID}.jpg`} />
                </div>
                <div className="cv-cover-disc">
                  <img src={discIcon} alt="Student" />
                </div>
              </div>
              <div className="cv-star-element">
                <img src={starIcon} alt="Student" />
              </div>
              <div className="cv-major-element">
                <img src={`majors/${student.major}_3d.png`} />
              </div>
              <div className="cv-photo-section">
                <img src={`students/${studentID}/portrait.jpg`} alt="Student" />
              </div>
              <div className="cv-title-section">
                <div className="cv-title-header">
                  <div className="header-left">
                    <img
                      className="portfolio-icon"
                      src={`majors/${student.major}_icon.png`}
                    />
                    <h5>{getMajorFullName(student.major)}</h5>
                  </div>
                  <img src={closeIcon} alt="Close" />
                </div>
                <div className="cv-title-name">
                  <h1 className="cv-name">
                    {student.surname}
                    <br /> {student.name}
                  </h1>
                </div>
              </div>
            </div>

            <div className="cv-middle-section">
              {/* About Me */}
              {student.aboutMe && (
                <section className="cv-about">
                  <div className="cv-header-about">
                    <div className="header-left">
                      <img
                        className="portfolio-icon"
                        src={textfileIcon}
                        alt="Student"
                      />
                      <h5>About Me</h5>
                    </div>
                    <img src={closeIcon} alt="Close" />
                  </div>
                  <div className="cv-about-content">
                    <div className="cv-about-text">
                      <p>{student.aboutMe}</p>
                    </div>
                  </div>
                </section>
              )}

              {/* Skills */}
              {student.skills && student.skills.length > 0 && (
                <section className="cv-skills">
                  <div className="cv-header-skills">
                    <div className="header-left">
                      <img
                        className="portfolio-icon"
                        src={paintIcon}
                        alt="Student"
                      />
                      <h5>Skills</h5>
                    </div>
                    <img src={closeIcon} alt="Close" />
                  </div>
                  <div className="cv-skills-content">
                    <ul className="skills-list">
                      {student.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}

              <div className="cv-star-element-2">
                <img src={starIcon} alt="Student" />
              </div>
            </div>

            <div className="cv-bottom-section">
              {/* Experience */}
              {student.experiences && student.experiences.length > 0 && (
                <>
                  <section className="cv-experiences">
                    <div className="cv-header-experiences">
                      <div className="header-left">
                        <img
                          className="portfolio-icon"
                          src={contactBookIcon}
                          alt="Student"
                        />
                        <h5>Experience</h5>
                      </div>
                      <img src={closeIcon} alt="Close" />
                    </div>
                    <div className="experiences-content">
                      {student.experiences.map((experience, index) => (
                        <div key={index} className="experience-item">
                          <div className="experience-year-wrapper">
                            <div className="experience-year">
                              <span> {experience.years}</span>
                            </div>
                          </div>
                          <div className="experience-company-wrapper">
                            <div className="experience-company">
                              {experience.company}
                            </div>
                          </div>
                          <div className="experience-position">
                            {experience.position}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <div className="cv-qr-section">
                    <div className="cv-qr-header">
                      <div className="header-left">
                        <img
                          className="portfolio-icon"
                          src={paperplaneIcon}
                          alt="Student"
                        />
                        <h5>Link up</h5>
                      </div>
                      <img src={closeIcon} alt="Close" />
                    </div>
                    <div className="cv-qr-content">
                      <div className="qr-code-wrapper">
                        <img src={`students/${studentID}/qr.png`} alt="qr" />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        // -------------------------
        // B) WAITING / IDLE SCREEN
        // -------------------------
        <div className="cv-waiting">
          <div className="waiting-message">
            <h1>Student CV</h1>
            {studentsLoading ? (
              <div className="loading-spinner"></div>
            ) : (
              <p>Waiting for OSC trigger...</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
