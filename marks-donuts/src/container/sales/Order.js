import React, { useState, useEffect } from 'react';
import styles from './Sales.module.css';
import { useParams } from "react-router-dom";
import { RefundButton } from '../../components/RefundButton/RefundButton';


/**
 * Order
 * Returns the Sales Report of ndividual orders
 * You can also refund orders from these tables
 *
 * @param {object} props.order redux state passed down through the props
 * @param {function} props.getRefund Threads to Home.js postRefund Function
 * @return {JSX} returns table of individual orders report
 */
export function Order(props) {
  const [order, setOrder] = useState({});
  const [total, setTotal] = useState('')
  const [donuts, setDonuts] = useState({})
  const [refunded, setRefunded] = useState(false)

  let { id } = useParams();

  useEffect(() => {
    if (props.order) {
      setOrder(props.order[id])
      if (order) {
        setTotal(order.Total);
        setDonuts(order.Order);
        setRefunded(order.Refunded);
      }
    }

  });
  const getOrder = () => {
    let rows = []
    if (donuts) {
      Object.keys(donuts).map((key) => {
        rows.push(<tr><td> {key} </td><td> {donuts[key]} </td></tr>)

      })
    }
    return rows
  }

  function getRefund(value) {
    props.getRefund(value);
  }

  return (
    <div>
      <h1 className={styles.h1}>Order ID: {id}</h1>
      <table className={styles.width} >
        <tr><th>Donuts</th><th>Quantity</th></tr>
        {getOrder()}
      </table>
      <h1 className={styles.h1}>Sales</h1>
      <table className={styles.width} >
        <tr><td>Total</td><td>${Number(total).toFixed(2)}</td></tr>
        <tr><td>Refunded</td><td>{refunded === false ? 'false' : 'true'}</td></tr>
      </table>
      <div><RefundButton id={id} getRefund={getRefund} refund={refunded} /></div>
    </div>
  );
}


