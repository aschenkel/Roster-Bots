import React from 'react';
import './PlayerCard.css';

const PlayerCard = (props) => {
    return (
      <div className="card">
        <div className="content">
          <p>name {props.player.name}</p>
          <p>speed {props.player.speed}</p>
          <p>strenght {props.player.strenght}</p>
        </div>
      </div>
    );
}

export default PlayerCard;