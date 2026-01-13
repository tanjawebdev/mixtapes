import { useEffect, useRef, useCallback } from 'react';
import { useStore } from '../store';

/**
 * Custom hook to handle OSC data reception from Max/MSP
 * 
 * This hook connects to an OSC-over-WebSocket bridge server
 * and handles incoming OSC messages to control the portfolio display.
 * 
 * Expected OSC message formats from Max/MSP:
 * - /index <number>        : Set student index (e.g., "/index 12")
 * - /nav next|prev         : Navigate between states (e.g., "/nav next")
 * - /scrollposition <number>: Set scroll position (e.g., "/scrollposition 111")
 */
export const useOscData = () => {
    const wsRef = useRef<WebSocket | null>(null);
    const reconnectTimeoutRef = useRef<number | undefined>(undefined);
    const setCurrentStudent = useStore((state) => state.setCurrentStudent);
    const setOscConnected = useStore((state) => state.setWsConnected);
    const currentState = useStore((state) => state.currentState);

    const connect = useCallback(() => {
        try {
            // Connect to OSC-over-WebSocket bridge (receives from Max/MSP)
            const ws = new WebSocket('ws://localhost:8081');
            wsRef.current = ws;

            ws.onopen = () => {
                console.log('✅ Connected to OSC bridge (Max/MSP → React)');
                setOscConnected(true);
            };

            ws.onmessage = (event) => {
                try {
                    const oscMessage = JSON.parse(event.data);
                    console.log('📨 OSC from Max:', oscMessage.address, oscMessage.args);

                    const address = oscMessage.address;
                    const args = oscMessage.args || [];

                    // Handle different OSC message types from Max/MSP
                    switch (address) {
                        case '/index': {
                            // Student index: "/index 12"
                            const studentIndex = args[0]?.value;
                            if (studentIndex !== undefined) {
                                const studentId = `student_${studentIndex}`;
                                console.log(`🎯 Setting student: ${studentId}`);
                                // Keep the current state when switching students
                                setCurrentStudent(studentId, currentState || 'intro');
                            }
                            break;
                        }

                        case '/nav': {
                            // Navigation: "/nav next" or "/nav prev"
                            const direction = args[0]?.value;
                            console.log(`🧭 Navigation: ${direction}`);
                            // TODO: Implement navigation logic in your store
                            // This could cycle through states or students
                            break;
                        }

                        case '/scrollposition': {
                            // Scroll position: "/scrollposition 111"
                            const scrollPos = args[0]?.value;
                            console.log(`📜 Scroll position: ${scrollPos}`);
                            // TODO: You can add scroll handling here if needed
                            // For now, this is just logged
                            break;
                        }

                        default:
                            console.log(`ℹ️  Unhandled OSC address: ${address}`);
                    }
                } catch (error) {
                    console.error('❌ Error parsing OSC message:', error);
                }
            };

            ws.onerror = (error) => {
                console.error('❌ OSC WebSocket error:', error);
            };

            ws.onclose = () => {
                console.log('🔌 Disconnected from OSC bridge');
                setOscConnected(false);

                // Attempt to reconnect after 3 seconds
                reconnectTimeoutRef.current = window.setTimeout(() => {
                    console.log('🔄 Attempting to reconnect to OSC bridge...');
                    connect();
                }, 3000);
            };

        } catch (error) {
            console.error('❌ Error connecting to OSC bridge:', error);
        }
    }, [setCurrentStudent, setOscConnected, currentState]);

    useEffect(() => {
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
    }, [connect]);
};