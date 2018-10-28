import React, { Component } from 'react';
import './App.css';
import {PadsContainer} from './PadsContainer';

class App extends Component {
  render() {
    return (
      <div>
      <h1 class='title'>Drum Machine</h1>
      <PadsContainer />
      <p class='credits'>Coded by Santiago Beloqui</p>
      </div>
    );
  }
}

export default App;
