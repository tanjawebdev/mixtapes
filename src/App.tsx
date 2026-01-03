import { useState, useEffect } from "react";
import { students, type Student } from "./data/studentData";
import { IdleScreen } from "./sections/idle-state/IdleScreen";
import { ProjectGallery } from "./components/ProjectGallery";
import { serialService } from "./utils/serialService";
import "./styles/main.scss";

function App() {
  // State für den aktuellen Studenten (null = Idle Mode)
  const [activeStudent, setActiveStudent] = useState<Student | null>(null);

  // State für den Verbindungsstatus
  const [isConnected, setIsConnected] = useState(false);

  // Wir sammeln alle Cover-Bilder für den Marquee-Effekt im Idle Screen
  const allCoverImages = students.map((s) => s.coverImg).filter(Boolean);

  /**
   * Verarbeitet die sauberen Strings, die vom serialService kommen.
   * (Diese Funktion muss vor dem useEffect definiert sein, damit sie dort genutzt werden kann)
   */
  const handleSerialCommand = (command: string) => {
    console.log("Arduino Command:", command);

    // 1. Reset-Befehl
    if (command === "RESET") {
      setActiveStudent(null);
      return;
    }

    // 2. NFC ID Check
    const foundStudent = students.find((s) => s.nfcID === command);

    if (foundStudent) {
      console.log("Student gefunden:", foundStudent.name);
      setActiveStudent(foundStudent);
    } else {
      console.warn("Unbekannte ID:", command);
    }
  };

  /**
   * NEU: Auto-Connect beim Laden der Seite.
   * Versucht, bekannte Ports (die der User schon mal erlaubt hat) wiederherzustellen.
   */
  useEffect(() => {
    const attemptAutoConnect = async () => {
      const success = await serialService.tryAutoConnect((data) => {
        handleSerialCommand(data);
      });

      if (success) {
        console.log("Automatisch verbunden!");
        setIsConnected(true);
      }
    };

    attemptAutoConnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Leeres Array = Nur einmal beim Start ausführen

  /**
   * Manueller Connect (falls Auto-Connect nicht klappt oder es das erste Mal ist)
   */
  const handleConnect = async () => {
    try {
      await serialService.connect((data) => {
        handleSerialCommand(data);
      });
      setIsConnected(true);
    } catch (err) {
      console.error("Verbindung fehlgeschlagen:", err);
    }
  };

  /**
   * Tastatur-Shortcut (ESC) zum Zurücksetzen
   */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveStudent(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="App">
      {activeStudent ? (
        // ===============================================
        // ANSICHT: STUDENTEN PORTFOLIO
        // ===============================================
        <div
          className="student-view-container"
          style={{
            padding: "2rem",
            color: "white",
            minHeight: "100vh",
            background: "#121212",
          }}
        >
          {/* Back Button */}
          <button
            onClick={() => setActiveStudent(null)}
            style={{
              position: "fixed",
              top: "20px",
              left: "20px",
              zIndex: 100,
              background: "white",
              color: "black",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
              fontWeight: "bold",
              fontFamily: "Chicago, sans-serif",
              textTransform: "uppercase",
            }}
          >
            ← Back to Idle
          </button>

          {/* Header Bereich */}
          <header
            style={{
              marginTop: "80px",
              marginBottom: "60px",
              textAlign: "center",
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <h1
              style={{
                fontSize: "4rem",
                marginBottom: "1rem",
                fontFamily: "Chicago, sans-serif",
                textTransform: "uppercase",
              }}
            >
              {activeStudent.name} {activeStudent.surname}
            </h1>
            <p
              style={{
                fontSize: "1.5rem",
                lineHeight: "1.6",
                opacity: 0.8,
                fontFamily: "Helvetica, Arial, sans-serif",
              }}
            >
              {activeStudent.aboutMe}
            </p>
          </header>

          {/* Projekte */}
          {activeStudent.projects.map((proj, idx) => (
            <ProjectGallery key={idx} project={proj} />
          ))}

          <div style={{ height: "100px" }}></div>
        </div>
      ) : (
        // ===============================================
        // ANSICHT: IDLE SCREEN
        // ===============================================
        <IdleScreen
          images={allCoverImages}
          onConnect={handleConnect}
          isConnected={isConnected}
        />
      )}
    </div>
  );
}

export default App;
