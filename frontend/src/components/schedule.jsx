import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import hostel from '../assets/hostel.png'

function HostelSchedule() {
  return (
    <> 
    <Navbar />
    <div className="relative p-10 mt-10 max-w-full">
        <img 
          src={hostel} 
          alt="Banner" 
          className="w-full h-96 object-cover rounded-lg shadow-lg"
          style={{ zIndex: '1' }}
        />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start rounded-lg shadow-lg mt-6">
          <h1 className="text-white text-4xl font-bold ml-20">Daily Schedule</h1>
        </div>
      
      </div>
    <div className="bg-white">
      <div className="max-w-xl mx-auto p-8">
        <div className="flow-root">
          <ul className="-mb-8">
            <li>
              <div className="relative pb-8">
                <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                <div className="relative flex items-start space-x-3">
                  <div>
                    <div className="relative px-1">
                      <div className="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-white flex items-center justify-center">
                        <svg className="text-white h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 py-0">
                    <div className="text-md text-gray-500 text-left">
                      <div>
                        <a href="#" className="font-medium text-gray-900 mr-2">Morning Routine</a>
                      </div>
                   <a href="#"
                      class="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                      <div class="absolute flex-shrink-0 flex items-center justify-center">
                        <span class="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true"></span>
                      </div>
                      <div class="ml-3.5 font-medium text-gray-900">Daily</div>
                    </a>
                  </div>
                    <div className="mt-2 text-gray-700 text-left">
                      <p>
                        <ul className="list-disc list-inside ml-5">
                          <li>Wake up call: 06:00 AM</li>
                          <li>Morning exercises: 06:30 AM</li>
                          <li>Breakfast: 07:00 AM</li>
                          <li>School classes: 08:00 AM</li>
                          <li>Lunch: 12:30 PM</li>
                          <li>Afternoon activities: 01:30 PM</li>
                          <li>Study time: 05:00 PM</li>
                          <li>Dinner: 07:00 PM</li>
                          <li>Free time / recreational activities: 08:00 PM</li>
                          <li>Quiet time / preparation for bed: 10:00 PM</li>
                          <li>Lights out: 10:30 PM</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="relative pb-8">
                <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                <div className="relative flex items-start space-x-3">
                  <div>
                    <div className="relative px-1">
                      <div className="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-white flex items-center justify-center">
                        <svg className="text-white h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 py-0">
                    <div className="text-md text-gray-500 text-left">
                      <div>
                        <a href="#" className="font-medium text-gray-900 mr-2 text-left">Academic Sessions</a>
                      </div>   <a href="#"
                      class="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                      <div class="absolute flex-shrink-0 flex items-center justify-center">
                        <span class="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true"></span>
                      </div>
                      <div class="ml-3.5 font-medium text-gray-900">Morning</div>
                    </a>
                    </div>
                    <div className="mt-2 text-gray-700 text-left">
                      <p>
                        <span>- Class sessions and study periods:</span>
                        <ul className="list-disc list-inside ml-5">
                          <li>11:00 AM - 11:45 AM</li>
                          <li>11:45 AM - 12:30 PM</li>
                        </ul>
                        <span>- Lunch break in the cafeteria:</span>
                        <ul className="list-disc list-inside ml-5">
                          <li>12:30 PM - 01:30 PM</li>
                        </ul>
                        <span>- Afternoon study or extracurricular activities:</span>
                        <ul className="list-disc list-inside ml-5">
                          <li>01:30 PM - 02:15 PM</li>
                          <li>02:15 PM - 03:00 PM</li>
                          <li>03:00 PM - 03:45 PM</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="relative pb-8">
                <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                <div className="relative flex items-start space-x-3">
                  <div>
                    <div className="relative px-1">
                      <div className="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-white flex items-center justify-center">
                        <svg className="text-white h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 py-0">
                    <div className="text-md text-gray-500 text-left">
                      <div>
                        <a href="#" className="font-medium text-gray-900 mr-2">Evening Activities</a>
                      </div>
                      <a href="#"
                      class="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                      <div class="absolute flex-shrink-0 flex items-center justify-center">
                        <span class="h-1.5 w-1.5 rounded-full bg-red-500" aria-hidden="true"></span>
                      </div>
                      <div class="ml-3.5 font-medium text-gray-900">Evening</div>
                    </a>
                    </div>
                    <div className="mt-2 text-gray-700">
                      <p>
                        <ul className="list-disc list-inside ml-5 text-left">
                          <li>Free time or structured activities.</li>
                          <li>Dinner and social time with fellow students.</li>
                          <li>Preparation for night study or bedtime routine.</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default HostelSchedule;
