import { useEffect, useState } from "react";
import { useStore } from "../utils/store";
import type { StudentData } from "../utils/types";

/**
 * Hook for loading student portfolio data
 *
 * Loads data.json from /students/{studentId}/ and caches it in the store.
 * Returns cached data immediately if available.
 *
 * @param studentId - The student ID to load data for
 * @returns Object with data, loading state, and error
 */
export function useStudentData(studentId: string | null) {
  const [localError, setLocalError] = useState<string | null>(null);
  const cachedData = useStore((state) =>
    studentId ? state.studentDataCache[studentId] : null
  );
  const setStudentData = useStore((state) => state.setStudentData);
  const setLoading = useStore((state) => state.setLoading);
  const isLoading = useStore((state) => state.isLoading);

  useEffect(() => {
    if (!studentId) {
      return;
    }

    // Return cached data immediately
    if (cachedData) {
      console.log(`[Data] Using cached data for student ${studentId}`);
      return;
    }

    // Load data from file
    async function loadData() {
      if (!studentId) return;

      try {
        setLoading(true);
        setLocalError(null);

        const url = `/students/${studentId}/data.json`;
        console.log(`[Data] Loading ${url}`);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(
            `Failed to load student data: ${response.statusText}`
          );
        }

        const data: StudentData = await response.json();
        console.log(`[Data] Loaded data for student ${studentId}:`, data);

        // Cache in store
        setStudentData(studentId, data);

        // Preload media files for instant display
        preloadMedia(studentId, data);
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : "Unknown error";
        console.error(`[Data] Error loading student ${studentId}:`, err);
        setLocalError(errorMsg);
        setLoading(false);
      }
    }

    loadData();
  }, [studentId, cachedData, setStudentData, setLoading]);

  return {
    data: cachedData,
    isLoading,
    error: localError,
  };
}

/**
 * Preload media files for instant display
 * Images and videos are preloaded in the background
 */
function preloadMedia(studentId: string, data: StudentData) {
  console.log(`[Preload] Starting preload for student ${studentId}`);

  data.media.forEach((filename) => {
    const url = `/students/${studentId}/${filename}`;
    const ext = filename.split(".").pop()?.toLowerCase();

    if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext || "")) {
      // Preload images
      const img = new Image();
      img.src = url;
      console.log(`[Preload] Image: ${url}`);
    } else if (["mp4", "webm"].includes(ext || "")) {
      // Preload videos
      const video = document.createElement("video");
      video.preload = "auto";
      video.src = url;
      console.log(`[Preload] Video: ${url}`);
    }
  });
}
