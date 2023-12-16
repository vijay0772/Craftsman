
import React, { useEffect, useState } from 'react';
import "./HomeMaintenance.css";
import "./style.css";
import {Link } from 'react-router-dom';

function CleaningServices() {
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
        Cleaning Services
        </h1>
        <hr></hr>
      </div>
    </div>
    
    
    <div className="flex flex-wrap -m-6">
                {/* Add ServiceCard components for each service */}
                <div className="flex flex-wrap -m-6">
  {/* Add ServiceCard components for each service */}
  <ServiceCard
    image="/images/mat.jpg"
    title="Carpet cleaning"
    description="Revitalize your carpets with our professional cleaning services."
    details="Deep cleaning, stain removal, and odor elimination."
    linkTo="/BookService"
    price="$189.99 per hour"
  />
  <ServiceCard
    image="/images/windowclean.jpg"
    title="Window cleaning"
    description="Achieve crystal-clear windows with our expert cleaning team."
    details="Interior and exterior window cleaning, screen cleaning."
    price="$129.99 per hour"
  />
  <ServiceCard
    image="/images/deepclean.jpg"
    title="Deep cleaning"
    description="Transform your living spaces with our thorough deep cleaning services."
    details="Floor-to-ceiling cleaning, sanitization, and organization."
    price="$809.99 per service"
  />
  <ServiceCard
    image="/images/houseclean.jpg"
    title="House cleaning"
    description="Maintain a spotless home with our professional house cleaning services."
    details="Regular cleaning, vacuuming, dusting, and surface disinfection."
    price="$199.99 per service"
  />
</div>


                {/* Add more ServiceCard components for other services */}
              </div>
        </div>
       
              
           
          </section>
        
          </div>
        
      );
}

export default CleaningServices;