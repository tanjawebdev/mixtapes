import type { ReactNode } from 'react';
import { useStudentData } from '../hooks/useStudentData';
import { useStore } from '../store';

interface StudentDataLoaderProps {
    children: ReactNode;
}

/**
 * Data loader component that ensures student data is loaded
 * before rendering children.
 * 
 * Monitors the current student ID from WebSocket and loads
 * the corresponding data.json file.
 */
export function StudentDataLoader({ children }: StudentDataLoaderProps) {
    const currentStudentId = useStore((state) => state.currentStudentId);
    const { error } = useStudentData(currentStudentId);

    // Show error if data loading failed
    if (error) {
        return (
            <div className="portfolio-error">
                <h2>Error Loading Portfolio</h2>
                <p>{error}</p>
            </div>
        );
    }

    // Always render children - they handle their own loading states
    return <>{children}</>;
}
