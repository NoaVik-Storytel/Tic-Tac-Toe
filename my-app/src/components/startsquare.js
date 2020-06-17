import React from 'react';
import '../index.css';

export function StartSquare(props) {
    return (
      <button className="startSquare" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }