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
      
    renderSquare(i) {
      return <Square 
      value={this.props.squares[i]}
      onClick={()=>this.props.onClick(i)}
      />;
    }
    render() {
    
      return (
        <div>
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
    constructor(props){
      super(props);
      this.state={
        history:[{
          squares:Array(9).fill(null),
        }],
        xIsNext: true,
        step: 0
      }
    }

    handleClick(i){
      const history=this.state.history.slice(0,this.state.step+1);
      const current=this.state.history[history.length-1];
      const squares=current.squares.slice();
      if(calcuateWinner(squares)||squares[i]){
          return;
      }
      squares[i]=this.state.xIsNext?'X':'O';
      this.setState({
        history: history.concat([{
          squares:squares,
        }]),
        xIsNext:!this.state.xIsNext,
        step: history.length,
      });
    }
    jumpTo(step){
      this.setState({
        step:step,
        xIsNext:step%2===0,
      });
    }
    render() {
      const history=this.state.history;
      const current=this.state.history[this.state.step];
      const winner = calcuateWinner(current.squares);
      let status;
      if(winner){
        status='Winner : '+winner;
      }else{
        status='Next player : '+(this.state.xIsNext?'X':'O');
      }
      const moves=history.map((step,move)=>{
        const desc=move?'go to move #'+move:'go to game start';
        return (
          <li key={move}>
            <button onClick={()=>this.jumpTo(move)}>{desc}</button>
          </li>
        )
      })

      return (
        <div className="game">
          <div className="game-board">
            <Board squares={current.squares} onClick={i=>this.handleClick(i)}/>
          </div>
          <div className="game-info">
            <div>{ status }</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
  function calcuateWinner(squares){
      const lines=[
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6],
      ];
      for(let i=0;i<lines.length;i++){
          const[a,b,c]=lines[i];
          if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c]){
              return squares[a];
          }
      }
      return null;
  }
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  