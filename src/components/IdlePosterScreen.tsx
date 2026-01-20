import React from "react";
import "./IdlePosterScreen.css";
import poster from "../assets/idleposter.mp4";

export const IdlePosterScreen: React.FC = () => {
    return (
        <div className="idle-poster-container">
            <video src={poster} className="idle-poster-gif" autoPlay loop muted playsInline />
        </div>
    );
};
