import React from 'react';
import '../index.css';
import propTypes from 'prop-types';

export default function SelectionSquare(props) {
  const { onClick } = props;
  const { value } = props;
  return (
    <button type="button" className="selsquare" onClick={onClick}>
      {value}
    </button>
  );
}

SelectionSquare.propTypes = {
  onClick: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};
