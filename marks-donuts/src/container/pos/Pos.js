import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  increment, decrement, selectQuantity, selectOrder, selectTotal, clearOrder } from './posSlice';
import { PosButton } from '../../components/PosButton/PosButton';
import styles from './Pos.module.css';

/**
 * POS
 * Returns POS Container allowing user to
 *  place orders.
 *
 * @param {object} props.donuts redux state passed down through the props
 * @param {function} props.completeOrder Threads to Home.js createOrder Function
 * @return {JSX} returns POS container
 */
export function Pos(props) {
  const quantity = useSelector(selectQuantity);
  const orderSelector = useSelector(selectOrder);
  const totalSelector = useSelector(selectTotal);
  const dispatch = useDispatch();
  const [donuts, setDonuts] = useState({});
  const [order, setOrder] = useState(orderSelector);
  const [orderTotal, setOrderTotal] = useState(0);


  useEffect(() => {
    setDonuts(props.donuts)
    setOrder(orderSelector)
    setOrderTotal(totalSelector.toFixed(2))
    });

    const incrementDonut = (value) => {
      dispatch(increment(donuts[value]))

    }
    const decrementDonut = (value) => {
      dispatch(decrement(donuts[value]))

    }
    const getDonutTotal = (price, total) => {
      return total ? Number(price * total).toFixed(2) : 0;
    }

    const completeOrder = () =>{
      if(quantity > 0 ){
      props.completeOrder({order: order, total: orderTotal})
      dispatch(clearOrder())
      }
      
    }

  return (
    <div>
      <div className={styles.row}>
      {
          Object.keys(donuts).map((key)=>{
            return (
              <div className={styles.donut}>
              <PosButton donut={donuts[key]} purchased={order[key]} updateOrder={incrementDonut} symbol="+"/>
              <PosButton donut={donuts[key]} purchased={order[key]} updateOrder={decrementDonut} symbol="-"/>
              </div>
              )
          })
        }  
      </div>
      <div className={styles.row}>

        <table>
          <tr><th>Donut</th><th>amount</th><th></th><th>Total Cost</th></tr>
          {
        Object.keys(donuts).map((key)=>{
            return (
              <tr><td>{donuts[key].Name}</td><td> x </td><td>{order[key] ? order[key] : 0}</td><td> = </td><td>{getDonutTotal(donuts[key].Price, order[key])}</td></tr>
          )
        })}
        </table>
        <div className={styles.block}>
          Order Total: {orderTotal}
          <div>
        <button onClick={completeOrder}> Complete Order</button></div>
        </div>
        <br />

      </div>
    </div>
  );
}
