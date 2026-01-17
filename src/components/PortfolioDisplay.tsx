import { useStore } from "../store";
import { useStudentsData } from "../hooks/useStudentsData";
import { ContentDisplay } from "./ContentDisplay";
import { IdleScreen } from "./IdleScreen";
import closeIcon from "../assets/close.svg";
import bgImage from "../assets/idle-bg.png";
import leftIcon from "../assets/mini-left.png";
import rightIcon from "../assets/mini-right.png";
import "./PortfolioDisplay.css";

/**
 * Main portfolio display component
 */
export function PortfolioDisplay() {
  const currentStudentId = useStore((state) => state.currentStudentId);
  const currentProject = useStore((state) => state.currentProject);
  const wsConnected = useStore((state) => state.wsConnected);
  const scrollPosition = useStore((state) => state.scrollPosition);
  const scrollWidth = useStore((state) => state.scrollWidth);
  const clientWidth = useStore((state) => state.clientWidth);

  const { getStudentById, loading: studentsLoading } = useStudentsData();

  // Calculate custom scrollbar position and width
  // Make scroller width proportional to visible content (like native scrollbars)
  const scrollerContainerWidth = clientWidth || 3128; // Fallback to content width
  const scrollerWidth = scrollWidth > 0
    ? Math.max(100, (clientWidth / scrollWidth) * scrollerContainerWidth) // Min 100px
    : scrollerContainerWidth; // If no scroll, full width

  const maxScrollLeft = scrollWidth - clientWidth;
  const scrollPercentage = maxScrollLeft > 0 ? scrollPosition / maxScrollLeft : 0;

  // Calculate available space for scroller to move
  const maxScrollerLeft = scrollerContainerWidth - scrollerWidth;
  const scrollerLeft = scrollPercentage * maxScrollerLeft;

  console.log(maxScrollLeft);
  console.log(scrollPercentage);
  console.log(scrollerLeft);
  console.log(scrollWidth);
  console.log(clientWidth);

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
      <div className="portfolio-display-inner">
        <img className="portfolio-bg" src={bgImage} />

        <div className="portfolio-header">
          <div className="portfolio-header-inner">
            <h4 className="portfolio-title">Portfolio</h4>
            <div className="project-icons-pagination">folder icons</div>
            <div className="portfolio-right">
              <h4 className="portfolio-pagination-text">
                0{activeProjectNumber} I 0{student.projects.length}
              </h4>
              <div className="portfolio-close">
                <img src={closeIcon} alt="Close" />
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-content">
          <ContentDisplay
            studentId={currentStudentId}
            projectNumber={activeProjectNumber}
          />
        </div>

        <div className="portfolio-scollbar">
          <div className="portfolio-scroll-left">
            <img src={leftIcon} alt="Left" />
          </div>
          <div className="portfolio-scroll-middle">
            <div
              className="portfolio-scroller"
              style={{
                transform: `translateX(${scrollerLeft}px)`,
                width: `${scrollerWidth}px`
              }}
            ></div>
          </div>
          <div className="portfolio-scroll-right">
            <img src={rightIcon} alt="Right" />
          </div>
        </div>
      </div>
    </div>
  );
}
