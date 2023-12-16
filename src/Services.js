import React, { useEffect, useState } from 'react';
import "./Services.css";
import "./style.css";
import {Link } from 'react-router-dom';

function Services() {
    const buttonStyle = {
        // Your button styles here
        color: 'white',
      };
      const ServiceCard = ({ image, title, description, linkTo }) => {
        const cardStyle = {
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '200px', // Set the height of each card
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        };
      
        return (
          <div className="lg:w-1/3 md:w-1/2 p-12">
            <div
              className="bg-gray-100 p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:shadow-lg hover:brightness-150"
              style={{ ...cardStyle, flex: '1 0 calc(25% - 2rem)' }}
            >
              <h1 style={{ fontSize: '1.3em', fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
                {title}
              </h1>
              <br />
              <Link
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full"
                to={linkTo}
                style={buttonStyle}
              >
                View more
              </Link>
            </div>
          </div>
        );
      };
      
      
      
      return (
        
        <div style={{ paddingTop: '100px' }}>
          <section  class="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center items-center flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-5xl text-4xl font-bold title-font mb-2 text-gray-900 text-center hover:text-red-500 transition duration-300 ease-in-out">
          Our Services Category
        </h1>
        <hr></hr>
      </div>
    </div>
    
    <div className='container ml-108 mr-108 px-12 '>
  <div className='row'>
    <div className="flex flex-wrap -m-0">
                {/* Add ServiceCard components for each service */}
                <ServiceCard
                  image="/images/homeservice.jpg"
                  title="Home Maintenance:"
                  description="Description for Service 1."
                  linkTo="/HomeMaintenance"
                />
                <ServiceCard
                  image="/images/cleaningservice.jpg"
                  title="Cleaning Services"
                  description="Description for Service 2."
                  linkTo="/CleaningServices"
                />
                <ServiceCard
                  image="/images/gardning.jpg"
                  title="Landscaping and Gardening"
                  description="Description for Service 2."
                  linkTo="/HomeMaintenance"
                />
                <ServiceCard
                  image="/images/remodeling.jpg"
                  title="Remodeling and Renovation"
                  description="Description for Service 2."
                  linkTo="/HomeMaintenance"
                />
                <ServiceCard
                  image="/images/apprepair.jpg"
                  title="Appliance Repair"
                  description="Description for Service 2."
                  linkTo="/HomeMaintenance"
                />
                <ServiceCard
                  image="/images/interior.jpg"
                  title="Interior Design"
                  description="Description for Service 2."
                  linkTo="/HomeMaintenance"
                />
                <ServiceCard
                  image="/images/sercurity.jpg"
                  title="Home Security"
                  description="Description for Service 2."
                  linkTo="/HomeMaintenance"
                />
                <ServiceCard
                  image="/images/moving.jpg"
                  title="Moving and Storage"
                  description="Description for Service 2."
                  linkTo="/CleaningServices"
                />
                <ServiceCard
                  image="/images/pest.jpg"
                  title="Pest Control"
                  description="Description for Service 2."
                  linkTo="/CleaningServices"
                />
                <ServiceCard
                  image="/images/handyman.jpg"
                  title="Handyman Services"
                  description="Description for Service 2."
                  linkTo="/HomeMaintenance"
                />
                <ServiceCard
                  image="/images/tech.jpg"
                  title="Tech Support"
                  description="Description for Service 2."
                  linkTo="/CleaningServices"
                />
                <ServiceCard
                  image="/images/personal.jpg"
                  title="Personal Assistance"
                  description="Description for Service 2."
                  linkTo="/CleaningServices"
                />
                {/* Add more ServiceCard components for other services */}
              </div>
        </div>
    </div>
              
              
            </div>
          </section>
        
          </div>
        
      );
}

export default Services;