import { create } from "zustand";
import type { AppState } from "./types";

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
}

type Store = AppState & StoreActions;

const initialState: AppState = {
    currentStudentId: "1", // Set to empty string to trigger loading
    currentProject: 1, // Set to null to trigger loading
    error: null,
    wsConnected: false,
    scrollPosition: 0,
    scrollWidth: 0,
    clientWidth: 0,
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
        set({
            currentProject: Math.max(1, Math.min(5, projectNumber)), // Clamp between 1-5
            error: null,
        }),

    // Navigate to next or previous project
    navigateProject: (direction) =>
        set((state) => {
            const current = state.currentProject || 1;
            const newProject =
                direction === "next"
                    ? Math.min(5, current + 1) // Max 5
                    : Math.max(1, current - 1); // Min 1

            console.log(`📂 Navigating from project ${current} to ${newProject}`);

            return {
                currentProject: newProject,
                error: null,
                scrollPosition: 0,
            };
        }),

    // Reset to project 1 (called when CD removed)
    resetToInitial: () =>
        set((state) => ({
            currentProject: state.currentStudentId ? 1 : null,
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
    setScrollMetrics: (scrollWidth, clientWidth) => set({ scrollWidth, clientWidth }),

    // Reset to initial state
    reset: () => set(initialState),
}));
