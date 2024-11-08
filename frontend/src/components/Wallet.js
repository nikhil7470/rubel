// frontend/src/components/Wallet.js
import React from 'react';

function Wallet({ balance }) {
    return (
        <div className="wallet">
            <h2>Wallet</h2>
            <p>Current Balance: {balance} coins</p>
        </div>
    );
}

export default Wallet;
