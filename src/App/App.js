import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import Owner from '../Components/Owner/Owner'
import Roster from '../Components/Roster/Roster'

class App extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div className="App">
        <Owner/>
        <Roster/>
      </div>
    );
  }
}

export default App;
