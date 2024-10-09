import React, { useState } from 'react';

// Ship Component
const Ship = ({ ship }) => {
  const cellSize = 40; // Set the size of each grid cell to 40px

  // State to track orientation for this specific ship
  const [isHorizontal, setIsHorizontal] = useState(true);

  // Handle clicking to rotate the ship
  const handleClick = () => {
    setIsHorizontal(!isHorizontal); // Toggle between horizontal and vertical
  };

  // Handling dragging and dropping
  const handleDragStart = (e) => {
    // Storing ship data (name, length, orientation) in the dataTransfer object
    const shipData = {
      name: ship.name,
      length: ship.length,
      isHorizontal: isHorizontal,
  };

  console.log('Ship Data being dragged:', shipData);
  
    e.dataTransfer.setData(
      'ship',
      JSON.stringify({
        name: ship.name,
        length: ship.length,
        isHorizontal: isHorizontal,
      })
    );
    // Optionally, you can change the appearance of the drag image
    e.dataTransfer.setDragImage(e.target, 0, 0); // Custom drag image position (top-left corner)
  };

  return (
    <div
      draggable = 'true'
      onClick={handleClick} 
      onDrag={handleDragStart}
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
  const ships = [
    { name: 'Aircraft', length: 5 },
    { name: 'Battleship', length: 4 },
    { name: 'Submarine', length: 4 },
    { name: 'Cruiser', length: 3 },
    { name: 'Carrier', length: 2 }
  ];

  return (
    <div className="ship-container">
      {ships.map((ship) => (
        <Ship key={ship.name} ship={ship} />
      ))}
    </div>
  );
};

export default BattleshipGame;
