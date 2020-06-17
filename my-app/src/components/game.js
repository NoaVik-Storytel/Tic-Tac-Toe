import React from 'react';
import '../index.css';
import {Board} from './board.js'


export class Game extends React.Component {
  render() {
      return(
        <div className="game">
          <div className="game-board">
            <Board />  
          </div>  
        </div>
      )
  }
}