import type { Student } from '../types';
import { studentsData } from '../data/students';

/**
 * Convert major abbreviation to full name
 */
export const getMajorFullName = (major: string): string => {
    const majorMap: { [key: string]: string } = {
        'ID': 'Interaction Design',
        'MD': 'Media Design',
        'CD': 'Communication Design',
        'SD': 'Sound Design'
    };
    return majorMap[major] || major;
};

/**
 * Get a consistent random background number (1-4) for a student
 * Uses a simple hash of studentID to ensure the same student always gets the same background
 */
export const getStudentBackgroundNumber = (studentID: number): number => {
    // Simple hash: use studentID to generate a consistent "random" number
    // This ensures both CvDisplay and AboutDisplay use the same background
    const hash = (studentID * 2654435761) % 4;
    return hash + 1; // Returns 1, 2, 3, or 4
};

/**
 * Hook to access student data
 * 
 * This hook provides access to all student portfolio data with type safety.
 * Data is imported directly from TypeScript (no async loading needed).
 * 
 * Benefits over JSON fetch:
 * - ✅ Instant availability (no loading state)
 * - ✅ Full TypeScript type checking
 * - ✅ Bundled with app (faster)
 * - ✅ IDE autocomplete works perfectly
 */
export function useStudentsData() {
    /**
     * Get student by studentID (1, 2, 3, etc.)
     */
    const getStudentById = (studentID: number): Student | undefined => {
        return studentsData.find(s => s.studentID === studentID);
    };

    /**
     * Get student by array index (0-based)
     */
    const getStudentByIndex = (index: number): Student | undefined => {
        return studentsData[index];
    };

    /**
     * Get student by NFC ID
     */
    const getStudentByNfcId = (nfcID: string): Student | undefined => {
        return studentsData.find(s => s.nfcID === nfcID);
    };

    return {
        students: studentsData,
        loading: false, // No loading needed - data is instant!
        error: null,    // No errors possible - TypeScript validates at compile time
        getStudentById,
        getStudentByIndex,
        getStudentByNfcId,
    };
}
