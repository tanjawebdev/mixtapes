import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useOscData } from './hooks/useOscData';
import { PortfolioDisplay } from './components/PortfolioDisplay';
import { CvDisplay } from './components/CvDisplay';
import { AboutDisplay } from './components/AboutDisplay';
import { useStore } from './store';
import './App.css';

/**
 * Main App Component
 * 
 * Multi-Screen Portfolio Exhibition System
 * 
 * Routes for 3-screen setup:
 * - /cv        → Left screen: Student CV/resume
 * - /portfolio → Center screen: Portfolio media gallery
 * - /about     → Right screen: Current project description
 * 
 * All screens share the same Zustand store state (student ID, project number)
 * and respond to OSC messages simultaneously.
 */
function App() {
  // Initialize OSC connection (active across all routes)
  useOscData();
  const oscConnected = useStore((state) => state.wsConnected);

  return (
    <BrowserRouter>
      <div className="app">
        {/* OSC connection status indicator (visible on all screens) */}
        <div className={`ws-status ${oscConnected ? 'connected' : 'disconnected'}`}>
          <span className="ws-status-dot"></span>
          {oscConnected ? 'OSC Connected' : 'OSC Disconnected'}
        </div>

        {/* Route configuration */}
        <Routes>
          {/* Left screen: CV */}
          <Route path="/cv" element={<CvDisplay />} />

          {/* Center screen: Portfolio */}
          <Route path="/portfolio" element={<PortfolioDisplay />} />

          {/* Right screen: About */}
          <Route path="/about" element={<AboutDisplay />} />

          {/* Default: redirect to portfolio (center screen) */}
          <Route path="/" element={<Navigate to="/portfolio" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


