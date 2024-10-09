import React, { useState } from 'react';

// Define the ships
const ships = [
  { name: 'Aircraft', length: 5 },
  { name: 'Battleship', length: 4 },
  { name: 'Submarine', length: 4 },
  { name: 'Cruiser', length: 3 },
  { name: 'Carrier', length: 2 }
];

// Ship Component
const Ship = ({ ship }) => {
  const cellSize = 40; // Set the size of each grid cell to 40px

  // State to track orientation for this specific ship
  const [isHorizontal, setIsHorizontal] = useState(true);
 
  // Handle clicking to rotate the ship
  const handleClick = () => {
    setIsHorizontal(!isHorizontal); // Toggle between horizontal and vertical
  };

  return (
    <div
      onClick={handleClick} // Toggle orientation on click
      className={`ship ship-${isHorizontal ? 'horizontal' : 'vertical'}`}
      style={{
        width: isHorizontal ? `${ship.length * cellSize}px` : `${cellSize}px`, // Horizontal width = length * cellSize
        height: isHorizontal ? `${cellSize}px` : `${ship.length * cellSize}px`, // Vertical height = length * cellSize
        backgroundColor: 'gray',
        marginBottom: '10px',
        cursor: 'pointer',
      }}
    >
      {ship.name}
    </div>
  );
};

// Main Game Component
const BattleshipGame = () => {
  return (
    <div className="ship-container">
      {ships.map((ship) => (
        <Ship key={ship.name} ship={ship} />
      ))}
    </div>
  );
};

export default BattleshipGame;
