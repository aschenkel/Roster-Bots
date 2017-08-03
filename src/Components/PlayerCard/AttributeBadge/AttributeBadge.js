import React from 'react';
import PropTypes from 'prop-types';
import './AttributeBadge.css';

const AttributeBadge = (props) => {
    return (
        props.speed ?
            <p className="badge speedBadge">{props.value}</p>
        :
            <p className="badge">{props.value}</p>
    );
}

AttributeBadge.propTypes = {
  value: PropTypes.number.isRequired,
  speed: PropTypes.bool

};


export default AttributeBadge;