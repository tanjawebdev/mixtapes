// Project data for each student portfolio item
export interface Project {
    title: string;
    year: number;
    type: string;
    client: string;
    collaborators: string;
    about: string;
    media?: string[]; // Auto-discovered from folder (images/videos)
}

// Student portfolio data
export interface Student {
    studentID: number;
    nfcID: string;
    surname: string;
    name: string;
    aboutMe: string;
    skills: string[];
    portfolioLink: string;
    experiences: string[];
    projects: Project[];
}

// Complete students data structure
export type StudentsData = Student[];

// WebSocket message format
export interface WebSocketMessage {
    studentId: string;
    project?: number; // Optional: defaults to 1 when student is selected
}

// Application state
export interface AppState {
    currentStudentId: string | null;
    currentProject: number | null; // Project number 1-5
    error: string | null;
    wsConnected: boolean;
}

// Content type detection
export type ContentType = 'text' | 'image' | 'video' | 'unknown';

export function getContentType(filename: string): ContentType {
    const ext = filename.split('.').pop()?.toLowerCase();

    if (!ext) return 'unknown';

    if (['txt', 'md'].includes(ext)) return 'text';
    if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext)) return 'image';
    if (['mp4', 'webm', 'mov', 'avi'].includes(ext)) return 'video';

    return 'unknown';
}
