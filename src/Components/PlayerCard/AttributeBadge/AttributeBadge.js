import React from 'react';
import PropTypes from 'prop-types';
import './AttributeBadge.css';

const AttributeBadge = (props) => {
    return (
        <p className="badge">{props.value}</p>
    );
}

AttributeBadge.propTypes = {
  value: PropTypes.number.isRequired
};


export default AttributeBadge;