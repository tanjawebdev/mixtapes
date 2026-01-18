import { create } from "zustand";
import type { AppState } from "./types";
import { studentsData } from "./data/students";

interface StoreActions {
    setCurrentStudent: (studentId: string, project?: number) => void;
    setCurrentProject: (projectNumber: number) => void;
    navigateProject: (direction: "next" | "prev") => void;
    resetToInitial: () => void;
    setError: (error: string | null) => void
    setWsConnected: (connected: boolean) => void;
    setScrollPosition: (position: number) => void;
    setScrollMetrics: (scrollWidth: number, clientWidth: number) => void;
    reset: () => void;
    setStudentActive: (active: boolean) => void;
}

type Store = AppState & StoreActions;

const initialState: AppState = {
    currentStudentId: "", // Set to empty string to trigger loading
    currentProject: null, // Set to null to trigger loading
    error: null,
    wsConnected: false,
    scrollPosition: 0,
    scrollWidth: 0,
    clientWidth: 0,
    studentActive: false,
};

/**
 * Zustand store for managing application state
 *
 * This is the single source of truth for:
 * - Current student ID and project number (controlled by OSC)
 * - Error states
 * - OSC connection status
 *
 * Note: Student data is now loaded via useStudentsData hook
 */
export const useStore = create<Store>((set) => ({
    ...initialState,

    // Update current student and optionally set project (defaults to 1)
    setCurrentStudent: (studentId, project = 1) =>
        set({
            currentStudentId: studentId,
            currentProject: project,
            error: null,
        }),

    // Set current project number directly
    setCurrentProject: (projectNumber) =>
        set((state) => {
            // Get max projects for current student
            const student = studentsData.find(s => s.studentID === parseInt(state.currentStudentId || "0"));
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

            // Get max projects for current student
            const student = studentsData.find(s => s.studentID === parseInt(state.currentStudentId || "0"));
            const maxProjects = student?.projects.length || 5;

            const newProject =
                direction === "next"
                    ? Math.min(maxProjects, current + 1)
                    : Math.max(1, current - 1);

            console.log(`📂 Navigating from project ${current} to ${newProject} (max: ${maxProjects})`);

            return {
                currentProject: newProject,
                error: null,
                scrollPosition: 0,
            };
        }),

    // Reset to project 1 (called when CD removed)
    resetToInitial: () =>
        set(() => ({
            currentStudentId: "",
            currentProject: null,
            error: null,
        })),

    // Removed: setStudentData, setLoading (student data now managed by useStudentsData hook)

    // Set error state
    setError: (error) => set({ error }),

    // Set WebSocket connection status
    setWsConnected: (connected) => set({ wsConnected: connected }),

    // Set scroll position for gallery (controlled by OSC)
    setScrollPosition: (position) => set({ scrollPosition: position }),

    // Set scroll metrics for gallery (width calculations)
    setScrollMetrics: (scrollWidth, clientWidth) =>
        set({ scrollWidth, clientWidth }),

    // Set student active status (lid sensor)
    setStudentActive: (active) => set({ studentActive: active }),

    // Reset to initial state
    reset: () => set(initialState),
}));
