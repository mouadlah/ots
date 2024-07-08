import React from 'react';
import './DashboardPage.css';
import chart1 from '../images/chart1.png';
import chart2 from '../images/chart2.png';
import chart3 from '../images/chart3.png';
import chart4 from '../images/chart4.png';
import chart5 from '../images/chart5.png';
import chart6 from '../images/chart6.png';

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <h2>Robotic Solutions Dashboard</h2>
      <div className="dashboard-section performance-metrics">
        <div className="metric-card">
          <h4>High Efficiency</h4>
          <p>Increased Productivity</p>
        </div>
        <div className="metric-card">
          <h4>Optimal Usage</h4>
          <p>Catering Events, Advertising Diverse Industries</p>
        </div>
      </div>
      <div className="dashboard-row">
        <div className="dashboard-section chart">
          <h3>Robot Distribution Trends</h3>
          <img src={chart1} alt="Robot Distribution Trends" />
        </div>
        <div className="dashboard-section chart">
          <h3>Robot Efficiency Analysis</h3>
          <img src={chart2} alt="Robot Efficiency Analysis" />
        </div>
      </div>
      <div className="dashboard-row">
        <div className="dashboard-section chart">
          <h3>Robotic Solutions</h3>
          <img src={chart3} alt="Robotic Solutions Table" />
        </div>
        <div className="dashboard-section chart">
          <h3>Robotic Balance Sheet</h3>
          <img src={chart4} alt="Robotic Balance Sheet" />
        </div>
      </div>
      <div className="dashboard-row">
        <div className="dashboard-section chart">
          <h3>Parameters 1</h3>
          <img src={chart5} alt="Parameters 1" />
        </div>
        <div className="dashboard-section chart">
          <h3>Parameters 2</h3>
          <img src={chart6} alt="Parameters 2" />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
