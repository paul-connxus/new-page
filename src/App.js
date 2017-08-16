import React, { Component } from 'react';
import yorha from './yorha.png';
import Sidebar from './Sidebar.js';
import Clock from 'react-clock';
import './App.css';
import './Custom.css'

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="wrapper">
          <div className="header">
            <img className="logo" src={yorha} />
          </div>
          <div className="clock-wrapper">
            <Clock />
          </div>
          <Sidebar />
          <div className="text-area">
            <textarea className="text-block" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
