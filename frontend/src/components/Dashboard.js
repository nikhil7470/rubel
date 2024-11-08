// frontend/src/components/Dashboard.js
import React from 'react';

function Dashboard({ balance }) {
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <div className="stats-container">
                <div className="stat-box">
                    <h3>Coins Earned</h3>
                    <p>{balance}</p>
                </div>
                <div className="stat-box">
                    <h3>Videos Watched</h3>
                    <p>10</p>
                </div>
                <div className="stat-box">
                    <h3>Recent Activity</h3>
                    <p>Watched "Learning React"</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
