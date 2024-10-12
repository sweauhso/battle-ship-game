import React, { useState } from 'react';
import Nav from './components/Nav';
import Stats from './components/Stats';
import Board from './components/Board';
import Ship from './components/Ships'
import '../assets/App.css';

function App() {
  const [ships, setShips] = useState([
    { name: 'Aircraft', length: 5, isStill: true },
    { name: 'Battleship', length: 4, isStill: true },
    { name: 'Submarine', length: 4, isStill: true },
    { name: 'Cruiser', length: 3, isStill: true },
    { name: 'Carrier', length: 2, isStill: true }
  ]);

  return (
    <div className="App">
      <Nav />
      <div className="game-container">
        <Stats />
        <Board setShips = {setShips}/>
      </div>
      <div className="ship-container">
        {ships.map((ship) => (
          <Ship key={ship.name} ship={ship} />
        ))}
      </div>
    </div>
  );
}

export default App;
