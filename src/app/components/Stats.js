import React from "react";
import Scores from './Scores'
import Hitpoints from './Hitpoints'
import '../../assets/App.css';


function Stats( { ships } ){
    return(
        <div className = "stats-container">
            <Scores />
            <Hitpoints ships = {ships}/>
        </div>
    );
}

export default Stats; 