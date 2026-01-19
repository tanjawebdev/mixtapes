import React from "react";
import "./IdlePosterScreen.css";
import poster from "../assets/poster.gif";

export const IdlePosterScreen: React.FC = () => {
    return (
        <div className="idle-poster-container">
            <img src={poster} alt="Idle Poster" className="idle-poster-gif" />
        </div>
    );
};
