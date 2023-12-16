import React, { useEffect, useState } from 'react';
import './Home.css'; // Import your CSS file for styling
import mainImg from './mainImg.jpg';
import {Link} from 'react-router-dom'
import logo from './logo2.png'
import center from './dealdone.jpg'

function Thankyou() {
    const buttonStyle = {
        // Your button styles here
        padding: '10px',
        margin: '5px',
        color: 'white',
        backgroundColor: 'Green',
        borderRadius: '5px',
        display: 'inline-block',
      };
    const containerStyle = {
        maxWidth: '600px',
        margin: 'auto',
        textAlign: 'center',
        paddingTop: '50px',
      };
      
      const headingStyle = {
        fontSize: '2em',
        color: '#FFF',
      };
      
      const paragraphStyle = {
        fontSize: '1.1em',
        color: '#B2B2B2',
        marginBottom: '20px',
      };
      
    return (
    <div id="content" style={{ paddingTop: '100px' }} className="content-container">
      

      <div className="post">
      <div className="entry" style={{ position: 'relative' }}>
  <div>
    <img src={center} alt="Smart Homes Logo" className="" style={{ width: '100%', height: '100%' ,filter: 'grayscale(0%)',opacity: '0.9'}} />
  </div>
  <div id="text-overlay" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', background: 'rgba(0, 0, 0, 0.8)',borderRadius: '10px',
  boxShadow: '0 40px 80px rgba(0, 0, 0, 0.9)', padding: '20px', borderRadius: '10px' }}>
    <div style={containerStyle}>
      <h2 style={headingStyle}>Thank You for Booking Our Service!</h2>
      <br></br>
      <h2 style={paragraphStyle}>Your Order Id is : <span style={{ color: 'green' }}>7SxnqC8Y8G</span></h2>
      <p style={paragraphStyle}>
        Your booking has been received, and we appreciate the opportunity to serve you. Our team is working diligently to ensure everything is in order.
      </p>
      <p style={paragraphStyle}>
        What's Next? We will review your booking details and get back to you with a confirmation and any additional updates. Our goal is to make sure your experience with our service is seamless and meets your expectations.
      </p>
      <p style={paragraphStyle}>
        Stay Connected! In the meantime, if you have any questions or need further assistance, feel free to reach out to our customer support team at info@craftsman.com.
      </p>
      <p style={paragraphStyle}>
        We look forward to providing you with excellent service!
      </p>
      <Link className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full" to="/" style={buttonStyle}>Home</Link>
    </div>  
   
  </div>
  <div class="container">
    {/* Your other content goes here */}
  </div>
</div>

      </div>




    </div>
    );
}

export default Thankyou;