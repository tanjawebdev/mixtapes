import { useState } from "react"; // useEffect entfernen wir für den Trigger
import { useStore } from "../store";
import { useStudentsData } from "../hooks/useStudentsData";
import { ContentDisplay } from "./ContentDisplay";
import { IdleScreen } from "./IdleScreen";
import closeIcon from "../assets/close.svg";
import bgImage from "../assets/idle-bg.png";
import leftIcon from "../assets/mini-left.png";
import rightIcon from "../assets/mini-right.png";
import "./PortfolioDisplay.css";
import folderClosedIcon from "../assets/folder-close.png";
import folderOpenIcon from "../assets/folder-open.png";

export function PortfolioDisplay() {
  // 1. Store Hooks
  const currentStudentId = useStore((state) => state.currentStudentId);
  const setCurrentStudent = useStore((state) => state.setCurrentStudent);
  const currentProject = useStore((state) => state.currentProject);
  const wsConnected = useStore((state) => state.wsConnected);
  const studentActive = useStore((state) => state.studentActive);

  // UI Store Hooks
  const scrollPosition = useStore((state) => state.scrollPosition);
  const scrollWidth = useStore((state) => state.scrollWidth);
  const clientWidth = useStore((state) => state.clientWidth);

  const { getStudentById, loading: studentsLoading } = useStudentsData();

  // 2. Local State
  const [isIdleExiting, setIsIdleExiting] = useState(false);
  const [animatingStudentId, setAnimatingStudentId] = useState<string | null>(
    null
  );

  // State um Änderungen zu erkennen (ersetzt den useEffect Dependency Array)
  const [lastHandledId, setLastHandledId] = useState(currentStudentId);

  // --- LOGIC: RENDER-PHASE UPDATE (Fixes ESLint & Flash) ---
  // Wir prüfen hier direkt, ob sich die Store-ID verändert hat.
  if (currentStudentId !== lastHandledId) {
    setLastHandledId(currentStudentId); // Update tracked ID

    if (currentStudentId) {
      // 1. Neuer Student da -> Sofort Animation starten
      // Da dies während des Renders passiert, gibt es keinen "Content Flash"
      console.log("🎬 Starting Idle Exit Animation for:", currentStudentId);
      setAnimatingStudentId(currentStudentId);
      setIsIdleExiting(true);
    } else {
      // 2. Reset (CD raus) -> Sofort alles zurücksetzen
      setIsIdleExiting(false);
      setAnimatingStudentId(null);
    }
  }

  // Callback: Wird von IdleScreen aufgerufen, wenn GSAP fertig ist
  const handleIdleAnimationComplete = () => {
    console.log("✅ Idle Animation Complete. Switching to Content.");
    setIsIdleExiting(false);
  };

  // --- SCROLLBAR CALCULATIONS ---
  const SCROLLBAR_CONTAINER_WIDTH = 3578;
  const scrollerWidth =
    scrollWidth > 0
      ? Math.max(100, (clientWidth / scrollWidth) * SCROLLBAR_CONTAINER_WIDTH)
      : SCROLLBAR_CONTAINER_WIDTH;

  const maxScrollLeft = scrollWidth - clientWidth;
  const scrollPercentage =
    maxScrollLeft > 0 ? scrollPosition / maxScrollLeft : 0;
  const clampedScrollPercentage = Math.max(0, Math.min(1, scrollPercentage));
  const maxScrollerLeft = SCROLLBAR_CONTAINER_WIDTH - scrollerWidth;
  const scrollerLeft = clampedScrollPercentage * maxScrollerLeft;

  // --- VIEW LOGIC ---

  const showIdleScreen = !currentStudentId || isIdleExiting || !studentActive;

  // Nimmt entweder die ID die wir gerade animieren oder die aktuelle
  const targetIdForIdle = animatingStudentId || currentStudentId;

  if (showIdleScreen) {
    return (
      <IdleScreen
        // Der Key ist entscheidend! Er zwingt React, den Screen neu zu bauen,
        // wenn sich die ID ändert. Das garantiert, dass GSAP sauber von vorne startet.
        key="idle-screen-static"
        isConnected={wsConnected}
        targetStudentId={targetIdForIdle}
        onAnimationComplete={handleIdleAnimationComplete}
        onFakeNfc={(id) => setCurrentStudent(id)}
      />
    );
  }

  // --- LOADING STATE ---
  if (studentsLoading) {
    return (
      <div className="portfolio-loading">
        <div className="loading-spinner"></div>
        <p>Loading portfolio data...</p>
      </div>
    );
  }

  // Daten holen
  const studentID = parseInt(currentStudentId || "0");
  const student = getStudentById(studentID);

  // --- ERROR STATE ---
  if (!student) {
    return (
      <div className="portfolio-error">
        <p>Student not found (ID: {currentStudentId})</p>
      </div>
    );
  }

  const activeProjectNumber = currentProject ?? 1;

  // --- MAIN PORTFOLIO UI ---
  return (
    <div className="portfolio-display">
      <div className="portfolio-display-inner">
        <img className="portfolio-bg" src={bgImage} alt="Background" />

        <div className="portfolio-header">
          <div className="portfolio-header-inner">
            <h4 className="portfolio-title">Portfolio</h4>
            <div className="project-icons-pagination">
              {student.projects.map((_, index) => (
                <img
                  key={index}
                  src={
                    index + 1 === activeProjectNumber
                      ? folderOpenIcon
                      : folderClosedIcon
                  }
                  alt={`Project ${index + 1}`}
                />
              ))}
            </div>
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
                width: `${scrollerWidth}px`,
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
