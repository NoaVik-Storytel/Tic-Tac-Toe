import React from 'react';
import '../index.css';

export function SelectionSquare(props) {
    return (
      <button className="selsquare" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }