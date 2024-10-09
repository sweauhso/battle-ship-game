import React from 'react';
import Cell from './Cells';
import '../../assets/App.css';

function Board() {
    const gridSize = 10;

    // Render the board
    const renderGrid = () => {
        const rows = [];
        for (let row = 0; row < gridSize; row++) {
          const cells = [];
          for (let col = 0; col < gridSize; col++) {
            // Each cell is given a unique id based on its row and column
            const cellId = `(${row + 1}, ${col + 1})`;
            cells.push(
              <Cell key={cellId} id={cellId} row={row + 1} col={col + 1} />
            );
          }
          rows.push(
            <div key={row} className="board-row">
              {cells}
            </div>
          );
        }
        return rows;
      };

    return <div className="board-container">{renderGrid()}</div>;
}

export default Board;
