import React from 'react';
import '../../assets/App.css';

function Scores() {
    return (
        <div className="scores-container">
            <div className="self">
                <h2>11</h2>
                <p>Hits</p>
            </div>
            <div className="opponent">
                <h2>40</h2>
                <p>Shots</p>
            </div>
        </div>
    );
}

export default Scores;
