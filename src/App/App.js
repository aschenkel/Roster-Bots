import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import {newRoster} from '../Models/Roster/Roster'

class App extends Component {
  constructor(){
    super()
    newRoster()
  }
  render() {
    return (
      <div className="App">
        <h1>Hey</h1>
      </div>
    );
  }
}

export default App;
