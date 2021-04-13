import React, { useState, useEffect } from 'react';
import styles from './Sales.module.css';



/**
 * Report
 * Returns the Sales Report of all orders 
 *
 * @param {object} props.order redux state passed down through the props
 * @return {JSX} returns table of sales report
 */
export function Report(props) {

  const [orders, setOrders] = useState({});

  useEffect(() => {
    setOrders(props.orders)
  });

  //Returns sales table
  const getSaleReport = () => {
    let totalRevenue = 0;
    let totalRefunded = 0;
    let totalSales = 0;
    let donutCount = 0;
    let donuts = {};

    //Loops through all orders to get
    //Total Donuts, Refunds, and Sales
    Object.keys(orders).map((id) => {
      totalSales += orders[id].Total;
      if (!orders[id].Refunded) {
        Object.keys(orders[id].Order).map((donut) => {
          if (donut in donuts) {
            donuts[donut] += orders[id].Order[donut]
          } else {
            donuts[donut] = orders[id].Order[donut]
          }
          donutCount += orders[id].Order[donut]
        })
      } else {
        totalRefunded += orders[id].Total;
      }
    })
    totalRevenue = totalSales - totalRefunded;

    return (
      <>
      <table className={styles.width}>
        <th>Donuts</th><th>Quantity Sold</th>
        { Object.keys(donuts).map((key) => {
          return <tr><td>{key}</td><td> {donuts[key]}</td></tr>
        })
        }
        <tr><td>Total Donuts Sold</td><td>{donutCount}</td></tr>
        </table>
        <h1 className={styles.h1}>Today's Sales</h1>
        <table className={styles.width}>
        <tr><td>Total Sales</td><td>$ {totalSales.toFixed(2)}</td></tr>
        <tr><td>Refunds</td><td>$  -{totalRefunded.toFixed(2)}</td></tr>
        <tr><td>Revenue</td><td>$  {totalRevenue.toFixed(2)}</td> </tr>
      </table>
      </>

    )
  }

  return (
    <div className={styles.row}>
      <div>
        Sales Report:
        {getSaleReport()}
      </div>
    </div>
  );
}
