import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
      setShowConfirmPassword(!showConfirmPassword);
    };
  
  return (
    <div>
      <div class="flex flex-col justify-center min-h-screen py-8 px-4 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign up for an account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600 max-w">
        Or &nbsp;
        <Link to="/Login" class="font-medium text-blue-600 hover:text-blue-500">
           Sign in to your existing account
        </Link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" action="#" method="POST">

          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div class="mt-1">
              <input id="name" name="name" type="text" autocomplete="name" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>
          </div>

          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">
              Username
            </label>
            <div class="mt-1">
              <input id="uname" name="uname" type="text" autocomplete="uname" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="mt-1">
              <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>
          </div>

          <div>
            <label htmlFor="password" class="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className='relative '>
              <i class="absolute right-3 pt-2 px-2 fa-sharp fa-solid fa-eye cursor-pointer" onClick={togglePasswordVisibility}></i>
              <div class="mt-1 ">
                <input id="password" name="password" type={showPassword ? "text" : "password"} autocomplete="current-password" required class="appearance-none block px-3 w-full py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "/>
              </div>              
            </div>
            
          </div>

          <div>
            <label for="password-confirm" class="block text-sm font-medium text-gray-700">
              Confirm password
            </label>
            <div className='relative '>
              <i class="absolute right-3 pt-2 px-2 fa-sharp fa-solid fa-eye cursor-pointer" onClick={toggleConfirmPasswordVisibility}></i>
            <div class="mt-1">
              <input id="password-confirm" name="password-confirm" type={showConfirmPassword ? "text" : "password"} autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>
            </div>
            </div>
            <div>
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Signup
