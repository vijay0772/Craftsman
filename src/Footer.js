import React from 'react';
import logo from './gh.png';
const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5" style={{ backgroundColor: 'black', color:'white' }}>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
      <img src={logo} alt="Smart Homes Logo" style={{ width: 'auto', height: 'auto' }} />
        <p>
            Welcome to Home Hub, your trusted partner for all things home-related. <br></br>At Home Hub, we believe in creating a seamless and enjoyable experience for homeowners, offering a variety of services and resources to enhance your living spaces.
            <br></br>
            Feel the warmth of home with Home Hub!
        </p>
        
      </div>
      <div className="col-md-4">
      
      </div>
      <div className="col-md-4">
      <h2 className="sm:text-5xl text-4xl font-bold title-font mb-2 text-white-900 text-center hover:text-red-500 transition duration-300 ease-in-out" style={{ fontSize: '25px'}}>Visit Us</h2>
  
  <iframe
    title="IIT Chicago Location"
    width="100%"
    height="300"
    frameborder="0"
    style={{ border: 0 }}
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.4388470308125!2d-87.62756958456482!3d41.83472927922954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cc4c07d8c97%3A0x42f6dbbccdff1a1a!2sIllinois%20Institute%20of%20Technology!5e0!3m2!1sen!2sus!4v1671693528703!5m2!1sen!2sus"
    allowfullscreen
  ></iframe>
      </div>
    </div>
    <hr style={{ borderColor: '#555' }} />
    <div className="row mt-4">
      <div className="col-12 text-center">
        <p>&copy; 2023 Craftsman Service. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>

  
  );
};

export default Footer;
