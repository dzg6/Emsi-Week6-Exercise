import React, { useState, useEffect } from 'react';
import styles from './EditDonuts.module.css';


//Very Rough and needs polishing
export function EditDonuts(props) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [inventory, setInventory] = useState('');
  const [editState, setEditState] = useState(false);

  useEffect(() => {
    setName(props.donutProp.Name);
    setPrice(props.donutProp.Price.toFixed(2));
    setInventory(props.donutProp.Inventory);
  }, [props]);


  function cancelButton() {
    setName(props.donutProp.Name);
    setPrice(props.donutProp.Price.toFixed(2));
    setInventory(props.donutProp.Inventory);
    setEditState(false);
  }

  function updateButton(method) {
    props.updateDonut({
      Id: props.donutProp.Id,
      Name: name,
      Price: Number(price),
      Inventory: Math.round(Number(inventory)),
      method: method
    })
    setEditState(false);
  }
  function editStateSwitch() {
    editState === true ? setEditState(false) : setEditState(true);
  }


  return (
    <div className={styles.div}>
      <ul>
        {editState === true ?
          <>
            <li>Name: <input placeholder={name} value={name} type="text" onChange={(e) => setName(e.target.value)} /></li>
            <li>Price: <input placeholder={price} value={price} type="number" step="0.01" onChange={(e) => setPrice(e.target.value)} /></li>
            <li>Inventory: <input placeholder={inventory} value={inventory} type="number" step="1" onChange={(e) => setInventory(e.target.value)} /></li>
            <li><button onClick={() => updateButton('POST')} >
              Update
        </button></li>
            <li><button onClick={() => updateButton('DELETE')} >
              Delete
        </button></li>
            <li><button onClick={() => cancelButton()} >
              Cancel
        </button></li>
          </>
          :
          <>
            <li>{name}</li>
            <li>Price: {price}</li>
            <li>Inventory: {inventory}</li>
            <li><button onClick={() => editStateSwitch()} >
              Edit Donut
      </button></li>
          </>
        }
      </ul>

    </div>
  );
}


