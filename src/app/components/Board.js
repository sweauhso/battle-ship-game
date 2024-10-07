import React from 'react';
import Cell from './Cells';
import '../../assets/App.css';

function Board(){
    // Will use 100 cells
    const gridSize = 10;

    const renderBoard = () => {
        let board = [];
        for(let row = 0; row < gridSize; row++){
            let rowCells = [];
            for(let col = 0; col < gridSize; col++){
                rowCells.push(<Cell key={`${row}-${col}`} row={row} col={col} />);
            }
            board.push(
                <div key={row} className="board-row">
                    {rowCells}
                </div>
            );
        }
        return board;
    };

    return <div className ="board-container">{renderBoard()}</div>;
}

export default Board;