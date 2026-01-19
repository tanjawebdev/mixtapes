import { useStore } from '../store';
import { useStudentsData, getMajorFullName, getStudentBackgroundNumber } from '../hooks/useStudentsData';
import './CvDisplay.css';
import closeIcon from '../assets/close.svg';
import discIcon from '../assets/cd.gif';
import starIcon from '../assets/chrome-star.png';
import textfileIcon from '../assets/text-file.png';
import paintIcon from '../assets/paint.png';
import contactBookIcon from '../assets/contact-book.png';
import paperplaneIcon from '../assets/Paperplane.png';
import { IdlePosterScreen } from './IdlePosterScreen';

/**
 * CV Display Component
 * 
 * Displays student CV/resume on the left screen
 * Shows: photo, name, about me, skills, experiences, portfolio link
 */
export function CvDisplay() {
    const currentStudentId = useStore((state) => state.currentStudentId);
    const studentActive = useStore((state) => state.studentActive);

    // Check if idle screen should be shown
    const showIdleScreen = !currentStudentId || !studentActive;

    if (showIdleScreen) {
        return <IdlePosterScreen />;
    }

    // Use the new data loading system
    const { getStudentById, loading: studentsLoading } = useStudentsData();

    // Convert string studentId to number for lookup
    const studentID = currentStudentId ? parseInt(currentStudentId) : null;
    const student = studentID ? getStudentById(studentID) : null;

    // Get consistent background number for this student (1-4)
    const randomBgNumber = studentID ? getStudentBackgroundNumber(studentID) : 1;

    // Loading state
    if (studentsLoading) {
        return (
            <div className="cv-loading">
                <div className="loading-spinner"></div>
                <p>Loading CV data...</p>
            </div>
        );
    }

    // Student not found
    if (!student) {
        return (
            <div className="cv-error">
                <h2>Student Not Found</h2>
                <p>Could not find student with ID: {currentStudentId}</p>
            </div>
        );
    }

    // Display CV
    return (
        <div className="cv-display">

            <div className="cv-display-inner">
                <div className="cv-display-bg">
                    <img src={`major-bg/${student.major}-${randomBgNumber}.jpg`} alt="Background" />
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
                                <img className="portfolio-icon" src={`majors/${student.major}_icon.png`} />
                                <h5>{getMajorFullName(student.major)}</h5>
                            </div>
                            <img src={closeIcon} alt="Close" />
                        </div>
                        <div className="cv-title-name">
                            <h1 className="cv-name">{student.surname}<br /> {student.name}</h1>
                        </div>
                    </div>
                </div>

                <div className="cv-middle-section">
                    {/* About Me Section */}
                    {student.aboutMe && (
                        <section className="cv-about">
                            <div className="cv-header-about">
                                <div className="header-left">
                                    <img className="portfolio-icon" src={textfileIcon} alt="Student" />
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

                    {/* Skills Section */}
                    {student.skills && student.skills.length > 0 && (
                        <section className="cv-skills">
                            <div className="cv-header-skills">
                                <div className="header-left">
                                    <img className="portfolio-icon" src={paintIcon} alt="Student" />
                                    <h5>Skills</h5>
                                </div>
                                <img src={closeIcon} alt="Close" />
                            </div>
                            <div className="cv-skills-content">
                                <ul className="skills-list">
                                    {student.skills.map((skill, index) => (
                                        <li key={index}>
                                            {skill}
                                        </li>
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
                    {/* Experience Section */}
                    {student.experiences && student.experiences.length > 0 && (
                        <>
                            <section className="cv-experiences">
                                <div className="cv-header-experiences">
                                    <div className="header-left">
                                        <img className="portfolio-icon" src={contactBookIcon} alt="Student" />
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
                                                <div className="experience-company">{experience.company}</div>
                                            </div>
                                            <div className="experience-position">{experience.position}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <div className="cv-qr-section">
                                <div className="cv-qr-header">
                                    <div className="header-left">
                                        <img className="portfolio-icon" src={paperplaneIcon} alt="Student" />
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
        </div >
    );
}
