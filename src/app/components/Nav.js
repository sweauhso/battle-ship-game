import React from 'react';
import '../../assets/App.css';

function Nav({resetGame}){
    return(
        <nav className = "navbar">
            <h1>Battleship Game</h1>
            <button className="button-1" onClick={resetGame}>Restart</button>
        </nav>
    );
}

export default Nav;