'use client'

import { useState, useRef} from 'react'
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();

      axios.post('http://192.168.90.209:3000/api/login', {
          userId: userId,
          password: password,
      })
          .then(response => {
              alert('Login Successful');
              onLogin(response.data.userId, response.data.token); // Use returned data
          })
          .catch(error => {
              console.error('Login Error:', error);
              alert('Login Failed: ' + error.response.data.message); // Show specific error message
          });
  };


  return (
    <section class="bg-gray-50 light:bg-gray-900 min-w-full">
  <div class=" w-full  flex flex-col items-center justify-center px-6 py-8 mx-auto h-full lg:py-0 ">
      
      <div class="w-full bg-white rounded-lg shadow light:border md:mt-0 sm:max-w-md xl:p-0 light:bg-gray-800 light:border-gray-700 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8 mb-4">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl light:text-white">
                  Log In
              </h1>
              <form  onSubmit={handleSubmit} class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="uid" class=" text-start block mb-2 text-sm font-medium text-gray-900 light:text-white">User Id</label>
                      <input type="text" value={userId}
                         onChange={(e) => setUserId(e.target.value)}
                         name="uid" id="uid" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" placeholder="U0001" required=""/>
                  </div>
                  <div>
                      <label for="password" class=" text-start block mb-2 text-sm font-medium text-gray-900 light:text-white">Password</label>
                      <input type="password"value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" required=""/>
                  </div>
                  
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-primary-600 light:hover:bg-primary-700 light:focus:ring-primary-800 ">Log In</button>
              </form>
          </div>
      </div>
  </div>
</section>
  );
};

export default Login;