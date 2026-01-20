import { useEffect, useRef } from "react";
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
  const setStudentActive = useStore((state) => state.setStudentActive);

  const scrollPosition = useStore((state) => state.scrollPosition);
  const scrollWidth = useStore((state) => state.scrollWidth);
  const clientWidth = useStore((state) => state.clientWidth);

  const { getStudentById, loading: studentsLoading } = useStudentsData();

  useTransitionSync(true);

  // --- LOGIC: FORWARD TRANSITION (Student selected) ---
  useEffect(() => {
    // Start forward transition when student is selected
    if (currentStudentId && transitionStage === "IDLE") {
      console.log("🎬 Starting forward transition: IDLE → GSAP_EXIT");
      setTransitionStage("GSAP_EXIT");
    }
  }, [currentStudentId, transitionStage, setTransitionStage]);

  // --- REVERSE TRANSITION: Watch for studentActive becoming false ---
  const prevStudentActive = useRef(studentActive);
  useEffect(() => {
    // DEBUG: Log all values to diagnose the issue
    console.log("🔍 studentActive check:", {
      previous: prevStudentActive.current,
      current: studentActive,
      transitionStage,
      currentStudentId,
      conditionMet: prevStudentActive.current === true && studentActive === false,
      stageIsFinished: transitionStage === "FINISHED"
    });

    // Trigger reverse transition when going from active to inactive
    if (prevStudentActive.current === true && studentActive === false) {
      if (transitionStage === "FINISHED") {
        console.log("🔄 Student became inactive - starting reverse transition: FINISHED → CURTAIN_EXIT_UP");
        setTransitionStage("CURTAIN_EXIT_UP");
      } else {
        console.warn("⚠️ Student became inactive but transitionStage is not FINISHED:", transitionStage);
      }
    }
    prevStudentActive.current = studentActive;
  }, [studentActive, transitionStage, setTransitionStage, currentStudentId]);

  const handleIdleAnimationComplete = () => {
    console.log("🎭 Idle animation complete: GSAP_EXIT → CURTAIN_UP");
    setTransitionStage("CURTAIN_UP");
  };

  const handleCurtainCovered = () => {
    // Called when curtain fully covers the screen
    if (transitionStage === "CURTAIN_UP") {
      // Forward transition: covered idle screen, now reveal content
      console.log("🎭 Curtain covered (forward): CURTAIN_UP → CURTAIN_DOWN");
      setTransitionStage("CURTAIN_DOWN");
    } else if (transitionStage === "CURTAIN_EXIT_UP") {
      // Reverse transition: covered content, now reveal idle
      // Add delay to ensure idle screen has time to mount and load
      console.log("🎭 Curtain covered (reverse): CURTAIN_EXIT_UP → waiting 600ms for idle screen...");
      setTimeout(() => {
        console.log("🎭 Revealing idle screen: → CURTAIN_EXIT_DOWN");
        setTransitionStage("CURTAIN_EXIT_DOWN");
      }, 400); // 600ms buffer for idle screen to load
    }
  };

  const handleCurtainRevealed = () => {
    // Called when curtain fully reveals what's underneath
    if (transitionStage === "CURTAIN_DOWN") {
      // Forward transition: revealed content, transition complete
      console.log("✅ Forward transition complete: CURTAIN_DOWN → FINISHED");
      setTransitionStage("FINISHED");
    } else if (transitionStage === "CURTAIN_EXIT_DOWN") {
      // Reverse transition: revealed idle, back to IDLE state
      console.log("✅ Reverse transition complete: CURTAIN_EXIT_DOWN → IDLE");
      setTransitionStage("IDLE");
      // Clear the student to fully reset to idle state
      setCurrentStudent("");
    }
  };

  // if currently 

  // --- VIEW LOGIC ---
  const showIdleScreen =
    transitionStage === "IDLE" ||
    transitionStage === "GSAP_EXIT" ||
    transitionStage === "CURTAIN_UP" ||
    transitionStage === "CURTAIN_EXIT_DOWN";  // Mount during reveal (after 300ms delay)

  console.log("transitionStage", transitionStage);
  //const showIdleScreen = false;

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

  const studentID = parseInt(currentStudentId || "");
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
          onFakeNfc={(id) => {
            console.log("Fake NFC triggered for student ID:", id);
            setCurrentStudent(id);
            setStudentActive(true);
          }}
        />
      ) : (
        // CONTENT SCREEN: Hier brauchen wir den Wrapper für Layout & BG
        <div className="portfolio-display">
          <div className="portfolio-display-inner">
            <img className="portfolio-bg" src={bgImage} alt="Background" />

            <div className="portfolio-header">
              <div className="portfolio-header-inner">
                <button onClick={() => setStudentActive(false)}>set student active</button>
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
                  studentId={currentStudentId!}
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
