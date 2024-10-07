import React from 'react';
import Nav from './components/Nav';
import Stats from './components/Stats';
import Board from './components/Board';
import '../assets/App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="game-container">
        <Stats />
        <Board />
      </div>
    </div>
  );
}

export default App;
