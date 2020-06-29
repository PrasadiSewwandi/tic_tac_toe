import React from 'react';
import ReactDOM from 'react-dom'

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* To Do */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }
}