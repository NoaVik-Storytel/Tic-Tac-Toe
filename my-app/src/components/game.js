import React from 'react';
import '../index.css';
import {Board} from './board'


export function Game (props) {
    return(
    <div className="game">
        <div className="game-board">
        <Board />  
        </div>  
    </div>
    )
}