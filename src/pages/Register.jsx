import React, { useState } from 'react';
import axios from 'axios';

const RegisterEvent = ({ eventId }) => {
  const [userId, setUserId] = useState('');
  const { eventId } = useParams(); 

  const handleSubmit = () => {
    e.preventDefault();
    axios.post(`http://localhost:3000/api/eventrecord/${eventId}`, { userId })
      .then(response => {
        alert('Registration successful!');
      })
      .catch(error => {
        console.error('Error registering:', error);
        alert('Registration failed');
      });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mb-4">Register for Event</h1>
      <input
        type="text"
        placeholder="Your User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="border rounded p-2 mb-2"
      />
      <button onClick={handleSubmit} className="bg-blue-500 text-white rounded p-2 hover:bg-blue-700">Register</button>
    </div>
  );
};

export default RegisterEvent;
