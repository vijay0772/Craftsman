
import React, { useEffect, useState } from 'react';
import "./HomeMaintenance.css";
import "./style.css";
import {Link } from 'react-router-dom';

function HomeMaintenance() {
    const [showForm, setShowForm] = useState(false);

  // Function to handle the "Book Now" button click
  const handleBookNow = () => {
    setShowForm(true);
  };

  // Function to handle the form close
  const handleCloseForm = () => {
    setShowForm(false);
  };
    const buttonStyle = {
        // Your button styles here
        padding: '10px',
        margin: '5px',
        textDecoration: 'none',
        color: 'white',
        backgroundColor: 'green',
        borderRadius: '5px',
        display: 'inline-block',
      };
      const ServiceCard = ({ image, title, description, linkTo, details, price }) => {
        return (
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:shadow-lg hover:brightness-110">
              <img className="h-50 w-50 rounded object-center mb-6" src={image} alt="content" />
              <h1 style={{ fontSize: '1.3em', fontWeight: 'bold' }}>{title}</h1>
              <br></br>
              <h1 style={{ fontSize: '1.3em' }}>
                <p>{description}</p>
                <br></br>
                {details && <p>Details: {details}</p>}
                <br></br>
                {price && <p style={{ color: 'green' }}>Price: {price}</p>}
              </h1>
              <br></br>
              <Link className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full" to={linkTo} style={buttonStyle}>Book now</Link>
            </div>
          </div>
        );
      };
      
      
      
      
      
      return (
        
        <div style={{ paddingTop: '100px' }}>
          <section  class="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center items-center flex-wrap w-full mb-20">
      <div className="xl:w-1/4 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-5xl text-4xl font-bold title-font mb-2 text-gray-900 text-center hover:text-red-500 transition duration-300 ease-in-out">
        Home Maintenance
        </h1>
        <hr></hr>
      </div>
    </div>
    
    
    <div className="flex flex-wrap -m-6">
                {/* Add ServiceCard components for each service */}
                <ServiceCard
  image="/images/plumbing.jpg"
  title="Plumbing repairs"
  description="Professional plumbing services for your home."
  linkTo="/BookService"
  details="Includes pipe repairs, installations, and maintenance."
  price="$99.99 per hour"
/>
<ServiceCard
  image="/images/electrical.jpg"
  title="Electrical services"
  description="Expert electrical services to keep your home powered."
  details="Troubleshooting, installations, and electrical upgrades."
  price="$129.99 per hour"
/>
<ServiceCard
  image="/images/acvalo.jpg"
  title="HVAC maintenance"
  description="Keep your HVAC system in top condition with our maintenance services."
  details="Regular checkups, filter replacements, and system optimization."
  price="$89.99 per service"
/>
<ServiceCard
  image="/images/roof.jpg"
  title="Roofing repairs"
  description="Professional roofing repairs for leaks and damage."
  details="Shingle replacements, leak detection, and roof inspections."
  price="Starting at $199.99"
/>

                {/* Add more ServiceCard components for other services */}
              </div>
        </div>
       
              
           
          </section>
        
          </div>
        
      );
}

export default HomeMaintenance;