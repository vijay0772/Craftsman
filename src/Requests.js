import React, { useEffect, useState } from 'react';
import './Requests.css';
import './style.css';
import { Link } from 'react-router-dom';

function Requests() {
  // Mock data for service requests
  // Update the serviceRequests state with five additional entries
const [serviceRequests, setServiceRequests] = useState([
    {
      id: 1,
      status: 'pending',
      serviceType: 'Plumbing Repairs',
      customerName: 'Test',
      customerAddress: '123 Main St, Cityville, State',
    },
    {
      id: 2,
      status: 'done',
      serviceType: 'Electrical Services',
      customerName: 'Jemis',
      customerAddress: '456 Oak St, Townsville, State',
    },
    {
      id: 3,
      status: 'pending',
      serviceType: 'HVAC Maintenance',
      customerName: 'Ruchit',
      customerAddress: '789 Pine St, Villagetown, State',
    },
    {
      id: 4,
      status: 'done',
      serviceType: 'Roofing Repairs',
      customerName: 'Vijay',
      customerAddress: '101 Maple St, Hamletville, State',
    },
    {
      id: 5,
      status: 'pending',
      serviceType: 'House Cleaning',
      customerName: 'Manager',
      customerAddress: '202 Cedar St, Suburbia, State',
    },
    {
      id: 6,
      status: 'done',
      serviceType: 'Carpet Cleaning',
      customerName: 'Test2',
      customerAddress: '303 Elm St, Countryside, State',
    },
    {
      id: 7,
      status: 'pending',
      serviceType: 'Window Cleaning',
      customerName: 'Test1',
      customerAddress: '404 Birch St, Riverside, State',
    },
    {
      id: 8,
      status: 'done',
      serviceType: 'Deep Cleaning',
      customerName: 'Test3',
      customerAddress: '505 Fir St, Mountainview, State',
    },
    
  ]);
  
  // ... (rest of the component remains the same)
  

  // useEffect to simulate fetching data from an API
  useEffect(() => {
    // You can make an API call here to fetch real service request data
    // and update the state using setServiceRequests.
    // For now, we'll use mock data.
  }, []); // empty dependency array means it runs once when the component mounts

  return (
    <div style={{paddingTop:'200px'}} className="requests-container">
      <h2>Service Requests</h2>
      {serviceRequests.map((request) => (
        <div key={request.id} className={`request-item ${request.status}`}>
          <h3>{request.serviceType}</h3>
          <p>
            Customer Name: {request.customerName}
            <br />
            Customer Address: {request.customerAddress}
            <br />
            Status: {request.status === 'pending' ? 'Pending' : 'Done'}
          </p>
        </div>
      ))}
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default Requests;
