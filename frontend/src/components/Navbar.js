// frontend/src/components/Navbar.js
import React from 'react';
import '../style.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-item">🏠 Home</div>
            <div className="nav-item">💰 Wallet</div>
            <div className="nav-item">👤 Profile</div>
            <div className="nav-item">⚙️ Settings</div>
        </nav>
    );
}

export default Navbar;
