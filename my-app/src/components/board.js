import React from 'react';
import '../index.css';
import { Square } from './square.js'
import { SelectionSquare } from './selectionsquare.js'
import { calculateWinner } from './functions.js'
import { calculateMove } from './functions.js'
import { StartSquare } from './startsquare.js'

export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameReady: false,
      gameStarted: false,
      xEmoji: "",
      oEmoji: "",
      squares: Array(9).fill(null),
      XIsNext: true,
      Winner: null
    };
  }

  handleClick(i) {
    if (!this.state.squares[i] && !this.state.Winner) {
      const squares = this.state.squares.slice();
      squares[i] = this.state.xEmoji;
      const computerMove = calculateMove(squares,this.state.xEmoji,this.state.oEmoji);
      squares[computerMove] = this.state.oEmoji;
    
      this.setState({
        squares: squares,
        XIsNext: this.state.XIsNext,
        Winner: calculateWinner(squares)
      });
    }
  }

  selClick(i, n) {
    if (n === 1 && !(this.state.oEmoji === i)) {
      this.setState({
        xEmoji: i,
        oEmoji: this.state.oEmoji,
        gameReady: Boolean(i && this.state.oEmoji)
      });
    }
    if (n === 2 && !(this.state.xEmoji === i)) {
      this.setState({
        xEmoji: this.state.xEmoji,
        oEmoji: i,
        gameReady: Boolean(i && this.state.xEmoji)
      });
    }
  }

  startClick() {
    if(!this.state.gameStarted){
      this.setState({
        gameStarted: true
      })
    } else {
      this.setState({
        gameStarted: false,
        squares: Array(9).fill(null),
        XIsNext: true,
        Winner: null
      });
    }

  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]}
      onClick={() => this.handleClick(i)} />;
  }

  renderSelSquare(i, n) {
    return <SelectionSquare value={i}
      onClick={() => this.selClick(i, n)} />;
  }

  renderStartSquare() {
    var message = this.state.gameStarted? "Play again?" : "Start Game!"
    return <StartSquare value={message}
      onClick={() => this.startClick()} style={{ width: "1000px", fontSize: "10px" }} />
  }

  componentDidUpdate(prevState) {
    // Typical usage (don't forget to compare props):
    if (this.state.XIsNext) {
      console.log("component updated")
    }
  }

  

  render() {
    if (!this.state.gameStarted) {
      return (
        <div className="main">
          <div style={{marginBottom:"30px"}}>
            Emoji Selection
          </div>
          <div className="board-row" style={{marginBottom:"30px"}}>
            {this.renderSelSquare('😀', 1)}
            {this.renderSelSquare('😈', 1)}
            {this.renderSelSquare('💩', 1)}
            {this.renderSelSquare('😀', 2)}
            {this.renderSelSquare('😈', 2)}
            {this.renderSelSquare('💩', 2)}
          </div>
          <div style={{marginBottom:"30px"}}>
            Human {this.state.xEmoji.toString()}
          </div>
          <div>
            Computer {this.state.oEmoji.toString()}
          </div>
          {this.state.gameReady && this.renderStartSquare()}
        </div>
      );
    }
    else {
      // const status = 'Next move: ' + (this.state.XIsNext ? this.state.xEmoji : this.state.oEmoji)
      return (
        <div className="main2">
          {/* <div className="status" style={{marginBottom:"30px", paddingTop:"80px"}}>{status}</div> */}
          <div className="status" style={{marginBottom:"30px", textAlign:"center"}}>{'TIC TAC TOE'}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row" style={{marginBottom:"30px"}}>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <div style= {{textAlign:"center"}}>
            {Boolean(this.state.Winner) && this.state.Winner!=="draw" && "The winner is "+this.state.Winner}
            {Boolean(this.state.Winner) && this.state.Winner=="draw" && "It is a "+this.state.Winner}
          </div>
          <div> 
            {Boolean(this.state.Winner) && this.renderStartSquare()}
          </div>
          
        </div>
      );
    }
  }
}