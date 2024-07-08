import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [initBoard, setNewBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setNewBoard((previousBoard) => {
            const updateBoard = [...previousBoard].map(innerArray => [...innerArray]);
            updateBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updateBoard
        })

        onSelectSquare();
    }
    return (
        <ol id="game-board">
            {initBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                        <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                    </li>
                    )}
                </ol>
            </li>)}
        </ol>
    )
}
