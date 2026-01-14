import { useOscData } from './hooks/useOscData';
import { PortfolioDisplay } from './components/PortfolioDisplay';
import { useStore } from './store';
import './App.css';

/**
 * Main App Component
 * 
 * Portfolio Exhibition System - OSC-controlled student portfolio viewer
 * 
 * Architecture:
 * 1. OSC bridge connects automatically and listens for control messages
 * 2. Messages update Zustand store with current student and project
 * 3. PortfolioDisplay loads data and renders content based on store state
 */
function App() {
  // Initialize OSC connection
  useOscData();
  const oscConnected = useStore((state) => state.wsConnected); // Reusing wsConnected state for OSC

  return (
    <div className="app">
      {/* OSC connection status indicator */}
      <div className={`ws-status ${oscConnected ? 'connected' : 'disconnected'}`}>
        <span className="ws-status-dot"></span>
        {oscConnected ? 'OSC Connected' : 'OSC Disconnected'}
      </div>

      {/* Main portfolio display */}
      <PortfolioDisplay />
    </div>
  );
}

export default App;

