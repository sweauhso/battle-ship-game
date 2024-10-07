import React, { useState} from "react";
import hitImage from '../../assets/img/Hit.png'
import missImage from '../../assets/img/Miss.png'
import '../../assets/App.css';

function Cell(){
    const [status, setStatus] = useState('empty')

    // Just building a foundation for viewing, will implement correct logic later.
    const handleClick = () => {
        if (status === 'empty') {
          // Change status to either 'hit' or 'miss' based on game logic
          // For this example, we are just toggling between 'hit' and 'miss'
          const newStatus = Math.random() > 0.5 ? 'hit' : 'miss';
          setStatus(newStatus);
        }
      };

      return (
        <div className="cell" onClick={handleClick}>
          {status === 'hit' && <img src={hitImage} alt="Hit" className="cell-image" />}
          {status === 'miss' && <img src={missImage} alt="Miss" className="cell-image" />}
        </div>
      );
}

export default Cell;