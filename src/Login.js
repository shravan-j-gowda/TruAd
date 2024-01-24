// src/Login.js
import React, { useState } from 'react';
import firebase from './firebase';
import { Navigate } from 'react-router-dom';
import './App.css';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPrompt, setShowPrompt] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [hasAccount, setHasAccount] = useState(true); // Initially assuming the user has an account

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      setShowPrompt(true);
      return;
    }

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('Login successful!');
      setLoginSuccess(true);

      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (loginSuccess) {
    return <Navigate to="/home" />;
  }

  return (
    <div id="login-form">
      <h2>Login</h2>
      {showPrompt && <p>Please enter a valid email address.</p>}
      {!loginSuccess && (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: showPrompt ? '#ff3c26' : '' }}
          />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
          <p>
            {hasAccount ? (
              <span>
                Don't have an account?{' '}
                <span onClick={() => setHasAccount(false)} style={{ cursor: 'pointer', color: '#e50914' }}>
                  Signup
                </span>
              </span>
            ) : (
              <Navigate to="/signup" />
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
