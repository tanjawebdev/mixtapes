import { useEffect, useRef } from 'react';
import { useStore } from '../store';
import type { WebSocketMessage } from '../types';

const WS_URL = 'ws://localhost:8080';
const RECONNECT_DELAY = 3000; // 3 seconds

/**
 * WebSocket hook for receiving portfolio control messages
 * 
 * Connects to WebSocket server and listens for messages in format:
 * { studentId: "01", state: "text_intro.txt" }
 * 
 * Features:
 * - Automatic reconnection on disconnect
 * - Connection status updates in store
 * - Error handling
 * - Cleanup on unmount
 */
export function useWebSocket() {
    const wsRef = useRef<WebSocket | null>(null);
    const reconnectTimeoutRef = useRef<number | null>(null);
    const setCurrentStudent = useStore((state) => state.setCurrentStudent);
    const setWsConnected = useStore((state) => state.setWsConnected);
    const setError = useStore((state) => state.setError);

    useEffect(() => {
        function connect() {
            try {
                console.log('[WebSocket] Connecting to', WS_URL);
                const ws = new WebSocket(WS_URL);
                wsRef.current = ws;

                ws.onopen = () => {
                    console.log('[WebSocket] Connected');
                    setWsConnected(true);
                    setError(null);
                };

                ws.onmessage = (event) => {
                    try {
                        const message: WebSocketMessage = JSON.parse(event.data);
                        console.log('[WebSocket] Message received:', message);

                        if (message.studentId && message.state) {
                            setCurrentStudent(message.studentId, message.state);
                        } else {
                            console.warn('[WebSocket] Invalid message format:', message);
                        }
                    } catch (err) {
                        console.error('[WebSocket] Error parsing message:', err);
                    }
                };

                ws.onerror = (error) => {
                    console.error('[WebSocket] Error:', error);
                    setError('WebSocket connection error');
                };

                ws.onclose = () => {
                    console.log('[WebSocket] Disconnected');
                    setWsConnected(false);
                    wsRef.current = null;

                    // Attempt reconnection
                    console.log(`[WebSocket] Reconnecting in ${RECONNECT_DELAY}ms...`);
                    reconnectTimeoutRef.current = setTimeout(connect, RECONNECT_DELAY);
                };
            } catch (err) {
                console.error('[WebSocket] Connection failed:', err);
                setError('Failed to connect to WebSocket');

                // Retry connection
                reconnectTimeoutRef.current = setTimeout(connect, RECONNECT_DELAY);
            }
        }

        // Initial connection
        connect();

        // Cleanup on unmount
        return () => {
            if (reconnectTimeoutRef.current) {
                clearTimeout(reconnectTimeoutRef.current);
            }
            if (wsRef.current) {
                wsRef.current.close();
            }
        };
    }, [setCurrentStudent, setWsConnected, setError]);

    return {
        isConnected: useStore((state) => state.wsConnected),
    };
}
