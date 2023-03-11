import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  const mystyle = {
    '--bs-nav-link-color': 'var(--bs-white)',
    '--bs-nav-pills-link-active-color': 'var(--bs-primary)',
    '--bs-nav-pills-link-active-bg': 'var(--bs-white)',

  }
  return (
    <div className="bg-gray-100">
      {/* <!-- Header --> */}
      <header className="sticky top-0 bg-white border-b py-4">
        <div className="container mx-auto">
          <nav className="flex justify-between items-center">
            {/* <!-- Logo --> */}
            <a href="#" className="text-xl font-bold text-blue-500">CRM</a>
            {/* <!-- Navigation Links --> */}
            <ul className="flex">
              <li className="mx-4"><a href="#feature" className="text-gray-600 hover:text-blue-500">Features</a></li>
              <li className="mx-4"><a href="#pricing" className="text-gray-600 hover:text-blue-500">Pricing</a></li>
              <li className="mx-4"><Link to="/" className="text-gray-600 hover:text-blue-500">Contact</Link></li>
              <li className="mx-2"><Link to="/Signup" className="text-white bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-600">Sign Up</Link></li>
              <li className="mx-2"><Link to="/Login" className="text-white bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-600">Sign In</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* <!-- Hero Section --> */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4">The Ultimate CRM for Your Business</h1>
          <p className="text-xl text-white mb-8">Manage your customer relationships like never before</p>
          <Link to="/Signup" className="bg-white text-blue-500 py-2 px-8 rounded-full font-bold uppercase hover:bg-blue-500 hover:text-green-500 transition duration-200">Get Started</Link>
        </div>
      </section>
      {/* FEAUTURES  */}
      <section className="bg-gray-100 py-20 " id='feature'>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Features</h2>
          <div className="flex flex-wrap -mx-4">
            {/* <!-- Feature 1 --> */}
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg py-8 px-6 h-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.015 3.75a1.25 1.25 0 0 0-1.238 1.052L5.5 5H3.75A1.75 1.75 0 0 0 2 6.75v7.5C2 15.216 2.784 16 3.75 16h12.5A1.75 1.75 0 0 0 18 14.25v-7.5a1.75 1.75 0 0 0-1.75-1.75h-1.75V5a3.5 3.5 0 0 0-7 0v.75H7.015zm.742 1.5h4.506v.75a2 2 0 1 1-4 0v-.75zm5.5 4.5H5.743V13.5h7.514V10.5zm-4.257 2.25a.75.75 0 1 0-1.5 0v1.5a.75.75 0 1 0 1.5 0v-1.5z" />
                </svg>
                <h3 className="text-lg font-semibold mb-2">Feature 1</h3>
                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec felis vel nunc lobortis tempus at vel nisi.</p>
              </div>
            </div>

            {/* <!-- Feature 1 --> */}
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg py-8 px-6 h-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.015 3.75a1.25 1.25 0 0 0-1.238 1.052L5.5 5H3.75A1.75 1.75 0 0 0 2 6.75v7.5C2 15.216 2.784 16 3.75 16h12.5A1.75 1.75 0 0 0 18 14.25v-7.5a1.75 1.75 0 0 0-1.75-1.75h-1.75V5a3.5 3.5 0 0 0-7 0v.75H7.015zm.742 1.5h4.506v.75a2 2 0 1 1-4 0v-.75zm5.5 4.5H5.743V13.5h7.514V10.5zm-4.257 2.25a.75.75 0 1 0-1.5 0v1.5a.75.75 0 1 0 1.5 0v-1.5z" />
                </svg>
                <h3 className="text-lg font-semibold mb-2">Feature 1</h3>
                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec felis vel nunc lobortis tempus at vel nisi.</p>
              </div>
            </div>

            {/* <!-- Feature 1 --> */}
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg py-8 px-6 h-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.015 3.75a1.25 1.25 0 0 0-1.238 1.052L5.5 5H3.75A1.75 1.75 0 0 0 2 6.75v7.5C2 15.216 2.784 16 3.75 16h12.5A1.75 1.75 0 0 0 18 14.25v-7.5a1.75 1.75 0 0 0-1.75-1.75h-1.75V5a3.5 3.5 0 0 0-7 0v.75H7.015zm.742 1.5h4.506v.75a2 2 0 1 1-4 0v-.75zm5.5 4.5H5.743V13.5h7.514V10.5zm-4.257 2.25a.75.75 0 1 0-1.5 0v1.5a.75.75 0 1 0 1.5 0v-1.5z" />
                </svg>
                <h3 className="text-lg font-semibold mb-2">Feature 1</h3>
                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec felis vel nunc lobortis tempus at vel nisi.</p>
              </div>
            </div>

          </div>
        </div>


      </section>


      {/* Pricing SECtion */}
      <section class="bg-gray-100 py-20" id='pricing'>
        <div class="container mx-auto px-4">
          <div class="text-center">
            <h2 class="text-3xl font-bold text-gray-900">Choose the plan that's right for you</h2>
            <p class="mt-4 text-lg text-gray-600">Lorem ipsum dolor  sit amet consectetur adipisicing elit. Quam asperiores nulla numquam expedita tenetur, porro.</p>
          </div>
          <div class="mt-8">
                <div class="flex items-center justify-center">
                  <div class="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg py-6 px-8 md:p-10 mx-4 md:mx-6">
                    <div class="text-center">
                      <h3 class="text-xl font-medium text-gray-900">Basic</h3>
                      <div class="flex items-center justify-center mt-2">
                        <span class="text-3xl font-bold text-gray-900">$9</span>
                        <span class="ml-1 text-xl font-medium text-gray-500">/month</span>
                      </div>
                      <p class="mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, recusandae.</p>
                    </div>
                    <div class="mt-6">
                      <ul class="text-left">
                        <li class="flex items-start">
                          <span class="mr-2">
                            <i class="fas fa-check text-green-500"></i>
                          </span>
                          <span class="text-gray-600">1 User</span>
                        </li>
                        <li class="flex items-start mt-2">
                          <span class="mr-2">
                            <i class="fas fa-check text-green-500"></i>
                          </span>
                          <span class="text-gray-600">Unlimited Projects</span>
                        </li>
                        <li class="flex items-start mt-2">
                          <span class="mr-2">
                            <i class="fas fa-times text-red-500"></i>
                          </span>
                          <span class="text-gray-600">10 GB Storage</span>
                        </li>
                        <li class="flex items-start mt-2">
                          <span class="mr-2">
                            <i class="fas fa-times text-red-500"></i>
                          </span>
                          <span class="text-gray-600">Priority Email Support</span>
                        </li>
                      </ul>
                      <div class="mt-8">
                        <a href="#" class="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
                          Sign up
                        </a>
                      </div>
                    </div>
                  </div>

              <div class="mt-8">
                <div class="flex items-center justify-center">
                  <div class="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg py-6 px-8 md:p-10 mx-4 md:mx-6">
                    <div class="text-center">
                      <h3 class="text-xl font-medium text-gray-900">Basic</h3>
                      <div class="flex items-center justify-center mt-2">
                        <span class="text-3xl font-bold text-gray-900">$9</span>
                        <span class="ml-1 text-xl font-medium text-gray-500">/month</span>
                      </div>
                      <p class="mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, recusandae.</p>
                    </div>
                    <div class="mt-6">
                      <ul class="text-left">
                        <li class="flex items-start">
                          <span class="mr-2">
                            <i class="fas fa-check text-green-500"></i>
                          </span>
                          <span class="text-gray-600">1 User</span>
                        </li>
                        <li class="flex items-start mt-2">
                          <span class="mr-2">
                            <i class="fas fa-check text-green-500"></i>
                          </span>
                          <span class="text-gray-600">Unlimited Projects</span>
                        </li>
                        <li class="flex items-start mt-2">
                          <span class="mr-2">
                            <i class="fas fa-times text-red-500"></i>
                          </span>
                          <span class="text-gray-600">10 GB Storage</span>
                        </li>
                        <li class="flex items-start mt-2">
                          <span class="mr-2">
                            <i class="fas fa-times text-red-500"></i>
                          </span>
                          <span class="text-gray-600">Priority Email Support</span>
                        </li>
                      </ul>
                      <div class="mt-8">
                        <a href="#" class="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
                          Sign up
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg py-6 px-8 md:p-10 mx-4 md:mx-6">
                    <div class="text-center">
                      <h3 class="text-xl font-medium text-gray-900">Pro</h3>
                      <div class="flex items-center justify-center mt-2">
                        <span class="text-3xl font-bold text-gray-900">$19</span>
                        <span class="ml-1 text-xl font-medium text-gray-500">/month</span>
                      </div>
                      <p class="mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, recusandae.</p>
                    </div>
                    <div class="mt-6">
                      <ul class="text-left">
                        <li class="flex items-start">
                          <span class="mr-2">
                            <i class="fas fa-check text-green-500"></i>
                          </span>
                          <span class="text-gray-600">1 User</span>
                        </li>
                        <li class="flex items-start mt-2">
                          <span class="mr-2">
                            <i class="fas fa-check text-green-500"></i>
                          </span>
                          <span class="text-gray-600">Unlimited Projects</span>
                        </li>
                        <li class="flex items-start mt-2">
                          <span class="mr-2">
                            <i class="fas fa-times text-red-500"></i>
                          </span>
                          <span class="text-gray-600">10 GB Storage</span>
                        </li>
                        <li class="flex items-start mt-2">
                          <span class="mr-2">
                            <i class="fas fa-times text-red-500"></i>
                          </span>
                          <span class="text-gray-600">Priority Email Support</span>
                        </li>
                      </ul>
                      <div class="mt-8">
                        <a href="#" class="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
                          Sign up
                        </a>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
          </section>



          {/* <!-- Testimonial Section --> */}
          <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8 text-center">What Our Customers Are Saying</h2>
              <div className="flex flex-wrap -mx-4">
                {/* <!-- Testimonial 1 --> */}
                <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <p className="text-lg leading-relaxed mb-6">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non neque vitae ipsum lacinia consectetur. Proin vel leo ante."</p>
                    <div className="flex items-center">
                      <img src="https://via.placeholder.com/50" alt="Person" className="w-12 h-12 rounded-full mr-4" />
                      <div className="text-sm">
                        <p className="font-bold leading-none">John Doe</p>
                        <p className="text-gray-600">CEO, Company Name</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Testimonial 2 --> */}
                <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <p className="text-lg leading-relaxed mb-6">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non neque vitae ipsum lacinia consectetur. Proin vel leo ante."</p>
                    <div className="flex items-center">
                      <img src="https://via.placeholder.com/50" alt="Person" className="w-12 h-12 rounded-full mr-4" />
                      <div className="text-sm">
                        <p className="font-bold leading-none">Jane Doe</p>
                        <p className="text-gray-600">COO, Company Name</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Testimonial 3 --> */}
                <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <p className="text-lg leading-relaxed mb-6">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non neque vitae ipsum lacinia consectetur. Proin vel leo ante."</p>
                    <div className="flex items-center">
                      <img src="https://via.placeholder.com/50" alt="Person" className="w-12 h-12 rounded-full mr-4" />
                      <div className="text-sm">
                        <p className="font-bold leading-none">Joe Bloggs</p>
                        <p className="text-gray-600">CTO, Company Name</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



{/* FOOTER */}
          <footer className="bg-gray-900 text-gray-400">
            <div className="container mx-auto py-8 px-4 flex flex-wrap justify-between items-center">
              <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-xl font-bold">Company Name</h3>
                <p className="mt-2">123 Main St<br />City, State 12345/<br />USA</p>
              </div>
              <nav className="w-full md:w-auto text-center md:text-right">
                <a href="#" className="inline-block text-gray-400 hover:text-white hover:underline mr-4">Home</a>
                <a href="#" className="inline-block text-gray-400 hover:text-white hover:underline mr-4">Features</a>
                <a href="#" className="inline-block text-gray-400 hover:text-white hover:underline">Pricing</a>
              </nav>
            </div>
            <div className="container mx-auto px-4 py-4 border-t border-gray-800 flex justify-between items-center">
              <p className="text-sm">© 2023 Company Name. All rights reserved.</p>
              <nav className="text-sm">
                <a href="#" className="inline-block text-gray-400 hover:text-white hover:underline mr-4">Privacy Policy</a>
                <a href="#" className="inline-block text-gray-400 hover:text-white hover:underline">Terms of Use</a>
              </nav>
            </div>
          </footer>


        </div>

        )
}

        export default Landing
