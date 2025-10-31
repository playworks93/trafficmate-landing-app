import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import TrafficMap from './components/TrafficMap'
import TrafficUpdates from './components/TrafficUpdates'
import RouteOptimizer from './components/RouteOptimizer'
import UserReportForm from './components/UserReportForm'
import AnalyticsDashboard from './components/AnalyticsDashboard'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>TrafficMate</h1>
          <p className="tagline">Navigate Smarter. Commute Better.</p>
        </div>
        {isAuthenticated && (
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        )}
      </header>

      <main className="app-main">
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <Auth onLogin={handleLogin} />
        )}
      </main>

      <footer className="app-footer">
        <div className="features">
          <h3>Key Features:</h3>
          <ul>
          <li>Real-time Traffic Updates</li>
          <li>Route Optimization Suggestions</li>
          <li>User-Generated Traffic Reports</li>
          <li>Advanced Analytics Dashboard</li>
          <li>Community Forum for Local Insights</li>
          <li>Personalized Commute Alerts</li>
          </ul>
        </div>
        <p>&copy; 2025 TrafficMate. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App