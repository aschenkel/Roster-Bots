import React from 'react';
import PropTypes from 'prop-types';
import './PlayerAttribute.css';
import {MdFitnessCenter,MdDirectionsRun} from 'react-icons/lib/md'

const PlayerAttribute = (props) => {
            switch (props.attributeType) {
                case "speed":
                    return(
                        <div>
                            <MdDirectionsRun size={23} className="icons"/>
                            <p className="atributes-text">speed</p>
                        </div>
                    )
                    break;
                case "strenght":
                    return(
                        <div>
                            <MdFitnessCenter size={23} className="icons"/>
                            <p className="atributes-text">strenght</p>
                        </div>
                    )
                    break;
                default:
                    break; 
            }
}

PlayerAttribute.propTypes = {
  attributeType: PropTypes.string.isRequired
};

export default PlayerAttribute;