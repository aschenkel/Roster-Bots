import React from 'react';
import PropTypes from 'prop-types';
import './PlayerCard.css';
import PlayerName from './PlayerName/PlayerName'
import PlayerAttribute from './PlayerAttribute/PlayerAttribute'
import AttributeBadge from './AttributeBadge/AttributeBadge'

const PlayerCard = (props) => {
    return (
      <div className="card">
        <PlayerName name={props.player.name}/>
        <div className="atributes">
          <div className="titles">
            <div className="speed-separators">
              <PlayerAttribute attributeType= "speed"/>
            </div>
              <PlayerAttribute attributeType = "strenght"/>
          </div>
          <div className="values">
            <div className="speed-separators">
              <AttributeBadge speed value={props.player.speed}/>
            </div>
              <AttributeBadge value={props.player.strenght}/>
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