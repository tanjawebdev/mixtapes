import { useEffect } from "react";
import { useStore } from "../store";
import { useStudentsData } from "../hooks/useStudentsData";
import { ContentDisplay } from "./ContentDisplay";
import { IdleScreen } from "./IdleScreen";
import { CurtainTransition } from "./CurtainTransition";
import closeIcon from "../assets/close.svg";
import bgImage from "../assets/idle-bg.png";
import leftIcon from "../assets/mini-left.png";
import rightIcon from "../assets/mini-right.png";
import "./PortfolioDisplay.css";
import folderClosedIcon from "../assets/folder-close.png";
import folderOpenIcon from "../assets/folder-open.png";
import { useTransitionSync } from "../hooks/useTransitionSync";

export function PortfolioDisplay() {
  const currentStudentId = useStore((state) => state.currentStudentId);
  const setCurrentStudent = useStore((state) => state.setCurrentStudent);
  const currentProject = useStore((state) => state.currentProject);
  const wsConnected = useStore((state) => state.wsConnected);
  const studentActive = useStore((state) => state.studentActive);

  const transitionStage = useStore((state) => state.transitionStage);
  const setTransitionStage = useStore((state) => state.setTransitionStage);

  const scrollPosition = useStore((state) => state.scrollPosition);
  const scrollWidth = useStore((state) => state.scrollWidth);
  const clientWidth = useStore((state) => state.clientWidth);

  const { getStudentById, loading: studentsLoading } = useStudentsData();

  useTransitionSync(true);
  // --- LOGIC: MASTER CONTROLLER ---
  useEffect(() => {
    if (!currentStudentId) {
      if (transitionStage !== "IDLE") {
        setTransitionStage("IDLE");
      }
      return;
    }
    if (currentStudentId && transitionStage === "IDLE") {
      setTransitionStage("GSAP_EXIT");
    }
  }, [currentStudentId, transitionStage, setTransitionStage]);

  const handleIdleAnimationComplete = () => {
    setTransitionStage("CURTAIN_UP");
  };

  const handleCurtainCovered = () => {
    setTransitionStage("CURTAIN_DOWN");
  };

  const handleCurtainRevealed = () => {
    setTransitionStage("FINISHED");
  };

  // --- VIEW LOGIC ---
  const showIdleScreen =
    !currentStudentId ||
    transitionStage === "IDLE" ||
    transitionStage === "GSAP_EXIT" ||
    transitionStage === "CURTAIN_UP";

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

  const studentID = parseInt(currentStudentId || "0");
  const student = getStudentById(studentID);
  const activeProjectNumber = currentProject ?? 1;

  // --- RENDER ---
  // WICHTIG: Wir nutzen hier ein Fragment (<>...</>), kein div!
  return (
    <>
      {/* 1. Der Vorhang ist immer da (unsichtbar oder animiert), fixed positioned */}
      <CurtainTransition
        onCovered={handleCurtainCovered}
        onRevealed={handleCurtainRevealed}
      />

      {/* 2. Fallunterscheidung auf oberster Ebene */}
      {showIdleScreen ? (
        // IDLE SCREEN: Rendert direkt (ohne .portfolio-display Wrapper)
        // Dadurch behält er seine originalen CSS Positionen bei.
        <IdleScreen
          key="idle-screen-persistent"
          isConnected={wsConnected}
          targetStudentId={currentStudentId}
          onAnimationComplete={handleIdleAnimationComplete}
          onFakeNfc={(id) => setCurrentStudent(id)}
        />
      ) : (
        // CONTENT SCREEN: Hier brauchen wir den Wrapper für Layout & BG
        <div className="portfolio-display">
          <div className="portfolio-display-inner">
            <img className="portfolio-bg" src={bgImage} alt="Background" />

            <div className="portfolio-header">
              <div className="portfolio-header-inner">
                <h4 className="portfolio-title">Portfolio</h4>
                {student && (
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
                )}
                <div className="portfolio-right">
                  {student && (
                    <h4 className="portfolio-pagination-text">
                      0{activeProjectNumber} I 0{student.projects.length}
                    </h4>
                  )}
                  <div className="portfolio-close">
                    <img src={closeIcon} alt="Close" />
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio-content">
              {studentsLoading ? (
                <div className="portfolio-loading">
                  <div className="loading-spinner"></div>
                </div>
              ) : student ? (
                <ContentDisplay
                  studentId={currentStudentId}
                  projectNumber={activeProjectNumber}
                />
              ) : (
                <div className="portfolio-error">Student not found</div>
              )}
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
      )}
    </>
  );
}
