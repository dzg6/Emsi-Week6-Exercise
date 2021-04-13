import React, { useState } from 'react';
import styles from './CreateDonut.module.css';

export function CreateDonut(props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0.99);
    const [inventory, setInventory] = useState(12);

  function updateButton(){
    if(name != '' || null){
    props.updateDonut({
      Name: name,
      Price: Number(price),
      Inventory: Number(inventory),
      method: 'POST'
    })
    setName('');
    setPrice('.99');
    setInventory('12');
    }
  }

  return (
    <div className={styles.div}>
      <ul>
    <li>Name: <input placeholder="Create New" value={name} type="text" onChange={(e) => setName(e.target.value)} /></li>
    <li>Price: <input placeholder=".99" value={price} type="number" step="0.01" onChange={(e) => setPrice(e.target.value)}/></li>
    <li>Inventory: <input placeholder="12" value={inventory} type="number" step="1" onChange={(e) => setInventory(e.target.value)} /></li>
    <li><button onClick={() => updateButton() } > 
          Create New
        </button></li>
</ul>

    </div>
  );
}


