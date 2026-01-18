import { useState } from "react";
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

/**
 * Main portfolio display component
 */
export function PortfolioDisplay() {
  // 1. Store Hooks
  const currentStudentId = useStore((state) => state.currentStudentId);
  const setCurrentStudent = useStore((state) => state.setCurrentStudent); // Funktion zum Setzen der ID
  const currentProject = useStore((state) => state.currentProject);
  const wsConnected = useStore((state) => state.wsConnected);

  // UI Store Hooks
  const scrollPosition = useStore((state) => state.scrollPosition);
  const scrollWidth = useStore((state) => state.scrollWidth);
  const clientWidth = useStore((state) => state.clientWidth);

  // 2. Local State für Transitions-Management
  // Wir tracken die vorherige ID, um Änderungen festzustellen
  const [prevStudentId, setPrevStudentId] = useState(currentStudentId);
  // Dieser State hält den IdleScreen sichtbar, während die Animation läuft
  const [isIdleExiting, setIsIdleExiting] = useState(false);

  const { getStudentById, loading: studentsLoading } = useStudentsData();

  // --- LOGIC: RENDER-PHASE STATE UPDATE ---
  // Das verhindert den "SetState in useEffect" Fehler und Flackern.
  // Wenn sich die ID im Store ändert, updaten wir sofort den lokalen State.
  if (currentStudentId !== prevStudentId) {
    setPrevStudentId(currentStudentId);

    if (currentStudentId) {
      // Eine neue ID ist da -> Wir starten den Exit-Prozess (Animation)
      setIsIdleExiting(true);
    } else {
      // ID wurde gelöscht (Reset) -> IdleScreen ist wieder normal da
      setIsIdleExiting(false);
    }
  }

  // Callback: Wird aufgerufen, wenn GSAP im IdleScreen fertig ist (nach dem Hold)
  const handleIdleAnimationComplete = () => {
    setIsIdleExiting(false); // Jetzt schalten wir tatsächlich um
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

  // Wir zeigen den IdleScreen, wenn:
  // 1. Noch kein Student ausgewählt ist (currentStudentId ist leer/null)
  // 2. ODER wir gerade noch am Animieren sind (isIdleExiting ist true)
  const showIdleScreen = !currentStudentId || isIdleExiting;

  if (showIdleScreen) {
    return (
      <IdleScreen
        isConnected={wsConnected}
        targetStudentId={currentStudentId} // Wichtig: Damit IdleScreen weiß, welches Cover er fangen muss
        onAnimationComplete={handleIdleAnimationComplete}
        onFakeNfc={(id) => setCurrentStudent(id)} // Fake Trigger für Click-Test
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
  const studentID = parseInt(currentStudentId);
  const student = getStudentById(studentID);

  // --- ERROR STATE ---
  if (!student) {
    return (
      <div className="portfolio-error">
        <p>Student not found.</p>
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
