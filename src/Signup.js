// src/Signup.js
import React, { useState } from 'react';
import firebase from './firebase';
import { Navigate } from 'react-router-dom';
import './App.css';

const Signup = ({ onSignupSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPrompt, setShowPrompt] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [hasAccount, setHasAccount] = useState(true); // Initially assuming the user has an account

  const handleSignup = async () => {
    if (!validateEmail(email)) {
      setShowPrompt(true);
      return;
    }

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log('Signup successful!');
      setSignupSuccess(true);

      if (onSignupSuccess) {
        onSignupSuccess();
      }
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div id="signup-form">
      <h2>Signup</h2>
      {showPrompt && <p>Please enter a valid email address.</p>}
      {!signupSuccess && (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: showPrompt ? '#ff3c26' : '' }}
          />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleSignup}>Signup</button>
          <p>
            {hasAccount ? (
              <span>
                Already have an account?{' '}
                <span onClick={() => setHasAccount(false)} style={{ cursor: 'pointer', color: '#e50914' }}>
                  Login
                </span>
              </span>
            ) : (
              <Navigate to="/login" />
            )}
          </p>
        </div>
      )}
      {signupSuccess && <Navigate to="/login" />}
    </div>
  );
};

export default Signup;
