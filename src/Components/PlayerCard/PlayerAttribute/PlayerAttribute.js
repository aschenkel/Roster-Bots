import React from 'react';
import PropTypes from 'prop-types';
import './PlayerAttribute.css';
import {MdFitnessCenter,MdDirectionsRun} from 'react-icons/lib/md'
import AttributeBadge from '../AttributeBadge/AttributeBadge'

const PlayerAttribute = (props) => {
    return (
        <div>
            <AttributeBadge className="badge" value={props.value}/>
            <p className="atributes-text">{props.attributeType}</p>
        </div>
    )
}

export const attributes = {
    speed : "speed",
    strength : "strength",
}

PlayerAttribute.propTypes = {
  attributeType: PropTypes.string,
  attributeValue: PropTypes.number
};

export default PlayerAttribute;