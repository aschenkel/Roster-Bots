import React from 'react';
import PropTypes from 'prop-types';
import './PlayerAttribute.css';
import {MdFitnessCenter,MdDirectionsRun} from 'react-icons/lib/md'
import AttributeBadge from '../AttributeBadge/AttributeBadge'

const PlayerAttribute = (props) => {
    let icon
    switch (props.attributeType) {
        case attributes.speed:
                icon = <MdDirectionsRun size={23} className="icons"/>
            break;
        case attributes.strenght:
                icon = <MdFitnessCenter size={23} className="icons"/>
            break;
        default:
            break; 
    }
    return (
        <div>
            <AttributeBadge className="badge" value={props.value}/>
            <p className="atributes-text">{props.attributeType}</p>
        </div>
    )
}

export const attributes = {
    speed : "speed",
    strenght : "strenght",
}

PlayerAttribute.propTypes = {
  attributeType: PropTypes.string,
  attributeValue: PropTypes.number
};

export default PlayerAttribute;