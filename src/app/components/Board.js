import React, { useState } from 'react';
import Cell from './Cells'; // Ensure the correct path to your Cell component
import Ship from './Ships'; // Ensure the correct path to your Ship component
import '../../assets/App.css';

function Board() {
    const gridSize = 10;
    const cellSize = 40;



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

        const data = e.dataTransfer.getData('ship');
        console.log('Data received on drop:', data); // Debugging: Check if data is present

        if (!data) {
            console.error('No ship data found in dataTransfer');
            return;
        }

        // Get the ship data from the drag event
        const droppedShip = JSON.parse(e.dataTransfer.getData('ship'));

        const { name, length, isHorizontal } = droppedShip;

        // Copy the current board state
        const newBoardState = [...boardState];

        // Place the ship on the grid starting at the drop position
        if (isHorizontal) {
            if (col + length <= gridSize) { // Ensure ship doesn't go out of bounds horizontally
                for (let i = 0; i < length; i++) {
                    newBoardState[row][col + i] = 'ship'; // Update the board state with the ship
                }
            }
        } else {
            if (row + length <= gridSize) { // Ensure ship doesn't go out of bounds vertically
                for (let i = 0; i < length; i++) {
                    newBoardState[row + i][col] = 'ship'; // Update the board state with the ship
                }
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
                // Each cell is given a unique id based on its row and column
                const cellId = `(${row + 1}, ${col + 1})`;
                cells.push(
                    <Cell
                        key={cellId}
                        id={cellId}
                        row={row + 1}
                        col={col + 1}
                        handleDrop={handleDrop}
                        handleDragOver={handleDragOver}
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
