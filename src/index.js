import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { throwStatement } from '@babel/types';
// class Square extends React.Component {
//     constructor(props){
//         super(props);
//     }
//     render() {
//       return (
//         //  <button className="square" onClick={function(){alert( "click"+this.props.value );}}> 
//         //  </button>
//         // fucntion과 화살표함수의 this가 다르다 
//         <button 
//         className="square" 
//         onClick={() => {this.props.onClick()}}
//         >
//           {this.props.value}
//         </button>
//       );
//     }
//   }

//function component로 바꾸기
//state를 가질 필요가 없는 component는 function으로 정의하면 훨씬 간결하다.
  function Square(props){
      return(
          <button 
          className="square"
            onClick={props.onClick}
            >
                {props.value}
            </button>
      );
  }
  class Board extends React.Component {
      constructor(props){
          super(props);
          this.state={
              squares:Array(9).fill(null),
              xIsNext:true,
          }
      }
    handleClick(i){
          const squares=this.state.squares.slice();
          squares[i]=this.state.xIsNext?'X':'O';
          this.setState({
              squares:squares,
              xIsNext:!this.state.xIsNext,
            })
      }
    renderSquare(i) {
      return <Square 
      value={this.state.squares[i]}
      onClick={()=>this.handleClick(i)}
      />;
    }
  
    render() {
      const status = 'Next player: '+ (this.state.xIsNext?'X':'O');
  
      return (
        <div>
          <div className="status">{status}</div>
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
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  