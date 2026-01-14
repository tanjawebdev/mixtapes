import { useEffect, useState } from 'react';
import type { Student, StudentsData } from '../types';

/**
 * Hook to load all student data from students.json
 * 
 * This hook:
 * - Fetches students.json with all portfolio metadata
 * - Provides lookup by studentID or index
 * - Caches data to avoid re-fetching
 * 
 * Images/videos for each student are in /public/students/{studentID}/
 * and should be auto-discovered by scanning the directory
 */
export function useStudentsData() {
    const [students, setStudents] = useState<StudentsData>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadStudents() {
            try {
                setLoading(true);
                const response = await fetch('/students/students.json');

                if (!response.ok) {
                    throw new Error(`Failed to load students data: ${response.statusText}`);
                }

                const data: StudentsData = await response.json();
                setStudents(data);
                setError(null);
                console.log(data);
                console.log(`✅ Preloaded ${data.length} students from students.json`);
            } catch (err) {
                const message = err instanceof Error ? err.message : 'Unknown error';
                setError(message);
                console.error('❌ Error loading students:', message);
            } finally {
                setLoading(false);
            }
        }

        loadStudents();
    }, []);

    /**
     * Get student by studentID (1, 2, 3, etc.)
     */
    const getStudentById = (studentID: number): Student | undefined => {
        return students.find(s => s.studentID === studentID);
    };

    /**
     * Get student by array index (0-based)
     */
    const getStudentByIndex = (index: number): Student | undefined => {
        return students[index];
    };

    /**
     * Get student by NFC ID
     */
    const getStudentByNfcId = (nfcID: string): Student | undefined => {
        return students.find(s => s.nfcID === nfcID);
    };

    return {
        students,
        loading,
        error,
        getStudentById,
        getStudentByIndex,
        getStudentByNfcId,
    };
}
