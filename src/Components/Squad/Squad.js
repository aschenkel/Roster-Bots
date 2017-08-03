import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../PlayerCard/PlayerCard'
import './Squad.css';

const Squad = (props) => {
    return (
      <div>
        <h1>{props.starter ? "STARTERS" : "SUBS"} </h1>
          <div className="Squad-Content">
            {
              props.players.map(player =>{
                return <PlayerCard player={player} key={player.score}/>
              })
            }
          </div>
      </div>
    );
}

Squad.propTypes = {
  players: PropTypes.array.isRequired,
  starter: PropTypes.bool
};

Squad.defaultProps = {
  displayName: 'Squad'
}

export default Squad;