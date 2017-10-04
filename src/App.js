import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Voyage 2 Turtles 07</h1>
        </header>
        <p className="App-intro">
          This is the initial template for Chrome's New Tab Extension.
        </p>
      </div>
    );
  }
}

export default App;
