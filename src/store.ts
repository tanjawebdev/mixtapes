import { create } from 'zustand';
import type { AppState, StudentData } from './types';

interface StoreActions {
    setCurrentStudent: (studentId: string, state: string) => void;
    setStudentData: (studentId: string, data: StudentData) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    setWsConnected: (connected: boolean) => void;
    reset: () => void;
}

type Store = AppState & StoreActions;

const initialState: AppState = {
    currentStudentId: null,
    currentState: null,
    studentDataCache: {},
    isLoading: false,
    error: null,
    wsConnected: false,
};

/**
 * Zustand store for managing application state
 * 
 * This is the single source of truth for:
 * - Current student ID and state (controlled by WebSocket)
 * - Cached student data (for instant loading)
 * - Loading and error states
 * - WebSocket connection status
 */
export const useStore = create<Store>((set) => ({
    ...initialState,

    // Update current student and state (triggered by WebSocket)
    setCurrentStudent: (studentId, state) =>
        set({
            currentStudentId: studentId,
            currentState: state,
            error: null
        }),

    // Cache loaded student data
    setStudentData: (studentId, data) =>
        set((state) => ({
            studentDataCache: {
                ...state.studentDataCache,
                [studentId]: data,
            },
            isLoading: false,
        })),

    // Set loading state
    setLoading: (loading) =>
        set({ isLoading: loading }),

    // Set error state
    setError: (error) =>
        set({ error, isLoading: false }),

    // Set WebSocket connection status
    setWsConnected: (connected) =>
        set({ wsConnected: connected }),

    // Reset to initial state
    reset: () =>
        set(initialState),
}));
