import React, { useState } from "react";
import hitImage from '../../assets/img/Hit.png';
import missImage from '../../assets/img/Miss.png';
import '../../assets/App.css';

function Cell({ id, row, col }) {
  

  const [status, setStatus] = useState('empty'); // Can be 'empty', 'ship', 'hit', or 'miss'

  // Handle clicking on a cell (for example, to attack it)
  const handleClick = () => {
    if (status === 'ship') {
      // If the cell contains a ship, we can mark it as hit
      setStatus('hit');
    } else if (status === 'empty') {
      // If the cell is empty, mark it as a miss
      setStatus('miss');
    }
  };

  return (
    <div
      className="cell"
      onClick={handleClick}
      id = {id}
    >
      {/* Show different images based on the cell status */}
      {status === 'hit' && <img src={hitImage} alt="Hit" className="cell-image" />}
      {status === 'miss' && <img src={missImage} alt="Miss" className="cell-image" />}
      {status === 'ship' && <div className="ship-placeholder"></div>} {/* Placeholder for a ship */}
    </div>
  );
}

export default Cell;
