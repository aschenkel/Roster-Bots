import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard'
import './Squad.css';

const Squad = (props) => {
    return (
      <div className="Squad">
        <h1>{props.starter ? "STARTERS" : "SUBS"} </h1>
          <div className="Squad-Content">
            {
              props.players.map(player =>{
                return <PlayerCard player={player}/>
              })
            }
          </div>
      </div>
    );
}

export default Squad;