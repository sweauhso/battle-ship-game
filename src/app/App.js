import React, { useState } from 'react';
import ship1 from '../assets/img/Aircraft_Shape.png'; // Largest ship
import ship2 from '../assets/img/Battleship_Shape.png';
import ship3 from '../assets/img/Submarine_Shape.png';
import ship4 from '../assets/img/Cruiser_Shape.png';
import ship5 from '../assets/img/Carrier_Shape.png'; // Smallest ship
import Nav from './components/Nav';
import Stats from './components/Stats';
import Board from './components/Board';
import Ship from './components/Ships'
import '../assets/App.css';

function App() {
  const [ships, setShips] = useState([
    { name: 'Aircraft', image: ship1, length: 5, coordinates: [], hidden: false },
    { name: 'Battleship', image: ship2, length: 4, coordinates: [], hidden: false },
    { name: 'Submarine', image: ship3, length: 4, coordinates: [], hidden: false },
    { name: 'Cruiser', image: ship4, length: 3, coordinates: [], hidden: false },
    { name: 'Carrier', image: ship5, length: 2, coordinates: [], hidden: false }
  ]);

  const [counter, setCounter] = useState(0);
  const [shipCounter, setShipCounter] = useState(0);

  const handleShipClick = () => {
    setShipCounter((prevCounter) => prevCounter + 1); 
  }
  
  const handleCellClick = () => {
    setCounter((prevCounter) => prevCounter + 1); 
  };

  const resetGame = () => {
    // Reset ships to their initial state
    setShips([
      { name: 'Aircraft', image: ship1, length: 5, coordinates: [], hidden: false },
      { name: 'Battleship', image: ship2, length: 4, coordinates: [], hidden: false },
      { name: 'Submarine', image: ship3, length: 4, coordinates: [], hidden: false },
      { name: 'Cruiser', image: ship4, length: 3, coordinates: [], hidden: false },
      { name: 'Carrier', image: ship5, length: 2, coordinates: [], hidden: false }
    ]);
  
    // Reset counters to their initial values
    setCounter(0);
    setShipCounter(0);
  };


  return (
    <div className="App">
      <Nav resetGame={resetGame}/>
      <div className="game-container">
        <Stats ships={ships} counter={counter} shipCounter={shipCounter}/>
        <Board setShips={setShips} onCellClick={handleCellClick} onShipClick={handleShipClick}/>
      </div>
      <div className="ship-container">
        {ships.map((ship) => (
          !ship.hidden && (  // Only render the ship if it's not hidden
            <Ship key={ship.name} ship={ship} />
          )
        ))}
      </div>
    </div>
  );
}

export default App;
