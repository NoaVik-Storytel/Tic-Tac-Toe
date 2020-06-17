import React, { useState } from 'react';
import '../index.css';
import { Square } from './square.js'
import { SelectionSquare } from './selectionsquare.js'
import { calculateWinner } from './functions.js'
import { calculateMove } from './functions.js'
import { StartSquare } from './startsquare.js'

export function Board(props) {
  const [gameReady, setGameReady] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [xEmoji, setXEmoji] = useState("");
  const [oEmoji, setOEmoji] = useState("");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [XIsNext, setXIsNext] = useState(true);
  const [Winner, SetWinner] = useState(null);

  function handleClick(i) {
    if (!squares[i] && !Winner) {
      const sq = squares.slice();
      sq[i] = xEmoji;
      const computerMove = calculateMove(sq,oEmoji,xEmoji);
      sq[computerMove] = oEmoji;
      setSquares(sq);
      setXIsNext(true)
      SetWinner(calculateWinner(sq))
    }
  }

  function selClick(i, n) {
    if (n === 1 && !(oEmoji === i)) {
      setXEmoji(i);
      setGameReady(Boolean(i && oEmoji))
    }
    if (n === 2 && !(xEmoji === i)) {
      setOEmoji(i)
      setGameReady(Boolean(i && xEmoji))
    }
  }

  function startClick() {
    if(!gameStarted){
      setGameStarted(true)
    } else {
      setGameStarted(true)
      setSquares(Array(9).fill(null))
      setXIsNext(true)
      SetWinner(null)
    }
  }

  function renderSquare(i) {
    return <Square value={squares[i]}
      onClick={() => handleClick(i)} />;
  }

  function renderSelSquare(i, n) {
    return <SelectionSquare value={i}
      onClick={() => selClick(i, n)} />;
  }

  function renderStartSquare() {
    var message = gameStarted? "Play again?" : "Start Game!"
    return <StartSquare value={message}
      onClick={() => startClick()} style={{ width: "1000px", fontSize: "10px" }} />
  }

  if (!gameStarted) {
    return (
      <div className="main">
        <div style={{marginBottom:"30px"}}>
          Emoji Selection
        </div>
        <div className="board-row" style={{marginBottom:"30px"}}>
          {renderSelSquare('😀', 1)}
          {renderSelSquare('😈', 1)}
          {renderSelSquare('💩', 1)}
          {renderSelSquare('😀', 2)}
          {renderSelSquare('😈', 2)}
          {renderSelSquare('💩', 2)}
        </div>
        <div style={{marginBottom:"30px"}}>
          Human {xEmoji.toString()}
        </div>
        <div>
          Computer {oEmoji.toString()}
        </div>
        {gameReady && renderStartSquare()}
      </div>
    );
  }
  else {
    return (
      <div className="main2">
        <div className="status" style={{marginBottom:"30px", textAlign:"center"}}>{'TIC TAC TOE'}</div>
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
        <div className="board-row" style={{marginBottom:"30px"}}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <div style= {{textAlign:"center"}}>
          {Boolean(Winner) && Winner!=="draw" && "The winner is "+Winner}
          {Boolean(Winner) && Winner=="draw" && "It is a "+Winner}
        </div>
        <div> 
          {Boolean(Winner) && renderStartSquare()}
        </div>
      </div>
    );
  }
}
