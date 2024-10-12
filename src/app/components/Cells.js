import React, { useState, useEffect } from "react";
import hitImage from '../../assets/img/Hit.png';
import missImage from '../../assets/img/Miss.png';
import '../../assets/App.css';

function Cell({ id, row, col, handleDrop, handleDragOver, boardState, setShips, onCellClick, onShipClick }) {
  const [status, setStatus] = useState('empty'); // Default to 'empty' for initialization

  // Sync the cell's state with the boardState whenever the board updates
  useEffect(() => {
    if (boardState[row] && boardState[row][col]) {  // Check if boardState[row] exists
      setStatus(boardState[row][col]);  // Set the status based on the board state
    }
  }, [boardState, row, col]);

  // Handle clicking on a cell (for example, to attack it)
  const handleClick = () => {
    if (status === 'ship') {
      // If the cell contains a ship, we can mark it as hit
      setStatus('hit');
      setShips((prevShips) =>
        prevShips.map((ship) => {
          const updatedCoordinates = ship.coordinates.map((coordinate) => {
            // If the current cell matches the ship's coordinate
            if (coordinate[0] === row && coordinate[1] === col) {
              return [-1, -1]; // Set the coordinate to -1
            }
            return coordinate; // No change if it doesn't match
          });
  
          return { ...ship, coordinates: updatedCoordinates }; // Update the ship's coordinates
        })
      );
      onCellClick();
      onShipClick();

    } else if (status === 'empty') {
      // If the cell is empty, mark it as a miss
      setStatus('miss');
      onCellClick();
    }
  };

  return (
    <div
      className="cell"
      onClick={handleClick}
      onDrop={(e) => handleDrop(e, row, col)} // Handle drop event for the ship
      onDragOver={handleDragOver} // Allow the cell to be a drop target
      id={id}
      style={{ backgroundColor: status === 'ship' ? 'lightblue' : 'white' }}  // Example: Change color for ship
    >
      {/* Show different images based on the cell status */}
      {status === 'hit' && <img src={hitImage} alt="Hit" className="cell-image" />}
      {status === 'miss' && <img src={missImage} alt="Miss" className="cell-image" />}
      {status === 'ship' && <div className="ship-placeholder"></div>} {/* Placeholder for a ship */}
    </div>
  );
}

export default Cell;
