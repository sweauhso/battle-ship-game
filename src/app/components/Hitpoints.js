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
