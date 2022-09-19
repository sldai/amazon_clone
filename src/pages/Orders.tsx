import { collection, doc, getDoc, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../app/hooks';
import Order from '../components/Order';
import { db } from '../features/firebase';
import './Orders.css';

function Orders() {
  const { user } = useAppSelector((state) => state.auth);
  const [orders, setOrders] = useState([] as any[]);
  useEffect(() => {
    if (user) {
      onSnapshot(
        query(collection(db, 'users', user.id, 'orders'), orderBy('created', 'desc')),
        (snapshot) => {
          setOrders(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
        }
      );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className='orders'>
      <h1>Your Orders</h1>
      {orders.map((order, index) => (
        <Order key={index} order={order}/>
      ))}
    </div>
  );
}

export default Orders;
