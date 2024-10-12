import React from "react";
import hitImage from '../../assets/img/Hit_small.png';
import missImage from '../../assets/img/Miss_small.png';
import '../../assets/App.css';

function Hitpoints({ ships }) {
  return (
    <div className="hitpoints-container">
      {ships.map((ship, index) => (
        <div className="hitpoints-row" key={index}>
          <img src={ship.image} alt={ship.name} className="ship-image" />
          <div className="hitpoints">
            {ship.coordinates.map((coordinate, i) => (
              <img
                key={i}
                src={coordinate[0] === -1 && coordinate[1] === -1 ? hitImage : missImage}
                alt={coordinate[0] === -1 && coordinate[1] === -1 ? 'Hit' : 'Miss'}
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
