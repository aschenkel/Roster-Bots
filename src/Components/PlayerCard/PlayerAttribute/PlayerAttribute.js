import React from 'react';
import PropTypes from 'prop-types';
import './PlayerAttribute.css';
import {MdFitnessCenter,MdDirectionsRun} from 'react-icons/lib/md'
import AttributeBadge from '../AttributeBadge/AttributeBadge'

const PlayerAttribute = (props) => {
            switch (props.attributeType) {
                case attributes.speed:
                    return(
                        <div>
                            <MdDirectionsRun size={23} className="icons"/>
                            <p className="atributes-text">speed</p>
                            <AttributeBadge className="badge" value={props.value}/>
                        </div>
                    )
                    break;
                case attributes.strenght:
                    return(
                        <div>
                            <MdFitnessCenter size={23} className="icons"/>
                            <p className="atributes-text">strenght</p>
                            <AttributeBadge value={props.value}/>
                        </div>
                    )
                    break;
                default:
                    break; 
            }
}

export const attributes = {
    speed : "speed",
    strenght : "strenght",
}

PlayerAttribute.propTypes = {
  attributeType: PropTypes.string.isRequired,
  attributeValue: PropTypes.number.isRequired
};

export default PlayerAttribute;