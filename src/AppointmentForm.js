import React, { useState } from 'react';

const AppointmentForm = ({ onClose }) => {
  const [appointmentTime, setAppointmentTime] = useState('');
  const [address, setAddress] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with form data (e.g., send to server, store in state, etc.)
    // You can add your logic here based on the form data
    // After submitting, you might want to close the form
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Book Appointment</h2>
        <form onSubmit={handleSubmit}>
          {/* Add your form fields */}
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-semibold mb-2">
              Appointment Time
            </label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-semibold mb-2">
              Address
            </label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-semibold mb-2">
              Appointment Date
            </label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
            />
          </div>

          {/* Add more form fields as needed */}

          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
