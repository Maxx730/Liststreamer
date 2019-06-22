import React, { Component } from 'react';
import './App.css';

import StartPanel from './components/StartPanel'
import StreamView from './views/StreamView'

class App extends Component {
  constructor() {
    super(); 

    this.state = {
      currentRoom: 'EBGFC'
    }
  }

  render() {
    return (
      <div className="flew-grow bg-gray-1000 flex">
        {
          this.state.currentRoom !== null ? <StreamView/> : <StartPanel/>
        }
      </div>
    );
  }
}

export default App;
