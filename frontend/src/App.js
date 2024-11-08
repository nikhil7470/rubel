// frontend/src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Wallet from './components/Wallet';
import VideoPlayer from './components/VideoPlayer';
import './style.css';

function App() {
    const [balance, setBalance] = useState(
        parseInt(localStorage.getItem("walletBalance")) || 0
    );

    const handleVideoEnd = () => {
        const newBalance = balance + 1;
        setBalance(newBalance);
        localStorage.setItem("walletBalance", newBalance);
    };

    return (
        <div className="app">
            <Navbar />
            <div className="main-content">
                <Dashboard balance={balance} />
                <Wallet balance={balance} />
                <VideoPlayer onVideoEnd={handleVideoEnd} />
            </div>
        </div>
    );
}

export default App;
