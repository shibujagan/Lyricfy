import React from 'react';
import Login from '../auth/Login';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Signout.css'
function Signout() {
  // Function to handle logout
  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
    // Optionally, redirect to the login page or perform other actions
    console.log('Logged out successfully');
    window.location.href = <Login/>; // Redirect to the login page
  };

  return (
    <div className="signout-container">
    <div className="signout-content">
      <h1>We're sad to see you go!</h1>
      <p>Click the button below to log out and return to the login page.</p>
      <button className="signout-button" onClick={handleLogout}>Logout</button>
    </div>
  </div>

  );
}

export default Signout;