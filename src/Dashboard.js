import React, { useEffect, useState } from 'react';
import "./style.css";
import {Link } from 'react-router-dom';

function Dashboard() {
    const DashboardServiceCard = ({ image, title, description, linkTo }) => {
        return (
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:shadow-lg hover:brightness-110">
              <img className="h-40 rounded w-full object-center mb-6" src={image} alt="content" />
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{title}</h2>
              <p  className="leading-relaxed text-base">{description}</p>
              <Link className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full" to={linkTo} style={buttonStyle}>{title}</Link>
              
            </div>
          </div>
        );
      };
      const buttonStyle = {
        // Your button styles here
        padding: '10px',
        margin: '5px',
        textDecoration: 'none',
        color: 'white',
        backgroundColor: 'blue',
        borderRadius: '5px',
        display: 'inline-block',
      };


    return (
        <section style={{ paddingTop: '100px' }} className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-center items-center flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-5xl text-4xl font-bold title-font mb-2 text-gray-900 text-center hover:text-red-500 transition duration-300 ease-in-out">
              Dashboard Services
            </h1>
            <hr ></hr>
          </div>
        </div>
        
        <div class="flex flex-wrap -m-6">
        {/* Buttons or Cards for Dashboard */}
        <DashboardServiceCard
            image="/images/datavisualization.jpg"
            title="Data Visualization"
            linkTo="/DataVisualization"
          />
          <DashboardServiceCard
            image="/images/dataanalytics.jpg"
            title="Data Analytics"
            linkTo="/DataAnalytics"
          />
          <DashboardServiceCard
            image="/images/employees.jpg"
            title="Manage Employees"
            linkTo="/ManageEmployees"
          />
          <DashboardServiceCard
            image="/images/inventoryreport.jpg"
            title="Inventory Report"
            linkTo="/InventoryReport"
          />
          <DashboardServiceCard
            image="/images/addproduct.jpg"
            title="Add Product"
            linkTo="/AddProduct"
          />
          <DashboardServiceCard
            image="/images/trending.jpg"
            title="Trending"
            linkTo="/trending"
          />
        </div>
      </div>
    </section>
    )
  }

  export default Dashboard;