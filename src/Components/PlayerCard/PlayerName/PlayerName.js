import React from 'react';
import PropTypes from 'prop-types';
import './PlayerName.css';

const PlayerName = (props) => {
    return (
      <div className="content">
          <p className="name-tag">name</p>
          <p className="name">{props.name}</p>
        </div>
    );
}

PlayerName.propTypes = {
  name: PropTypes.string.isRequired
};


export default PlayerName;