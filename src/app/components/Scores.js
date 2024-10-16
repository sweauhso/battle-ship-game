import React from 'react';
import '../../assets/App.css';

function Scores({counter, shipCounter}) {
    return (
        <div className="scores-container">
            <div className="self">
                <h2>{shipCounter}</h2>
                <p>Hits</p>
            </div>
            <div className="opponent">
                <h2>{counter}</h2>
                <p>Shots</p>
            </div>
        </div>
    );
}

export default Scores;
