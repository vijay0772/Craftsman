// OrderConfirmation.js
import React, { useEffect, useState } from 'react';
import { Link,useParams } from 'react-router-dom';
import './OrderConfirmation.css'

function OrderConfirmation() {
  let {orderId} = useParams();
  return (
    <div  className="order-confirmation-container" style={{textAlign:'center !important',paddingTop: '180px'}}>
      <h1 >Order Confirmation</h1>
      <h3 style={{paddingTop:'2%'}}>Your order with ID {orderId} has been placed successfully!</h3>
      <h3 style={{paddingBottom:'2%'}}>Thank you for shopping with us.</h3>
      <Link to="/">
        <button style={{background:'red'}}>Home</button>
      </Link>
    </div>
  );
}

export default OrderConfirmation;

