import React, { useState, useEffect } from 'react';
import { Order } from './Order';
import { Report } from './Report';
import styles from './Sales.module.css';
import { Link, Route, Switch, useParams } from "react-router-dom";


/**
 * Sales
 * Returns the Sales Container
 *
 * @param {object} props.order redux state passed down through the props
 * @param {function} props.getRefund Threads to Home.js postRefund Function
 * @return {JSX} returns table of sales report
 */
export function Sales(props) {

  const [orders, setOrders] = useState({});

  useEffect(() => {
    setOrders(props.orders)
  });

  const getRefund = (id) => {
    props.getRefund(id);
  }

  return (
    <div className={styles.row}>
      <div >
        <h1 className={styles.h1}>orders links:</h1>
        <div className={styles.border_bottom}>
          {
            Object.keys(orders).map((key) => {
              let url = "/sales/order/" + orders[key].Id;
              return (
                <>
                  <Link className={styles.orders} to={url} >{orders[key].Id}</Link>
                </>
              )
            })
          }
        </div>
        <Switch>
          <Route path="/sales/order/:id" >
            <Order getRefund={getRefund} order={orders} />
          </Route>
        </Switch>
      </div>
      <div>
        <Report orders={props.orders} />
      </div>
    </div>
  );
}
