// Cart.js
import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';
import Recommendations from './Recommendations'; // Assuming you have a Recommendations component


function Cart() {
  const { cart, removeFromCart } = useCart();
console.log(cart)
  // const calculateTotalPrice = () => {
  //   return cart.reduce((total, product) => {
  //     return total + product.productPrice * product.quantity;
  //   }, 0);
  // };
  const calculateTotalPrice = () => {
    return parseFloat(cart.reduce((total, product) => {
      return total + product.productPrice * product.quantity;
    }, 0).toFixed(2));
  };
  

  return (
    <div style={{ paddingTop: '180px' }} className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <h3>Your cart is empty.</h3>
      ) : (<>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product, index) => (
              <tr key={index}>
                <td>{product.productName}</td>
                <td><img src={`/images/${product.productImage}`} style={{ width: '100px',     margin: '0 auto' }}></img></td>
                <td>${product.productPrice}</td>
                <td>{product.quantity}</td>
                <td>${product.productPrice * product.quantity}</td>
                <td>
  <button
    onClick={() => removeFromCart(product.productName)}
    style={{ backgroundColor: 'red', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="white" // Change this to set the color of the trash can icon
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-10 h-10"
      viewBox="0 0 24 24"
    >
      <path d="M3 6h18M15 2H9a2 2 0 00-2 2v14a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2zM10 11v7M14 11v7" />
    </svg>
  </button>
</td>


              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">Total:</td>
              <td>${calculateTotalPrice()}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
          <div>
          <Link to="/checkout">
            <button>Checkout</button>
          </Link>
        </div>
        </>
      )}

    </div>
  );
}

export default Cart;
