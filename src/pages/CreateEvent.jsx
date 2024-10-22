/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
'use client'

import { useState, useRef} from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'
import axios from 'axios';

export default function CreateEvent() {
  const [agreed, setAgreed] = useState(false)
  const [eventName, setEventName] = useState('');
  const [fromdate, setFromDate] = useState('');
  const [todate, setToDate] = useState('');
  const [time, setTime] = useState('');
  const [organization, setOrganization] = useState('');
  const [location, setLocation] = useState('');
  const [department, setDepartment] = useState([]);
  const [description, setDescription] = useState([]);
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = d.getFullYear();
    return `${day}-${month}-${year}`; // Adjust format for backend if needed
  };
  const handleFileUpload = (e) => {
    const selectedFiles = Array.from(e.target.files); // Get the selected files
    setFiles(selectedFiles);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger the hidden file input click
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://192.168.90.209:3000/api/events", {
        EVENT_NAME: eventName,
        EVENT_FROM_DATE: formatDate(fromdate), // Format dates correctly
        EVENT_TO_DATE: formatDate(todate),
        EVENT_LOCATION: location,
        EVENT_ORGANIZATION: organization,
        EVENT_DEPARTMENT: department,
        ENTRY_BY: 0,
        EVENT_DETAILS: description,
        EVENT_REMARKS: description,
        EVENT_FEES: 0,
      });
      const file = await axios.post("http://192.168.90.209:3000/api/events", {
        EVENT_IMAGE: files, // Format dates correctly
      });

      console.log("Response:", response.data);

      // Reset form fields for the next entry
      setEventName("");
      setOrganization("");
      setDepartment("");
      setFromDate("");
      setToDate("");
      // setEventDetails("");
      setLocation("");
      setDescription("");
      // setFiles([]);
      setIsModalVisible(true);

    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  const handleClearTable = () => {
    setIsModalVisible(false);
  };

  
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Create Event</h2>
      </div>
      <form onSubmit={handleSubmit} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="sm:col-span-3">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900 text-start">
              Event Name
            </label>
            <div className="mt-2.5">
               <input
               type="text"
               id="event-name"
               placeholder='Event Name'
               value={eventName}
               onChange={(e) => setEventName(e.target.value)}
                autoComplete="event-name"
                className="block w-full bg-gray-200 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>           
          <div className="sm:col-span-2">
            <label htmlFor="date" className="block text-sm text-start font-semibold leading-6 text-gray-900">
              From Date
            </label>
            <div className="mt-2.5">
              <input
                id="date"
                name="date"
                type="date"
                value={fromdate}
                onChange={(e) => setFromDate(e.target.value)}
                autoComplete="date"
                className="block w-full rounded-md border-0 px-3.5 text-gray-900 bg-gray-300 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            </div>
            <div>
            <label htmlFor="todate" className="block text-sm text-start font-semibold leading-6 text-gray-900">
              To Date
            </label>
            <div className="mt-2.5">
              <input
                id="todate"
                name="todate"
                type="Date"
                value={todate}
                onChange={(e) => setToDate(e.target.value)}
                autoComplete="date"
                className="block w-full rounded-md border-0 bg-gray-200 color-gray-900 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        
          <div className="sm:col-span-3">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900 text-start">
              Location
            </label>
            <div className="mt-2.5">
              <input
                id="location"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder='Location'
                type="text"
                autoComplete="location"
                className="block w-full bg-gray-200 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="organization" className="block text-sm font-semibold leading-6 text-gray-900 text-start">
              Organization
            </label>
            <div className="mt-2.5">
              <input
                id="organization"
                name="organization"
                placeholder="Organization"
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                autoComplete="organization"
                className="block w-full rounded-md bg-gray-200 border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="department" className="block text-sm font-semibold leading-6 text-gray-900 text-start">
              Department
            </label>
            <div className="relative mt-2.5">
              <input
                id="department"
                name="department"
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="Department"
                autoComplete="Department"
                className="block w-full rounded-md bg-gray-200 border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 text-start">
              Description
            </label>
            <div className="mt-2.5">
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="block w-full rounded-md bg-gray-300 border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleFileUpload}
        style={{ display: 'none' }} // Hide the file input
      />

      {/* Custom upload button */}
      <button
        type="button"
        onClick={handleButtonClick}
        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Upload File
      </button>

      {/* Display the list of selected files */}
      <ul className="mt-2">
        {files.map((file, index) => (
          <li key={index} className="text-sm text-gray-500">
            {file.name} ({(file.size / 1024).toFixed(2)} KB)
          </li>
        ))}
      </ul>
    </div>
        
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
          Submit
          </button>
        </div>
       
      </form>
    </div>
  )
}
