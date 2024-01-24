// src/Home.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import firebase from './firebase';
import './Home.css'; // Import Home styling

const Home = ({ navigate }) => {
  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
      console.log('Signout successful!');
      // Redirect to login page after signout
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  // Check if the user is authenticated, and if not, redirect to the login page
  if (!firebase.auth().currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div id="home-page">
      <h2>Welcome to the Home Page</h2>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Home;
