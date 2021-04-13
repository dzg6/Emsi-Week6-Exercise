import React, { useState, useEffect } from 'react';
import styles from './Inventory.module.css';
import { EditDonuts } from '../../components/EditDonuts/EditDonuts'; //Create donuts element
import { CreateDonut } from '../../components/createDonut/CreateDonut'; // Update Donuts element



/**
 * Inventory
 * Returns Inventory Container allowing user to
 *  create and update donuts, price, and inventory
 *
 * @param {object} props.donuts redux state passed down through the props
 * @param {function} props.updateDonut Threads to Home.js createOrder Function
 * @return {JSX} returns Inventory Container
 */export function Inventory(props) {


  useEffect(() => {
    setDonuts(props.donuts)
  });

  const [donuts, setDonuts] = useState({});

  const updateDonut = (donut) => {
    props.updateDonut(donut)
  }

  return (
    <div>
      <div className={styles.column}>

          <CreateDonut updateDonut={updateDonut} />
          <div className={styles.row}>
          {
            Object.keys(donuts).map((key) => {
              return (
                <EditDonuts donutProp={donuts[key]} updateDonut={updateDonut} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
