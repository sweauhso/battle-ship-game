// import React, { useState } from "react";
import React from 'react';
import ship1 from '../../assets/img/Aircraft_Shape.png'; // Largest ship
import ship2 from '../../assets/img/Battleship_Shape.png';
import ship3 from '../../assets/img/Submarine_Shape.png';
import ship4 from '../../assets/img/Cruiser_Shape.png';
import ship5 from '../../assets/img/Carrier_Shape.png'; // Smallest ship
import hitImage from '../../assets/img/Hit_small.png';
import missImage from '../../assets/img/Miss_small.png';
import '../../assets/App.css';


function Hitpoints() {

  // const [hit, setHit] = useState(missed)

  // function handleClick() {
  //   setHit(hit) 
  // }

  // const shipValues = {
  //   aircraftValues: {
  //     image: '../../assets/img/Aircraft_Shape.png',
  //     length: 5,
  //     hit: missed
  //   },

  //   battleshipValues: {
  //     image: '../../assets/img/Battleship_Shape.png',
  //     length: 4,
  //     hit: missed
  //   },

  //   submarineValues: {
  //     image: '../../assets/img/Submarine_Shape.png',
  //     length: 4,
  //     hit: missed
  //   },

  //   cruiserValues: {
  //     image: '../../assets/img/Cruiser_Shape.png',
  //     length: 3,
  //     hit: missed
  //   },

  //   carrierValues: {
  //     image: '../../assets/img/Carrier_Shape.png',
  //     length: 2,
  //     hit: missed
  //   }
  // }

  return (
    <div className="hitpoints-container">
      {[ship1, ship2, ship3, ship4, ship5].map((ship, index) => (
        <div className="hitpoints-row" key={index}>
          <img src={ship} alt={`Ship ${index + 1}`} className="ship-image" />
          <div className="hitpoints">
            {[false, false, false, true].map((isHit, i) => (
              <img
                key={i}
                src={isHit ? hitImage : missImage}
                alt={isHit ? 'Hit' : 'Miss'}
                className="hitpoint-image"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hitpoints;
