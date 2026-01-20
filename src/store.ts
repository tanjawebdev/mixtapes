import { create } from "zustand";
import type { AppState } from "./types";
import { studentsData } from "./data/students";

// --- NEU: Definition der Animations-Phasen ---
export type TransitionStage =
    | "IDLE" // Wartet auf Input / Idle Screen aktiv
    | "GSAP_EXIT" // Die GSAP Animation läuft (Disk wird gefangen)
    | "CURTAIN_UP" // Der bunte Div fährt hoch (Verdeckt alles)
    | "CURTAIN_DOWN" // Der bunte Div fährt weiter hoch (Enthüllt Content)
    | "FINISHED" // Alles fertig, Content ist da
    | "CURTAIN_EXIT_UP" // Reverse: Vorhang deckt Content ab (zurück zu Idle)
    | "CURTAIN_EXIT_DOWN"; // Reverse: Vorhang enthüllt Idle Screen

// Wir erweitern den importierten AppState, damit 'transitionStage' bekannt ist
interface ExtendedAppState extends AppState {
    transitionStage: TransitionStage;
}

interface StoreActions {
    setCurrentStudent: (studentId: string, project?: number) => void;
    setCurrentProject: (projectNumber: number) => void;
    navigateProject: (direction: "next" | "prev") => void;
    resetToInitial: () => void;
    setError: (error: string | null) => void;
    setWsConnected: (connected: boolean) => void;
    setScrollPosition: (position: number) => void;
    setScrollMetrics: (scrollWidth: number, clientWidth: number) => void;
    reset: () => void;
    // --- NEU: Action zum Setzen der Phase ---
    setTransitionStage: (stage: TransitionStage) => void;
    setStudentActive: (active: boolean) => void;
    setPrevStudentId: (studentId: string) => void;
}

type Store = ExtendedAppState & StoreActions;

const initialState: ExtendedAppState = {
    currentStudentId: "", // Set to empty string to trigger loading
    currentProject: null, // null = no project selected
    error: null,
    wsConnected: false,
    scrollPosition: 0,
    scrollWidth: 0,
    clientWidth: 0,
    transitionStage: "IDLE", // IDLE, GSAP_EXIT, CURTAIN_UP, CURTAIN_DOWN, FINISHED, CURTAIN_EXIT_UP, CURTAIN_EXIT_DOWN 
    studentActive: false,
    prevStudentId: "", // or string fe "3"
};

/**
 * Zustand store for managing application state
 */
export const useStore = create<Store>((set) => ({
    ...initialState,

    // Update current student and optionally set project (defaults to 1)
    setCurrentStudent: (studentId, project = 1) =>
        set({
            currentStudentId: studentId,
            currentProject: project,
            prevStudentId: studentId,
            error: null,
            // Hinweis: Wir setzen hier transitionStage NICHT automatisch zurück.
            // Das übernimmt die PortfolioDisplay Komponente, um die GSAP Animation zu starten.
        }),

    // Set current project number directly
    setCurrentProject: (projectNumber) =>
        set((state) => {
            const student = studentsData.find(
                (s) => s.studentID === parseInt(state.currentStudentId || "0"),
            );
            const maxProjects = student?.projects.length || 5;

            return {
                currentProject: Math.max(1, Math.min(maxProjects, projectNumber)),
                error: null,
            };
        }),

    // Navigate to next or previous project
    navigateProject: (direction) =>
        set((state) => {
            const current = state.currentProject || 1;

            const student = studentsData.find(
                (s) => s.studentID === parseInt(state.currentStudentId || "0"),
            );
            const maxProjects = student?.projects.length || 5;

            const newProject =
                direction === "next"
                    ? Math.min(maxProjects, current + 1)
                    : Math.max(1, current - 1);

            console.log(
                `📂 Navigating from project ${current} to ${newProject} (max: ${maxProjects})`,
            );

            return {
                currentProject: newProject,
                error: null,
                scrollPosition: 0,
            };
        }),

    // Reset to project 1 (called when CD removed)
    resetToInitial: () =>
        set((_) => ({
            currentStudentId: "1",
            currentProject: 1,
            error: null,
        })),

    // Set error state
    setError: (error) => set({ error }),

    // Set WebSocket connection status
    setWsConnected: (connected) => set({ wsConnected: connected }),

    // Set scroll position for gallery (controlled by OSC)
    setScrollPosition: (position) => set({ scrollPosition: position }),

    // Set scroll metrics for gallery (width calculations)
    setScrollMetrics: (scrollWidth, clientWidth) =>
        set({ scrollWidth, clientWidth }),

    // --- NEU: Transition Stage Setter ---
    setTransitionStage: (stage) => set({ transitionStage: stage }),

    // --- NEU: Student Active Setter ---
    setStudentActive: (active) => set({ studentActive: active }),

    // --- NEU: Previous Student ID Setter ---
    setPrevStudentId: (studentId) => set({ prevStudentId: studentId }),

    // Reset to initial state
    reset: () => set(initialState),
}));
