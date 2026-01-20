import { useEffect } from "react";
import { useStore } from "../store";
import {
  useStudentsData,
  getStudentBackgroundNumber,
} from "../hooks/useStudentsData";

import { CurtainTransition } from "./CurtainTransition";
import "./AboutDisplay.css";
import { useTransitionSync } from "../hooks/useTransitionSync";

import closeIcon from "../assets/close.svg";
import starIcon from "../assets/stars.png";
import textFileIcon from "../assets/text-file.png";
import categoriesIcon from "../assets/categories.png";
import textEditorIcon from "../assets/text-editor.png";
import cross from "../assets/Closing-Icon.png";
import idleBg from "../assets/idle-bg.jpg";
import book from "../assets/contact-book.png";
import stars from "../../public/Icons/chrome-star.png";

export function AboutDisplay() {
  const currentStudentId = useStore((state) => state.currentStudentId);
  const currentProject = useStore((state) => state.currentProject);
  const studentActive = useStore((state) => state.studentActive);

  const transitionStage = useStore((state) => state.transitionStage);
  const { getStudentById, loading: studentsLoading } = useStudentsData();

  // Parse ID securely
  const studentID = currentStudentId ? parseInt(currentStudentId) : null;
  const student = studentID ? getStudentById(studentID) : null;

  // Project Safety Check: Ensure currentProject is at least 1
  const activeProjectIndex = (currentProject || 1) - 1;
  const project =
    student && student.projects && student.projects[activeProjectIndex]
      ? student.projects[activeProjectIndex]
      : null;

  const randomBgNumber = studentID ? getStudentBackgroundNumber(studentID) : 1;
  useTransitionSync(false);
  // --- DEBUGGING LOGS (Schau in die Konsole!) ---
  useEffect(() => {
    if (transitionStage === "CURTAIN_DOWN" || transitionStage === "FINISHED") {
      console.log("🔍 ABOUT DISPLAY DIAGNOSTIC:");
      console.log(" - Stage:", transitionStage);
      console.log(" - Raw ID:", currentStudentId);
      console.log(" - Parsed ID:", studentID);
      console.log(" - Student Found:", !!student, student?.name);
      console.log(" - Current Project Nr:", currentProject);
      console.log(" - Target Index:", activeProjectIndex);
      console.log(" - Project Found:", !!project);
    }
  }, [
    transitionStage,
    currentStudentId,
    student,
    project,
    currentProject,
    studentID,
    activeProjectIndex,
  ]);

  // --- LOGIC SWITCH ---
  // Show real content during: CURTAIN_DOWN, FINISHED, and CURTAIN_EXIT_UP (being covered)
  const isTransitionReady = ["CURTAIN_DOWN", "FINISHED", "CURTAIN_EXIT_UP"].includes(
    transitionStage,
  );
  const hasData = !!(student && project);

  const showRealContent = isTransitionReady && hasData;

  // Render Helper: Wenn wir eigentlich Content zeigen sollten (ID ist da, Animation fertig),
  // aber keine Daten finden, zeigen wir eine Fehlermeldung statt dem Idle Screen.
  const showDataError = isTransitionReady && currentStudentId && !hasData;

  return (
    <>
      <CurtainTransition />

      {showRealContent ? (
        // --- CONTENT VIEW ---
        <div className="about-display">
          <div className="about-display-bg">
            <img
              src={`major-bg/${student.major}-${randomBgNumber}.jpg`}
              alt="Background"
            />
          </div>

          <div className="about-display-inner">
            <div className="about-main-container">
              <div className="about-main-header">
                <h3>Project Description</h3>
                <img src={closeIcon} alt="Close" />
              </div>

              <div className="about-content-wrapper">
                {/* TITLE */}
                <div className="about-title-section">
                  <div className="about-title-header">
                    <div className="header-left">
                      <img src={textFileIcon} alt="Text File" />
                      <h5>PROJECT TITLE</h5>
                    </div>
                    <img src={closeIcon} alt="Close" />
                  </div>
                  <div className="about-title-content">
                    <h2>{project.title}</h2>
                    <div className="about-year-badge primary-button">
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>

                {/* TYPE */}
                <div className="about-type-section">
                  <div className="about-type-header">
                    <div className="header-left">
                      <img src={categoriesIcon} alt="Categories" />
                      <h5>TYPE OF PROJECT</h5>
                    </div>
                    <img src={closeIcon} alt="Close" />
                  </div>
                  <div className="about-type-content">
                    {/* Safety Check for map */}
                    {Array.isArray(project.type) ? (
                      project.type.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))
                    ) : (
                      <li>{project.type}</li>
                    )}
                  </div>
                </div>
              </div>

              {/* ABOUT TEXT */}
              <div className="about-description-container">
                <div className="about-description-header">
                  <div className="header-left">
                    <img src={textEditorIcon} alt="Text Editor" />
                    <h5>ABOUT THE PROJECT</h5>
                  </div>
                  <img src={closeIcon} alt="Close" />
                </div>
                <div className="about-description-content">
                  <div className="about-client primary-button">
                    <span>{project.client}</span>
                  </div>
                  <div className="about-star-icon">
                    <img src={starIcon} alt="Star" />
                  </div>
                  <p className="about-description-text">{project.about}</p>

                  {project.collaborators && project.collaborators !== "/" && (
                    <div className="about-collaborators">
                      <span className="collaborators-label">
                        COLLABORATORS:
                      </span>
                      <span className="collaborators-names">
                        {project.collaborators}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // --- IDLE / WAITING / ERROR VIEW ---
        <div className="abt-waiting-container">
          <div className="abt-waiting-wrapper">
            {/* Header Area */}
            <div className="abt-waiting-top-bar">
              <div className="abt-waiting-headline">
                <p>OVERLAYS.EXE</p>
              </div>
              <div className="abt-cross-image-wrapper">
                <img src={cross} alt="Cross" className="cross-icon" />
              </div>
            </div>

            {/* Window Content */}
            <div className="abt-waiting-window">
              <div className="abt-waiting-window-bg">
                <img src={idleBg} className="abt-bg-img" />

                {/* Stars Decos */}
                <div className="abt-stars-2-wrapper">
                  <img src={stars} className="abt-stars-2" />
                </div>
                <div className="abt-stars-1-wrapper">
                  <img src={stars} className="abt-stars-1" />
                </div>

                <div className="abt-waiting-instructions">
                  <div className="abt-inst-top-bar">
                    <div className="abt-inst-top-bar-left">
                      <div className="abt-bar-img-wrapper">
                        <img src={book} className="abt-bar-img" />
                      </div>
                      <p>STATUS</p>
                    </div>
                    <div className="abt-bar-cross-img-wrapper">
                      <img src={cross} className="abt-bar-img" />
                    </div>
                  </div>

                  <div className="abt-inst-window">
                    <div className="abt-inst-center-btn">
                      {/* --- HIER IST DIE FEHLERMELDUNG --- */}
                      {studentsLoading ? (
                        <p>LOADING DATA...</p>
                      ) : showDataError ? (
                        <div style={{ color: "red", textAlign: "center" }}>
                          <p>ERROR: DATA NOT FOUND</p>
                          <p style={{ fontSize: "0.7em" }}>
                            ID: {currentStudentId} / Proj: {currentProject}
                          </p>
                        </div>
                      ) : (
                        <p>Please insert Disc to view Portfolio</p>
                      )}
                    </div>

                    <div className="abt-inst-text">
                      {showDataError ? (
                        <p>CHECK CONSOLE FOR DETAILS</p>
                      ) : (
                        <p>WEAR HEADPHONES FOR THE FULL EXPERIENCE</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
