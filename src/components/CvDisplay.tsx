import { useStore } from '../store';
import { useStudentsData } from '../hooks/useStudentsData';
import './CvDisplay.css';

/**
 * CV Display Component
 * 
 * Displays student CV/resume on the left screen
 * Shows: photo, name, about me, skills, experiences, portfolio link
 */
export function CvDisplay() {
    const currentStudentId = useStore((state) => state.currentStudentId);

    // Use the new data loading system
    const { getStudentById, loading: studentsLoading } = useStudentsData();

    // Convert string studentId to number for lookup
    const studentID = currentStudentId ? parseInt(currentStudentId) : null;
    const student = studentID ? getStudentById(studentID) : null;

    // No student selected yet
    if (!currentStudentId) {
        return (
            <div className="cv-waiting">
                <div className="waiting-message">
                    <h1>Student CV</h1>
                    <p>Waiting for OSC trigger...</p>
                </div>
            </div>
        );
    }

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
            <div className="cv-header">
                <h1 className="cv-name">{student.surname} {student.name}</h1>
                {student.portfolioLink && (
                    <a href={`https://${student.portfolioLink}`} target="_blank" rel="noopener noreferrer" className="cv-portfolio-link">
                        {student.portfolioLink}
                    </a>
                )}
            </div>

            {/* About Me Section */}
            {student.aboutMe && (
                <section className="cv-section cv-about">
                    <h2>About Me</h2>
                    <p>{student.aboutMe}</p>
                </section>
            )}

            {/* Skills Section */}
            {student.skills && student.skills.length > 0 && (
                <section className="cv-section cv-skills">
                    <h2>Skills</h2>
                    <ul className="skills-list">
                        {student.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Experience Section */}
            {student.experiences && student.experiences.length > 0 && (
                <section className="cv-section cv-experiences">
                    <h2>Experience</h2>
                    <ul className="experiences-list">
                        {student.experiences.map((experience, index) => (
                            <li key={index}>{experience}</li>
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
}
