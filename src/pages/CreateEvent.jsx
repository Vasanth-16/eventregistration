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

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'

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

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles(uploadedFiles);
  };

  const handleSubmit = () => {
    // Submit event data logic
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
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
          <div>
            <label htmlFor="event-name" className="block text-sm font-semibold leading-6 text-gray-900 text-start">
              Event name
            </label>
            <div className="mt-2.5">
            <input
            type="text"
            id="event-name"
            placeholder='Event Name'
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
                autoComplete="given-name"
                className="block w-full bg-gray-300  rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white-500 focus:ring-1 focus:ring-inset focus:ring-#ff80b5 sm:text-sm sm:leading-6"
              />
            </div>
          </div>    
          <br/>            
          <div className="sm:col-span-1">
            <label htmlFor="date" className="block text-sm text-start font-semibold leading-6 text-gray-900">
              From Date
            </label>
            <div className="mt-2.5">
              <input
                id="date"
                name="date"
                type="Date"
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
                autoComplete="date"
                className="block w-full rounded-md border-0 bg-gray-300 color-gray-900 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              </div>
            </div>
        
          <div className="sm:col-span-2">
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
                className="block w-full bg-gray-300 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="organization" className="block text-sm font-semibold leading-6 text-gray-900 text-start">
              Organization
            </label>
            <div className="mt-2.5">
              <input
                id="organization"
                name="organization"
                placeholder="Organization"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-gray-300 border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="department" className="block text-sm font-semibold leading-6 text-gray-900 text-start">
              Department
            </label>
            <div className="relative mt-2.5">
              <input
                id="department"
                name="department"
                type="text"
                placeholder="Department"
                autoComplete="tel"
                className="block w-full text-start rounded-md bg-gray-300 border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  text-start focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 text-start">
              Description
            </label>
            <div className="mt-2.5">
              <textarea
                id="description"
                name="description"
                rows={4}
                className="block w-full rounded-md bg-gray-300 border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
             type="file"
             multiple
             onChange={handleFileUpload}
   
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
          Upload File
          </button>
          <ul className="mt-2">
          {files.map((file, index) => (
            <li key={index} className="text-sm">
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
