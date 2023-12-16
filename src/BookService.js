import React, { useState } from 'react';
import "./BookService.css";
import "./style.css";
import { Link } from 'react-router-dom';

function BookService() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const buttonStyle = {
    // Your button styles here
    padding: '10px',
    margin: '5px',
    color: 'white',
    backgroundColor: 'Green',
    borderRadius: '5px',
    display: 'inline-block',
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Form submitted with data:', formData);
    // You can add logic to send the form data to your backend or perform any other actions
  };

  return (
    <div style={{ paddingTop: '150px' }} className="container p-12">
      <div className="row">
        <div className="col-md-6">
          <div className="card bg-gray-200 shadow-lg p-12">
            <div className="card-body">
            <h1 style={{ fontSize: '1.3em', fontWeight: 'bold' }}><h1 className="card-title">Book an Appointment</h1></h1>

              <form className="appointment-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="date">Date:</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="time">Time:</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address:</label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Link className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full" type='submit' to="/Thankyou" style={buttonStyle}>Confirm Appoinment</Link>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6 " >
      <div className="card bg-gray-200 shadow">
        <div className="card-body shadow-lg p-12">
          <h1 className="card-title">Order Summary</h1>

          <h1 style={{ fontSize: '1.3em', fontWeight: 'bold' }}>Items (1):</h1>
          <p >$99.99/h</p>

          <h1 style={{ fontSize: '1.3em', fontWeight: 'bold' }}>Shipping & handling:</h1>
          <p>$16.19</p>

          <h1 style={{ fontSize: '1.3em', fontWeight: 'bold' }}>Total before tax:</h1>
          <p>$6.17</p>

          <h1 style={{ fontSize: '1.3em', fontWeight: 'bold' }}>Estimated tax to be collected:</h1>
          <p>$1.74</p>

          <h1 style={{ fontSize: '1.3em', fontWeight: 'bold', color: 'green' }}>Order total:</h1>
          <p>$124.09</p>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default BookService;
