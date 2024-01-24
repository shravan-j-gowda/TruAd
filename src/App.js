// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';

function App() {
  const [currentView, setCurrentView] = useState('login');

  const switchView = (view) => {
    setCurrentView(view);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>TruAd VideoStore</h1>
        </header>
        <main>
          <Routes>
            <Route
              path="/login"
              element={<Login onLoginSuccess={() => setCurrentView('home')} />}
            />
            <Route
              path="/signup"
              element={<Signup onSignupSuccess={() => setCurrentView('login')} />}
            />
            <Route
              path="/home"
              element={<Home navigate={(path) => setCurrentView(path)} />}
            />
            <Route
              path="/"
              element={<Login onLoginSuccess={() => setCurrentView('home')} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
