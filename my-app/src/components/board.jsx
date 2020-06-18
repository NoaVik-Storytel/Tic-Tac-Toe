import React, { useState } from 'react';
import '../index.css';
import Square from './square';
import SelectionSquare from './selectionsquare';
import { calculateWinner, calculateMove } from './functions';
import StartSquare from './startsquare';

export default function Board(props) {
  const [gameReady, setGameReady] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [xEmoji, setXEmoji] = useState('');
  const [oEmoji, setOEmoji] = useState('');
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [xTurn, setXTurn] = useState(true);

  function handleClick(i) {
    if (!squares[i] && !winner && xTurn) {
      const sq = squares.slice();
      sq[i] = xEmoji;
      setSquares(sq);
      setWinner(calculateWinner(sq));
      const sqtemp = sq.slice();
      setXTurn(false);
      if (!calculateWinner(sq)) {
        const computerMove = calculateMove(sqtemp, oEmoji, xEmoji);
        sqtemp[computerMove] = oEmoji;
      }
      setTimeout(() => {
        setWinner(calculateWinner(sqtemp));
        setSquares(sqtemp);
        setXTurn(true);
      }, 1000);
    }
  }

  function selClick(i, n) {
    if (n === 1 && !(oEmoji === i)) {
      setXEmoji(i);
      setGameReady(Boolean(i && oEmoji));
    }
    if (n === 2 && !(xEmoji === i)) {
      setOEmoji(i);
      setGameReady(Boolean(i && xEmoji));
    }
  }

  function startClick() {
    if (!gameStarted) {
      setGameStarted(true);
    } else {
      setGameStarted(false);
      setSquares(Array(9).fill(null));
      setWinner(null);
    }
  }

  function renderSquare(i) {
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
      />
    );
  }

  function renderSelSquare(i, n) {
    return (
      <SelectionSquare
        value={i}
        onClick={() => selClick(i, n)}
      />
    );
  }

  function renderStartSquare() {
    const message = gameStarted ? 'Play again?' : 'Start Game!';
    return (
      <StartSquare
        value={message}
        onClick={() => startClick()}
        style={{ width: '1000px', fontSize: '10px' }}
      />
    );
  }

  if (!gameStarted) {
    return (
      <div className="main">
        <div style={{ marginBottom: '30px' }}>
          Emoji Selection
        </div>
        <div className="board-row" style={{ marginBottom: '30px' }}>
          {renderSelSquare('😀', 1)}
          {renderSelSquare('😈', 1)}
          {renderSelSquare('💩', 1)}
          {renderSelSquare('😀', 2)}
          {renderSelSquare('😈', 2)}
          {renderSelSquare('💩', 2)}
        </div>
        <div style={{ marginBottom: '30px' }}>
          Human
          {' '}
          {xEmoji.toString()}
        </div>
        <div>
          Computer
          {' '}
          {oEmoji.toString()}
        </div>
        {gameReady && renderStartSquare()}
      </div>
    );
  }
  return (
    <div className="main2">
      <div className="status" style={{ marginBottom: '30px', textAlign: 'center' }}>TIC TAC TOE</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row" style={{ marginBottom: '30px' }}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div style={{ textAlign: 'center' }}>
        {Boolean(winner) && winner !== 'draw' && `The winner is ${winner}`}
        {Boolean(winner) && winner === 'draw' && `It is a ${winner}`}
      </div>
      <div>
        {Boolean(winner) && renderStartSquare()}
      </div>
    </div>
  );
}
