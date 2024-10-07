import React from "react";
import Scores from './Scores'
import Hitpoints from './Hitpoints'
import '../../assets/App.css';


function Stats(){
    return(
        <div className = "stats-container">
            <Scores />
            <Hitpoints />
        </div>
    );
}

export default Stats; 