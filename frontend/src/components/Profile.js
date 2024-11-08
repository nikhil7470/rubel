// frontend/src/components/Profile.js
import React from "react";
import Wallet from "./Wallet";

function Profile({ token }) {
    return (
        <div>
            <h2>Your Profile</h2>
            <Wallet token={token} />
        </div>
    );
}

export default Profile;
