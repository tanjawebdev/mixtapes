import { useStore } from '../store';
import { useStudentsData } from '../hooks/useStudentsData';
import './AboutDisplay.css';

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
    const project = student && currentProject ? student.projects[currentProject - 1] : null;

    // No student or project selected yet
    if (!currentStudentId || currentProject === null) {
        return (
            <div className="about-waiting">
                <div className="waiting-message">
                    <h1>Project Info</h1>
                    <p>Waiting for OSC trigger...</p>
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
                <p>Could not find project {currentProject} for student {currentStudentId}</p>
            </div>
        );
    }

    // Display project info
    return (
        <div className="about-display">
            <div className="about-header">
                <h1 className="project-title">{project.title}</h1>
                <div className="project-meta">
                    <span className="meta-year">{project.year}</span>
                    <span className="meta-separator">·</span>
                    <span className="meta-type">{project.type}</span>
                    {project.client && (
                        <>
                            <span className="meta-separator">·</span>
                            <span className="meta-client">{project.client}</span>
                        </>
                    )}
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
