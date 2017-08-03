import React from 'react';
import PropTypes from 'prop-types';
import './PlayerCard.css';
import {MdFitnessCenter,MdDirectionsRun} from 'react-icons/lib/md'

const PlayerCard = (props) => {
    return (
      <div className="card">
        <div className="content">
          <p className="name-tag">name</p>
          <p className="name">{props.player.name}</p>
        </div>
        <div className="atributes">
          <div className="titles">
            <div className="speed-separators">
              <MdDirectionsRun size={23} className="icons"/><p className="atributes-text">speed</p>
            </div>
              <MdFitnessCenter size={23} className="icons"/><p className="atributes-text">strenght</p>
          </div>
          <div className="values">
            <div className="speed-separators">
              <p className="badge speedBadge">{props.player.speed}</p>
            </div>
              <p className="badge">{props.player.strenght}</p>
          </div>
          <div>
            {props.player.score === 100 ?  
              <p className="score-exception"> {props.player.score}</p> 
              :
              <p className="score"> {props.player.score}</p> 
            }
          </div>
        </div>
      </div>
    );
}

PlayerCard.propTypes = {
  player: PropTypes.object.isRequired
};

PlayerCard.defaultProps = {
  displayName: 'PlayerCard'
}

export default PlayerCard;