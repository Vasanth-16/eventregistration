
import React, { useState } from 'react';
import axios from 'axios';
import Login from './pages/login';
import CreateEvent from './pages/CreateEvent';
import './App.css'

const App = () => {
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);

  const handleLogin = (id, token) => {
    setUserId(id);
    setToken(token);
  };

  return (
    <div >
      {!userId ? (
        <Login onLogin={handleLogin} />
      ) : (
        <EventDashboard userId={userId} />
      )}
    </div>
  );
};

export default App;
