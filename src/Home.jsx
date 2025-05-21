import React from 'react';
import { useLocation } from 'react-router-dom';
import './Home.css';

export default function Home() {
    const location = useLocation();
    const email = location.state?.email; // Access the email from state

    return (
      <div className="home-container">
      <h1 className="home-heading">Welcome to the Home Page</h1>
      {email && (
          <div className="pop-in-message">
              You are logged in as: {email}
          </div>
      )}
  </div>
);
}

