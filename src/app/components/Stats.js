import React from "react";
import Scores from './Scores'
import Hitpoints from './Hitpoints'
import '../../assets/App.css';


function Stats( { ships, counter, shipCounter } ){
    return(
        <div className = "stats-container">
            <Scores counter={counter} shipCounter={shipCounter}/>
            <Hitpoints ships = {ships}/>
        </div>
    );
}

export default Stats; 