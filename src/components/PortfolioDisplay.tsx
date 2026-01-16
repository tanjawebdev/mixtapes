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

  // KORREKTUR 1: Den richtigen Namen aus dem Store verwenden ('wsConnected')
  const wsConnected = useStore((state) => state.wsConnected);

  const { getStudentById, loading: studentsLoading } = useStudentsData();

  // --- 1. IDLE STATE CHECK ---
  // Wenn currentStudentId leer ("") oder null ist -> Zeige IdleScreen
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

  // Daten vorbereiten (erst jetzt, da wir wissen, dass eine ID existiert)
  const studentID = parseInt(currentStudentId);
  const student = getStudentById(studentID);

  // --- 3. ERROR STATE ---
  // ID ist da, aber kein Schüler in der Datenbank gefunden
  if (!student) {
    return (
        <div className="portfolio-display">
            {/* TODO: add idle screen if no student selected */}

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
        </div >
    );
}
