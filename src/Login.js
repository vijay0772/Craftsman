import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usertype, setUsertype] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, usertype }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      const responseData = await response.json();
      sessionStorage.setItem('usertype', responseData.data.user.usertype);
      sessionStorage.setItem('username', responseData.data.user.username);
      window.location.href = '/';
    } catch (error) {
      console.error('Error logging user:', error.message);
      setError('Error logging in. Please try again.');
    }
  };

  return (
    <div style={{ paddingTop: '200px' }} className="login-container">

  <div className="entry">
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>

      <div className="form-group">
        <label htmlFor="usertype">User Type:</label>
        <select id="usertype" value={usertype} onChange={(e) => setUsertype(e.target.value)}>
          <option value="customer">Customer</option>
          <option value="storeManager">Store Manager</option>
          <option value="salesman">Employee</option>
        </select>
      </div>

      <button type="submit" style={{background:'#EE293D'}} className="login-button">Login</button>
      {error && <div className="error-message">{error}</div>}
      <div className="register-link">
        <strong>New User? <a href="/register">Register here!</a></strong>
      </div>
    </form>
  </div>
</div>

  );
}

export default Login;
