import React, { Component } from 'react';
import './Roster.css';
import Lineup from '../Lineup/Lineup'
import {newRoster} from '../../models/Roster/Roster'

class Roster extends Component {
  render() {
    return (
      <div className="Roster">
        <Lineup roster={newRoster()}/>
      </div>
    );
  }
}

Roster.defaultProps = {
  displayName: 'Roster'
}

export default Roster;