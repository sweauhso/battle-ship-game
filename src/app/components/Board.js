import React, { useState } from 'react';
import Cell from './Cells';
import '../../assets/App.css';

function Board( {setShips} ) {
    const gridSize = 10;

    // Board state: 2D array filled with 'empty' to represent unoccupied cells
    const [boardState, setBoardState] = useState(
        Array.from({ length: gridSize }, () => Array(gridSize).fill('empty'))
    );

    // Handle the drag over event to allow dropping
    const handleDragOver = (e) => {
        e.preventDefault(); // Prevent default behavior to allow drop
    };

    // Handle the drop event
    const handleDrop = (e, row, col) => {
        e.preventDefault();
        e.stopPropagation();


        // Get the ship data from the drag event
        const droppedShip = JSON.parse(e.dataTransfer.getData('ship'));

        const { name, length, isHorizontal } = droppedShip;

        setShips((prevShips) =>
            prevShips.map((ship) =>
                ship.name === name ? { ...ship, isStill: false } : ship
            )
        );

        // Copy the current board state
        const newBoardState = [...boardState];

        // Place the ship on the grid starting at the drop position
        if (isHorizontal) {
            if (col + length <= gridSize) { // Ensure ship doesn't go out of bounds horizontally
                for (let i = 0; i < length; i++) {
                    newBoardState[row][col + i] = 'ship'; // Update the board state with the ship
                }
            } else {
                alert("Ship doesn't fit");
            }
        } else {
            if (row + length <= gridSize) { // Ensure ship doesn't go out of bounds vertically
                for (let i = 0; i < length; i++) {
                    newBoardState[row + i][col] = 'ship'; // Update the board state with the ship
                }
            } else {
                alert("Ship doesn't fit");
            }
        }

        // Update the board state with the new ship position
        setBoardState(newBoardState);
    };

    // Render the board
    const renderGrid = () => {
        const rows = [];
        for (let row = 0; row < gridSize; row++) {
            const cells = [];
            for (let col = 0; col < gridSize; col++) {
                const cellId = `(${row + 1}, ${col + 1})`;  // Keep cellId as 1-based for display purposes
                cells.push(
                    <Cell
                        key={cellId}
                        id={cellId}
                        row={row}  // Pass 0-based row index to match the array indices
                        col={col}  // Pass 0-based col index to match the array indices
                        handleDrop={handleDrop}
                        handleDragOver={handleDragOver}
                        boardState={boardState}  // Pass the boardState to each Cell
                    />
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

    return (
        <div className="board-container">
            {renderGrid()}
        </div>

    );
}

export default Board;
