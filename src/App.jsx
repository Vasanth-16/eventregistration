
import React, { useState } from 'react';
import axios from 'axios';
import Login from './pages/login';
import CreateEvent from './pages/CreateEvent';
import './App.css'
import Dashboard from './pages/Dashboard';
import RegisterEvent from './pages/Register';

const App = () => {
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);

  const handleLogin = (id, token) => {
    setUserId(id);
    setToken(token);
  };

  return (
    <Router>
    <div>
      <Switch>
        <Route path="/" exact>
          {!userId ? (
            <Login onLogin={handleLogin} />
          ) : (
            <Dashboard userId={userId} />
          )}
        </Route>
        <Route path="/create-event">
          {userId ? <CreateEvent userId={userId} /> : <Login onLogin={handleLogin} />}
        </Route>
        <Route path="/register/:eventId">
        </Route>
        {/* Add more routes as needed */}
      </Switch>
    </div>
  </Router>
  );
};

export default App;
