import React from 'react';
import '../index.css';
import propTypes from 'prop-types';

export default function Square(props) {
  const { onClick } = props;
  const { value } = props;
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
}

Square.propTypes = {
  onClick: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};
