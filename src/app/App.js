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
  
  const handleCellClick = () => {
    setCounter((prevCounter) => prevCounter + 1); // Increment the counter
  };


  return (
    <div className="App">
      <Nav />
      <div className="game-container">
        <Stats ships={ships} counter={counter}/>
        <Board setShips={setShips} onCellClick={handleCellClick}/>
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
