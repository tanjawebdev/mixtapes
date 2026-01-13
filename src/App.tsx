import { useWebSocket } from './hooks/useWebSocket';
import { StudentDataLoader } from './components/StudentDataLoader';
import { PortfolioDisplay } from './components/PortfolioDisplay';
import { useStore } from './store';
import './App.css';

/**
 * Main App Component
 * 
 * Portfolio Exhibition System - WebSocket-controlled student portfolio viewer
 * 
 * Architecture:
 * 1. WebSocket connects automatically and listens for control messages
 * 2. Messages update Zustand store with current student and state
 * 3. StudentDataLoader ensures data is loaded and cached
 * 4. PortfolioDisplay renders the appropriate content
 * 
 * All content is loaded from /public/students/{id}/ directory
 */
function App() {
  // Initialize WebSocket connection
  useWebSocket();
  const wsConnected = useStore((state) => state.wsConnected);

  return (
    <div className="app">
      {/* WebSocket connection status indicator */}
      <div className={`ws-status ${wsConnected ? 'connected' : 'disconnected'}`}>
        <span className="ws-status-dot"></span>
        {wsConnected ? 'Connected' : 'Disconnected'}
      </div>

      {/* TESTING VIDEO QUALITY */}
      <video autoPlay loop muted playsInline style={{width: '100vw'}}>
        <source src="/students/02/vid1.mp4" type="video/mp4"/>
      </video>
      <video autoPlay loop muted playsInline style={{width: '100vw'}}>
        <source src="/students/02/vid2.mp4" type="video/mp4"/>
      </video>
      <video autoPlay loop muted playsInline style={{width: '100vw'}}>
        <source src="/students/02/vid3.mp4" type="video/mp4"/>
      </video>
      <video autoPlay loop muted playsInline style={{width: '100vw'}}>
        <source src="/students/02/vid4.mp4" type="video/mp4"/>
      </video>
      <video autoPlay loop muted playsInline style={{width: '100vw'}}>
        <source src="/students/02/vid5.mp4" type="video/mp4"/>
      </video>
      <video autoPlay loop muted playsInline style={{width: '100vw'}}>
        <source src="/students/02/vid6.mp4" type="video/mp4"/>
      </video>


      {/* Main portfolio display
      <StudentDataLoader>
        <PortfolioDisplay />
      </StudentDataLoader>
       */}
    </div>
  );
}

export default App;

