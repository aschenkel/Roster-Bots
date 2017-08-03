import React, { Component} from 'react';
import PropTypes from 'prop-types';
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

Lineup.defaultProps = {
  displayName: 'Lineup'
}

export default Lineup;