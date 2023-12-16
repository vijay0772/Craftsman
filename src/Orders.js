import React, { useState, useEffect } from 'react';
import './Orders.css'; // Import your CSS file for styling

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/getOrders');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  return (
    <div style={{ paddingTop: '180px' }} className="orders-container">
      <h1>Customer Orders</h1>
      {orders.length > 0 ? (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User Name</th>
              <th>Order Name</th>
              <th>Order Price</th>
              <th>User Address</th>
              <th>Credit Card No</th>
              <th>Delivery Method</th>
              <th>Store Location</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.OrderId}>
                <td>{order.OrderId}</td>
                <td>{order.userName}</td>
                <td>{order.orderName}</td>
                <td>${order.orderPrice.toFixed(2)}</td>
                <td>{order.userAddress}</td>
                <td>{order.creditCardNo}</td>
                <td>{order.deliveryMethod}</td>
                <td>{order.storeLocation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2>No orders available.</h2>
      )}
    </div>
  );
};

export default Orders;
