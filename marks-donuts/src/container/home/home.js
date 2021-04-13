
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Inventory } from '../inventory/Inventory';
import { Route } from 'react-router-dom';
import { Pos } from '../pos/Pos';
import { Sales } from '../sales/Sales';
import {
  getDonuts,
  getOrders,
  selectDonuts,
  selectOrders,
  postDonut,
  postOrder,
  postRefund
} from './homeSlice';


/**
 * Home
 * The home base for all the api's from this container
 *  all props are passed down to child containers and functions
 *
 * @return {JSX} returns Home Page of Donut Shop
 */
export function Home() {

  const serverDonuts = useSelector(selectDonuts);
  const serverOrders = useSelector(selectOrders);
  const dispatch = useDispatch();

  const [donuts, setDonuts] = useState({});
  const [orders, setOrders] = useState({});


  useEffect(() => {
    setDonuts(serverDonuts)
    setOrders(serverOrders)
  });

  useEffect(() => {
    getDonutsAPI()
    getOrdersAPI()
  }, []);

  const donutsAPI = (value) => {
    dispatch(postDonut(value));
    setDonuts(serverDonuts);
  };

  const ordersAPI = (order) => {
    dispatch(postOrder(order));
    setTimeout(() => getOrdersAPI(), 1500);

  };
  const refundAPI = (order) => {
    dispatch(postRefund(order));
    setTimeout(() => getOrdersAPI(), 1500);

  };
  const getOrdersAPI = () => {
    dispatch(getOrders());
    setOrders(serverOrders);

  };
  const getDonutsAPI = () => {
    dispatch(getDonuts());
    setDonuts(serverDonuts);

  };



  return (
    <>
      <Route path="/inventory">
        <Inventory donuts={donuts} updateDonut={donutsAPI} />
      </Route>
      <Route path="/pos">
        <Pos donuts={donuts} completeOrder={ordersAPI} />
      </Route>
      <Route path="/sales">
        <Sales orders={orders} changeValue={ordersAPI} getRefund={refundAPI} />
      </Route>
    </>
  );
}

