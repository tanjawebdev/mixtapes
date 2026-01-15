import { useStore } from '../store';
import { useStudentsData } from '../hooks/useStudentsData';
import { ContentDisplay } from './ContentDisplay';
import './PortfolioDisplay.css';

/**
 * Main portfolio display component
 * 
 * Reads current student and project from store and displays all content from that project folder.
 * Project structure: /public/students/[studentID]/[projectNumber]/
 */
export function PortfolioDisplay() {
    const currentStudentId = useStore((state) => state.currentStudentId);
    const currentProject = useStore((state) => state.currentProject);

    // Use the new data loading system
    const { getStudentById, loading: studentsLoading } = useStudentsData();

    // Convert string studentId to number for lookup
    const studentID = currentStudentId ? parseInt(currentStudentId) : null;
    const student = studentID ? getStudentById(studentID) : null;

    // No student selected yet
    if (!currentStudentId || currentProject === null) {
        return (
            <div className="portfolio-waiting">
                <div className="waiting-message">
                    <h1>Portfolio Exhibition</h1>
                    <p>Waiting for OSC trigger...</p>
                </div>
            </div>
        );
    }

    // Loading state
    if (studentsLoading) {
        return (
            <div className="portfolio-loading">
                <div className="loading-spinner"></div>
                <p>Loading portfolio data...</p>
            </div>
        );
    }

    // Student not found
    if (!student) {
        return (
            <div className="portfolio-error">
                <h2>Student Not Found</h2>
                <p>Could not find student with ID: {currentStudentId}</p>
            </div>
        );
    }

    // Display content
    return (
        <div className="portfolio-display">
            <div className="portfolio-header">
                <div className="portfolio-header-inner">
                    <h4 className="portfolio-title">Portfolio</h4>
                    <div className="project-icons-pagination">folder icons</div>
                    <h4 className="portfolio-pagination-text">{currentProject} I {student.projects.length}</h4>
                    <div className="portfolio-close">close icon</div>
                </div>
            </div>

            <div className="portfolio-content">
                <ContentDisplay
                    studentId={currentStudentId}
                    projectNumber={currentProject}
                />
            </div>
        </div>
    );
}
