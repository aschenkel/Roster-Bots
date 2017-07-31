import React, { Component } from 'react';
import './Squad.css';

const Squad = (props) => {
    console.log(props)
    return (
        //Props = starter = bool.. players = array
        //check if starter
        //map over players -> element -> PlayerCard
      <div className="Squad">
        {props.players.map(player =>{
               <p> player.name</p>
            })}
      </div>
    );
}

export default Squad;