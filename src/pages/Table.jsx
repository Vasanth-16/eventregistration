'use client'

import { useState, useEffect } from 'react'

export default function Table() {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch participants data from API
  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        // Fetch data from the API
        const response = await fetch('http://192.168.90.209:3000/api1/eventrecord');
        
        // Check if the response is OK
        if (!response.ok) {
          throw new Error('Failed to fetch registered participants');
        }

        // Parse the response as JSON
        const data = await response.json();

        // Set participants with the fetched data
        setParticipants(data);

        // Set loading to false after data is fetched
        setLoading(false);
      } catch (error) {
        // Handle error and update the state
        setError(error.message);
        setLoading(false);
      }
    };

    // Call the function to fetch participants
    fetchParticipants();
  }, []);

  // If data is loading, show a loading message
  if (loading) {
    return <p>Loading registered participants...</p>;
  }

  // If an error occurred during data fetch, display the error message
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Event Admin Dashboard
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Manage participants for your event.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-4xl sm:mt-20">
        {/* Registered Participants */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold leading-6 text-gray-900 text-start">
            Registered Participants
          </h3>
          <table className="min-w-full mt-4 bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Attended
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {participants.length > 0 ? (
                participants.map((participant) => (
                  <tr key={participant.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {participant.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {participant.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {participant.attended ? (
                        <span className="text-green-500">Yes</span>
                      ) : (
                        <span className="text-red-500">No</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-500" colSpan="3">
                    No registered participants.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
