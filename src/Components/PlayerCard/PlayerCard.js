import React from 'react';
import PropTypes from 'prop-types';
import './PlayerCard.css';
import PlayerName from './PlayerName/PlayerName'
import PlayerAttribute, {attributes} from './PlayerAttribute/PlayerAttribute'
import Score from './Score/Score'
//       

const PlayerCard = (props) => {
    return (
      <div className="card">
        <div className="data">
          <div className="name-container">
            <PlayerName name={props.player.name}/>
          </div>
          <div className="atributes">
                <PlayerAttribute attributeType= {attributes.speed} value={props.player.speed}/>
                <PlayerAttribute attributeType = {attributes.strenght} value={props.player.strenght}/>
          </div>
        </div>
        <div className="player-score">
         <Score score={props.player.score}/>
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