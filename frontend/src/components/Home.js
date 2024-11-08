// frontend/src/components/Home.js
import React, { useEffect, useState } from 'react';
import '../style.css';

function Home() {
    const [balance, setBalance] = useState(
        parseInt(localStorage.getItem("walletBalance")) || 0
    );

    return (
        <div className="app-container">
            <div className="header">
                Watch To Earn
            </div>
            
            {/* Wallet and Profile Sections */}
            <div className="wallet-profile-container">
                <div>
                    <h3>Wallet</h3>
                    <p>Balance: {balance} coins</p>
                </div>
                <div>
                    <h3>Profile</h3>
                    <p>User: Guest</p>
                </div>
            </div>

            {/* YouTube Video Embed */}
            <div className="video-container">
                <iframe
                    id="videoPlayer"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default Home;
