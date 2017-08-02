import React, { Component, PropTypes} from 'react';
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
      <div>
        <Squad starter players={this.state.starters}/>
        <Squad players={this.state.subs}/>
      </div>
    );
  }
}

Lineup.propTypes = {
  roster: PropTypes.array.isRequired
};

export default Lineup;