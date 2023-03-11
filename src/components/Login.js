import React from 'react'
import { useState } from 'react';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  return (
    <div>
      <body class="bg-gray-200">
    <div class="min-h-screen flex flex-col justify-center py-7 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <a href="#" class="flex items-center justify-center">
          <i class="fas fa-lock fa-4x text-indigo-500"></i>
        </a>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form class="space-y-6" action="#" method="POST">
            
            <div>
                <label for="uname" class="block text-sm font-medium text-gray-700">
                    <i class="fa-solid fa-user px-1"></i>Username 
                </label>
                <div class="mt-1">
                  <input
                    id="uname"
                    name="uname"
                    type="uname"
                    autocomplete="uname"
                    required
                    class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">
                <i class="fa-solid fa-envelope px-1"></i>Email address 
              </label>
              <div class="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div>
            <label htmlFor="password" class="block text-sm font-medium text-gray-700">
            <i class="fa-solid fa-unlock px-2"></i>
              Password
            </label>
            <div className='relative '>
              <i class="absolute right-3 pt-2 px-2 fa-sharp fa-solid fa-eye cursor-pointer" onClick={togglePasswordVisibility}></i>
              <div class="mt-1 ">
                <input id="password" name="password" type={showPassword ? "text" : "password"} autocomplete="current-password" required class="appearance-none block px-3 w-full py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "/>
              </div>              
            </div>
            
          </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div class="text-sm">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
      
            <div class="mt-6">
              <div class="relative">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white text-gray-500">
                    Or sign in with
                  </span>
                </div>
              </div>
      
              <div class="mt-6 grid grid-cols-3 gap-3">
                <div>
                  <a
                    href="#"
                    class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span class="sr-only">Sign in with Facebook</span>
                    <i class="fab fa-facebook"></i>
                  </a>
                </div>
      
                <div>
                  <a
                    href="#"
                    class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span class="sr-only">Sign in with Twitter</span>
                    <i class="fab fa-twitter"></i>
                  </a>
                </div>
      
                <div>
                  <a
                    href="#"
                    class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span class="sr-only">Sign in with Google</span>
                    <i class="fab fa-google"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </body>
    </div>
  )
}

export default Login
