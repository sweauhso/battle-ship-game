import React from "react";
import Scores from './Scores'
import Hitpoints from './Hitpoints'
import '../../assets/App.css';


function Stats( { ships, counter } ){
    return(
        <div className = "stats-container">
            <Scores counter={counter}/>
            <Hitpoints ships = {ships}/>
        </div>
    );
}

export default Stats; 