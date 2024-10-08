import React, { useState } from 'react';
import Cell from './Cells';
import '../../assets/App.css';

function Board() {
    const gridSize = 10;
    // Initialize the board state: 2D array with 'empty' values
    const [boardState, setBoardState] = useState(
        Array.from({ length: gridSize }, () => Array(gridSize).fill('empty'))
    );

    // Handle drag over event to allow dropping
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    // Handle drop event
    const handleDrop = (e, row, col) => {
        e.preventDefault();

        const droppedShip = JSON.parse(e.dataTransfer.getData('ship'));
        const { length, isHorizontal } = droppedShip;

        // Check if the ship fits within the grid
        if (isHorizontal) {
            if (col + length > gridSize) {
                console.log('Ship does not fit on the right side');
                return;
            }
        } else {
            if (row + length > gridSize) {
                console.log('Ship does not fit on the bottom side');
                return;
            }
        }

        // Additional check for negative index (out of bounds on left or top side)
        if (row < 0 || col < 0) {
            console.log('Ship does not fit on the top or left side');
            return;
        }

        // Update board cells to 'ship' for the length of the dropped ship
        const newBoardState = [...boardState];

        if (isHorizontal) {
            for (let i = 0; i < length; i++) {
                newBoardState[row][col + i] = 'ship';
            }
        } else {
            for (let i = 0; i < length; i++) {
                newBoardState[row + i][col] = 'ship';
            }
        }

        // Update the board state
        setBoardState(newBoardState);
    };

    // Render the board
    const renderBoard = () => {
        let board = [];
        for (let row = 0; row < gridSize; row++) {
            let rowCells = [];
            for (let col = 0; col < gridSize; col++) {
                rowCells.push(
                    <Cell
                        id={`cell-${row}-${col}`} // Unique ID based on row and column
                        key={`${row}-${col}`} // Unique key for React reconciliation
                        row={row}
                        col={col}
                        status={boardState[row][col]}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, row, col)}
                    />
                );
            }
            board.push(
                <div key={row} className="board-row">
                    {rowCells}
                </div>
            );
        }
        
        return board;
    };

    return <div className="board-container">{renderBoard()}</div>;
}

export default Board;
