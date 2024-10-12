import React, { useState } from 'react';
import Nav from './components/Nav';
import Stats from './components/Stats';
import Board from './components/Board';
import Ship from './components/Ships'
import '../assets/App.css';

function App() {
  const [ships, setShips] = useState([
    { name: 'Aircraft', length: 5, coordinates: [], hidden: false },
    { name: 'Battleship', length: 4, coordinates: [], hidden: false },
    { name: 'Submarine', length: 4, coordinates: [], hidden: false },
    { name: 'Cruiser', length: 3, coordinates: [], hidden: false },
    { name: 'Carrier', length: 2, coordinates: [], hidden: false }
  ]);

  function handleClick() {
    console.log(ships)
  }

  return (
    <div className="App">
      <Nav />
      <div className="game-container">
        <Stats />
        <Board setShips={setShips} />
      </div>
      <div className="ship-container">
        {ships.map((ship) => (
          !ship.hidden && (  // Only render the ship if it's not hidden
            <Ship key={ship.name} ship={ship} />
          )
        ))}
      </div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
