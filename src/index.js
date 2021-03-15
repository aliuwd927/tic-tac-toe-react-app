import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Sqaure extends Component{
  render(){
    return(
      <button className='square'>
        {this.props.value}
      </button>
    )
  }
}

class Board extends Component{
  renderSquare(i){
    return <Square value={i}/>
}

class Game extends Component{
  render(){
    return(
      <div className='game'>
        <div className='game-board'>
          <Board />
        </div>

        <div className='game-info'>
          <div>{/* status*/}</div>
          <ol>{/*TODO*/}</ol>
        </div>
      </div>
    )
  }
}



// ========================================
ReactDOM.render(
  <React.StrictMode>
     <Game />
  </React.StrictMode>,
  document.getElementById('root')
);


