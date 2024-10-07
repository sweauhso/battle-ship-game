import React from "react";
import Nav from './components/Nav'
import Stats from './components/Stats'


function App(){
    return(
        <div className="App">
      <Nav /> 
      <Stats />
      <div className="game">
      </div>
    </div>
    );
}

export default App;