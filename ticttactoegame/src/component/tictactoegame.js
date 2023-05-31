import React, { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (
        board[a] && board[a] === board[b] && board[a] === board[c]
      ) {
        setWinner(board[a]);
        break;
      }
    }
  };

  const renderCell = (index) => {
    return (
      <button className="cell" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (board.every((cell) => cell)) {
    status = 'It\'s a draw!';
  } else {
    status = `Next Player: ${isXNext ? 'X' : 'O'}`;
  }

  return (
    <div className="tic-tac-toe">
      <div className="board">
        {board.map((cell, index) => (
          <div key={index} className="cell-container">
            {renderCell(index)}
          </div>
        ))}
      </div>
      <div className="status">{status}</div>
      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
