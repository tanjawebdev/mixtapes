// Student data structure matching data.json format
export interface StudentData {
    name: string;
    texts: string[];
    media: string[];
}

// WebSocket message format
export interface WebSocketMessage {
    studentId: string;
    state: string; // e.g., "text_intro.txt", "project1.jpg", "project1.mp4"
}

// Application state
export interface AppState {
    currentStudentId: string | null;
    currentState: string | null;
    studentDataCache: Record<string, StudentData>;
    isLoading: boolean;
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
