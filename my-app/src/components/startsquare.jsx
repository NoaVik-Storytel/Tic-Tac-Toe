import React from 'react';
import '../index.css';
import propTypes from 'prop-types';

export default function StartSquare(props) {
  const { onClick } = props;
  const { value } = props;
  return (
    <button type="button" className="startSquare" onClick={onClick}>
      {value}
    </button>
  );
}

StartSquare.propTypes = {
  onClick: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};
