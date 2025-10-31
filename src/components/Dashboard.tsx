import { useState } from 'react'

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <button 
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'real_time_traffic_updates' ? 'active' : ''}
          onClick={() => setActiveTab('real_time_traffic_updates')}
        >
          Real Time Traffic Updates
        </button>
        <button 
          className={activeTab === 'route_optimization_suggestions' ? 'active' : ''}
          onClick={() => setActiveTab('route_optimization_suggestions')}
        >
          Route Optimization Suggestions
        </button>
        <button 
          className={activeTab === 'user_generated_traffic_reports' ? 'active' : ''}
          onClick={() => setActiveTab('user_generated_traffic_reports')}
        >
          User Generated Traffic Reports
        </button>
      </nav>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="tab-content">
            <h2>Dashboard Overview</h2>
            <div className="cards">
              <div className="card">
                <h3>Total Users</h3>
                <p className="stat">1,234</p>
              </div>
              <div className="card">
                <h3>Active Sessions</h3>
                <p className="stat">567</p>
              </div>
              <div className="card">
                <h3>Revenue</h3>
                <p className="stat">$12,345</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'real_time_traffic_updates' && (
          <div className="tab-content">
            <h2>Real-time Traffic Updates</h2>
            <p>Manage your real time traffic updates here.</p>
          </div>
        )}

        {activeTab === 'route_optimization_suggestions' && (
          <div className="tab-content">
            <h2>Route Optimization Suggestions</h2>
            <p>Manage your route optimization suggestions here.</p>
          </div>
        )}

        {activeTab === 'user_generated_traffic_reports' && (
          <div className="tab-content">
            <h2>User-Generated Traffic Reports</h2>
            <p>Manage your user generated traffic reports here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard