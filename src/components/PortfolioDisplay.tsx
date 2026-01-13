import { useStore } from "../utils/store";
import { ContentDisplay } from "./ContentDisplay";
import "../styles/main.scss";

/**
 * Main portfolio display component
 *
 * Reads current student and state from store and displays the appropriate content.
 * Handles transitions between different content states.
 */
export function PortfolioDisplay() {
  const currentStudentId = useStore((state) => state.currentStudentId);
  const currentState = useStore((state) => state.currentState);
  const studentData = useStore((state) =>
    currentStudentId ? state.studentDataCache[currentStudentId] : null
  );
  const isLoading = useStore((state) => state.isLoading);

  // No student selected yet
  if (!currentStudentId || !currentState) {
    return (
      <div className="portfolio-waiting">
        <div className="waiting-message">
          <h1>Insert CD</h1>
        </div>
      </div>
    );
  }

  // Loading state
  if (isLoading || !studentData) {
    return (
      <div className="portfolio-loading">
        <div className="loading-spinner"></div>
        <p>Loading portfolio...</p>
      </div>
    );
  }

  // Display content
  return (
    <div className="portfolio-display">
      <div className="portfolio-header">
        <h1>{studentData.name}</h1>
      </div>

      <div className="portfolio-content">
        <ContentDisplay studentId={currentStudentId} filename={currentState} />
      </div>
    </div>
  );
}
