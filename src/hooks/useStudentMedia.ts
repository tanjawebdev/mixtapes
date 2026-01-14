import { useMemo } from 'react';

/**
 * Auto-discover media files using Vite's import.meta.glob
 * 
 * Folder structure:
 * /public/students/{studentID}/{projectNumber}/
 *   - any images (.jpg, .png, .webp, etc.)
 *   - any videos (.mp4, .webm, .mov, etc.)
 * 
 * This uses Vite's glob import to discover all media files at build time.
 * Files are automatically indexed and accessible by student ID and project number.
 */

// Auto-discover all media files in students folders at build time
// Note: Files in /public/ are served from root, so the actual URLs won't have /public/
const allMediaFiles = import.meta.glob<string>('/public/students/*/*/*.*', {
    eager: true,
    query: '?url',
    import: 'default'
});

// Image extensions
const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'];

// Video extensions
const VIDEO_EXTENSIONS = ['mp4', 'webm', 'mov', 'avi'];

interface MediaFile {
    path: string;
    filename: string;
    extension: string;
    type: 'image' | 'video';
}

interface MediaFiles {
    images: MediaFile[];
    videos: MediaFile[];
    all: MediaFile[];
}

/**
 * Get file extension
 */
function getFileExtension(path: string): string {
    return path.split('.').pop()?.toLowerCase() || '';
}

/**
 * Determine if file is image or video
 */
function getFileType(path: string): 'image' | 'video' | null {
    const ext = getFileExtension(path);
    if (IMAGE_EXTENSIONS.includes(ext)) return 'image';
    if (VIDEO_EXTENSIONS.includes(ext)) return 'video';
    return null;
}

/**
 * Parse file path to extract student ID and project number
 * Path format: /public/students/{studentID}/{projectNumber}/{filename}
 */
function parseMediaPath(path: string): { studentID: number; projectNumber: number; filename: string } | null {
    const match = path.match(/\/public\/students\/(\d+)\/(\d+)\/([^/]+)$/);
    if (!match) return null;

    return {
        studentID: parseInt(match[1]),
        projectNumber: parseInt(match[2]),
        filename: match[3]
    };
}

/**
 * Load media files for a specific student and project
 * 
 * @param studentID - The student's ID (e.g., 1, 2, 3)
 * @param projectNumber - The project number (1-5)
 */
export function useStudentMedia(studentID: number | null, projectNumber: number | null): MediaFiles {
    const media = useMemo(() => {
        if (studentID === null || projectNumber === null) {
            return { images: [], videos: [], all: [] };
        }

        const mediaFiles: MediaFile[] = [];

        // Filter and process media files for this student and project
        Object.entries(allMediaFiles).forEach(([path, url]) => {
            const parsed = parseMediaPath(path);

            if (parsed && parsed.studentID === studentID && parsed.projectNumber === projectNumber) {
                const type = getFileType(path);

                if (type) {
                    mediaFiles.push({
                        path: url as string,
                        filename: parsed.filename,
                        extension: getFileExtension(path),
                        type
                    });
                }
            }
        });

        // Sort by filename for consistent ordering
        mediaFiles.sort((a, b) => a.filename.localeCompare(b.filename));

        const images = mediaFiles.filter(f => f.type === 'image');
        const videos = mediaFiles.filter(f => f.type === 'video');

        console.log(`📁 Loaded ${mediaFiles.length} media files for Student ${studentID}, Project ${projectNumber}`, {
            images: images.length,
            videos: videos.length
        });

        return {
            images,
            videos,
            all: mediaFiles
        };
    }, [studentID, projectNumber]);

    return media;
}

/**
 * Get all available students (by scanning discovered files)
 */
export function getAvailableStudents(): number[] {
    const studentIds = new Set<number>();

    Object.keys(allMediaFiles).forEach(path => {
        const parsed = parseMediaPath(path);
        if (parsed) {
            studentIds.add(parsed.studentID);
        }
    });

    return Array.from(studentIds).sort((a, b) => a - b);
}

/**
 * Get available projects for a student
 */
export function getAvailableProjects(studentID: number): number[] {
    const projectNumbers = new Set<number>();

    Object.keys(allMediaFiles).forEach(path => {
        const parsed = parseMediaPath(path);
        if (parsed && parsed.studentID === studentID) {
            projectNumbers.add(parsed.projectNumber);
        }
    });

    return Array.from(projectNumbers).sort((a, b) => a - b);
}

/**
 * Helper to get the full path to a student's folder
 */
export function getStudentFolderPath(studentID: number): string {
    return `/students/${studentID}`;
}

/**
 * Helper to get the full path to a project folder
 */
export function getProjectFolderPath(studentID: number, projectNumber: number): string {
    return `/students/${studentID}/${projectNumber}`;
}
