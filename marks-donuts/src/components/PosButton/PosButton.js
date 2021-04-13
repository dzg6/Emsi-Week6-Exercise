import React, { useState, useEffect } from 'react';
import styles from './PosButton.module.css';

export function PosButton(props) {
  const [purchased, setPurchased] = useState(0);

  const buttonClick = (e) => {
    console.log('ppp')
    props.updateOrder(props.donut.Name)
  }

  useEffect(() => {

    if (props.purchased) {
      setPurchased(props.purchased)
    } else {
      setPurchased(0)
    }

  });

  return (
    <div>
      {/* This line does 2 checks, one for + or - and then the proper check to turn button on and off based on purchase and inventory */}
      {(props.donut.Inventory > purchased && props.symbol === '+') || (props.symbol === '-' && 0 < purchased) ?
        <button onClick={buttonClick}>
          {props.symbol + " " + props.donut.Name}
        </button>
        : <button onClick={buttonClick} disabled>
          {props.symbol + " " + props.donut.Name}
        </button>
      }

    </div>
  );
}


