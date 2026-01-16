import { useStore } from "../store";
import { useStudentsData } from "../hooks/useStudentsData";
import { ContentDisplay } from "./ContentDisplay";
import { IdleScreen } from "./IdleScreen";
import "./PortfolioDisplay.css";

/**
 * Main portfolio display component
 */
export function PortfolioDisplay() {
  const currentStudentId = useStore((state) => state.currentStudentId);
  const currentProject = useStore((state) => state.currentProject);
  const wsConnected = useStore((state) => state.wsConnected);

  const { getStudentById, loading: studentsLoading } = useStudentsData();

  // --- 1. IDLE STATE CHECK ---
  if (!currentStudentId || currentStudentId === "") {
    return <IdleScreen isConnected={wsConnected} />;
  }

  // --- 2. LOADING STATE ---
  if (studentsLoading) {
    return (
      <div className="portfolio-loading">
        <div className="loading-spinner"></div>
        <p>Loading portfolio data...</p>
      </div>
    );
  }

  // Prepare Data
  const studentID = parseInt(currentStudentId);
  const student = getStudentById(studentID);

  // --- 3. ERROR STATE (Student Not Found) ---
  // If we have an ID but no matching student, return an error UI here.
  if (!student) {
    return (
      <div className="portfolio-error">
        <p>Student not found.</p>
      </div>
    );
  }

  // ensure we have a valid number. Default to 1 (or 0) if null.
  const activeProjectNumber = currentProject ?? 1;

  return (
    <div className="portfolio-display">
      <div className="portfolio-header">
        <div className="portfolio-header-inner">
          <h4 className="portfolio-title">Portfolio</h4>
          <div className="project-icons-pagination">folder icons</div>
          <h4 className="portfolio-pagination-text">
            {activeProjectNumber} I {student.projects.length}
          </h4>

          <div className="portfolio-close">close icon</div>
        </div>
      </div>

      <div className="portfolio-content">
        <ContentDisplay
          studentId={currentStudentId}
          projectNumber={activeProjectNumber}
        />
      </div>
    </div>
  );
}
