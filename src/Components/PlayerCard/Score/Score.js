import React from 'react';
import PropTypes from 'prop-types';
import './Score.css';

const Score = (props) => {
    return (
        <p className="score"> {props.score}</p> 
    );
}


Score.propTypes = {
  score: PropTypes.number.isRequired
};

export default Score;