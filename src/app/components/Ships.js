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
  // State to track orientation for this specific ship
  const [isHorizontal, setIsHorizontal] = useState(true);

  // Handle dragging the ship (sets data on drag start)
  const handleDragStart = (e) => {
    e.dataTransfer.setData('ship', JSON.stringify({ ...ship, isHorizontal }));
  };

  // Handle clicking to rotate the ship
  const handleClick = () => {
    setIsHorizontal(!isHorizontal); // Toggle between horizontal and vertical
  };

  return (
    <div
      onClick={handleClick} // Toggle orientation on click
      onDragStart={(e) => handleDragStart(e)} // Start dragging
      draggable
      className={`ship ship-${isHorizontal ? 'horizontal' : 'vertical'}`}
      style={{
        width: isHorizontal ? `${ship.length * 50}px` : '50px',
        height: isHorizontal ? '50px' : `${ship.length * 50}px`,
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
