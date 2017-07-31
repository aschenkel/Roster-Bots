import React, { Component } from 'react';
import './Lineup.css';
import Squad from '../Squad/Squad'
import {pickLineUp} from '../../models/Lineup/Lineup'

class Lineup extends Component {
  constructor(props){
    super(props)
    this.state = pickLineUp(this.props.roster)
  }
  render() {
    return (
      <div className="Lineup">
        <Squad starter players={this.state.starters}/>
        <Squad players={this.state.subs}/>
      </div>
    );
  }
}

export default Lineup;