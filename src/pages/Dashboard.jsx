import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = ({ userId }) => {
  const [events, setEvents] = useState([]);
  const [newEventName, setNewEventName] = useState('');
  const [newEventDate, setNewEventDate] = useState('');
  const [qrCode, setQrCode] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3000/events/${userId}`)
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, [userId]);

  const handleCreateEvent = () => {
    axios.post('http://localhost:3000/create-event', {
      name: newEventName,
      date: newEventDate,
      creatorId: userId
    }).then(response => {
      alert('Event created successfully');
      setQrCode(response.data.qrCode);
      setNewEventName('');
      setNewEventDate('');
    }).catch(error => {
      console.error('Error creating event:', error);
    });
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl mb-4 text-gray">My Events</h1>
      <ul className="list-disc pl-5">
        {events.map(event => (
          <li key={event[0]} className="mb-2">
            {event[1]} - {new Date(event[2]).toLocaleDateString()}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl mt-5">Create New Event</h2>
      <div className="flex flex-col mt-4">
        <button onClick={handleCreateEvent} className="bg-green-500 text-white rounded p-2 hover:bg-green-700">
          Create Event
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
