import { useEffect, useRef, useCallback } from 'react';
import { useStore } from '../store';

/**
 * Custom hook to handle OSC data reception from Max/MSP
 * 
 * This hook connects to an OSC-over-WebSocket bridge server
 * and handles incoming OSC messages to control the portfolio display.
 * 
 * Expected OSC message formats from Max/MSP:
 * - /cdpresent <0|1>       : CD present sensor (1 = present, 0 = not present)
 * - /index <number>        : Student index 0-100 (e.g., "/index 11")
 * - /btnprev <0|1>         : Previous button (1 = pressed, 0 = released)
 * - /btnnext <0|1>         : Next button (1 = pressed, 0 = released)
 * - /scrollpos <number>    : Scroll position value
 */
export const useOscData = () => {
    const wsRef = useRef<WebSocket | null>(null);
    const reconnectTimeoutRef = useRef<number | undefined>(undefined);
    const setCurrentStudent = useStore((state) => state.setCurrentStudent);
    const navigateProject = useStore((state) => state.navigateProject);
    const resetToInitial = useStore((state) => state.resetToInitial);
    const setOscConnected = useStore((state) => state.setWsConnected);

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
                            // Student index: "/index 11" (value 0-100)
                            // Always reset to project 1 when changing students
                            const studentIndex = args[0]?.value;
                            if (studentIndex !== undefined) {
                                const studentId = String(studentIndex);
                                console.log(`🎯 Setting student: ${studentId}, project: 1`);
                                setCurrentStudent(studentId, 1); // Always start at project 1
                            }
                            break;
                        }

                        case '/cdpresent': {
                            // CD present sensor: "/cdpresent 1" or "/cdpresent 0"
                            const isPresent = args[0]?.value === 1;
                            console.log(`💿 CD Present: ${isPresent ? 'Yes' : 'No'}`);

                            // When CD is removed (0), reset to project 1
                            if (!isPresent) {
                                console.log('🔄 CD removed - resetting to project 1');
                                resetToInitial();
                            }
                            break;
                        }

                        case '/btnprev': {
                            // Previous button: "/btnprev 1" (pressed) or "/btnprev 0" (released)
                            const pressed = args[0]?.value === 1;
                            if (pressed) {
                                console.log(`⬅️  Previous button pressed`);
                                navigateProject('prev');
                            }
                            break;
                        }

                        case '/btnnext': {
                            // Next button: "/btnnext 1" (pressed) or "/btnnext 0" (released)
                            const pressed = args[0]?.value === 1;
                            if (pressed) {
                                console.log(`➡️  Next button pressed`);
                                navigateProject('next');
                            }
                            break;
                        }

                        case '/scrollpos': {
                            // Scroll position: "/scrollpos 5"
                            const scrollPos = args[0]?.value;
                            console.log(`📜 Scroll position: ${scrollPos}`);
                            // TODO: You can add scroll handling here if needed
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
    }, [setCurrentStudent, navigateProject, resetToInitial, setOscConnected]);

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