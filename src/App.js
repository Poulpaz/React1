import React, { Component } from 'react';
import './App.css';
import { Game } from "./Game";

class App extends Component {

  render() {
    return (
      <div className="Game">
        <header className="Game-header">
            <div className="game">
                <div className="GameBoard">
                    <Game/>
                </div>
            </div>
        </header>
      </div>
    );
  }
}

export default App;