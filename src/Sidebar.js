import React, { Component } from 'react';
import './App.css';
import './Custom.css'

class App extends Component {
  render() {
    return (
      <div className="sidebar">
        <a href="www.cxsapp.com">
          <button className="list-item">
            CXS App
          </button>
        </a>
        <a href="www.admin.cxsapp.com">
          <button className="list-item">
            Admin
          </button>
        </a>
        <a href="https://github.com/connxus/connxus_app#boards?notFullScreen=false&repos=26181696&showClosed=false">
          <button className="list-item">
            Github
          </button>
        </a>
        <a href="https://mail.google.com">
          <button className="list-item">
            Gmail
          </button>
        </a>
        <a href="https://www.youtube.com">
          <button className="list-item">
            Youtube
          </button>
        </a>
        <a href="https://www.reddit.com">
          <button className="list-item">
            Reddit
          </button>
        </a>
        <a href="https://calendar.google.com">
          <button className="list-item">
            Calendar
          </button>
        </a>
        <a href="http://10.10.208.230:3000/">
          <button className="list-item">
            Time Sheet
          </button>
        </a>
      </div>
    );
  }
}

export default App;
