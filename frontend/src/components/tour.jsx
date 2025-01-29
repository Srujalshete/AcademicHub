import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Map from './map';
import SuccessPopup from '../components/step/submit';
import Scrollbar from './scrollbar';
import { TracingBeam } from "./ui/tracing-beam";

function Tour() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFormSubmitLocal = (e) => {
    e.preventDefault();
    // Simulate form submission logic
    setTimeout(() => {
      setShowSuccess(true);
    }, 1000);
  };

  const closeSuccessPopup = () => {
    setShowSuccess(false);
  };

  return (
    <div>
      
      <Navbar />
      <TracingBeam className="px-6">
      <Map />
      <div className="mx-4 md:mx-14 mt-6 md:mt-10 mb-8 sborder-2 border-blue-400 rounded-lg">
        <div className="mt-6 md:mt-10 text-center font-bold text-black">Contact Us</div>
        <div className="mt-3 text-center text-2xl md:text-4xl font-bold text-black">Make an Appointment</div>
        <div className="p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-6">
              <input
                type="text"
                name="name"
                className="block w-full text-gray-900 text-bold rounded-md border border-slate-300 bg-gray-50 px-3 py-3 md:py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Full Name *"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                name="email"
                className="block w-full text-gray-900 text-bold rounded-md border border-slate-300 bg-gray-50 px-3 py-3 md:py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Email *"
              />
            </div>
          </div>
          <div className="mb-6">
            <input
              type="date"
              name="date"
              placeholder="Date *"
              className="appearance-none block w-full border border-slate-300 text-bold bg-gray-50 px-3 py-3 md:py-4 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              style={{ color: 'black' }}
            />
          </div>
          <div className="mb-6">
            <select
              name="select"
              id="select"
              className="block w-full rounded-md border border-slate-300 bg-gray-50 px-3 py-3 md:py-4 font-semibold text-gray-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              defaultValue="default"
            >
              <option value="default" disabled>Select Time</option>
              {[...Array(10)].map((_, index) => {
                const hour = index + 9;
                const timeLabel = `${hour % 12 === 0 ? 12 : hour % 12}:00 ${hour >= 12 ? 'PM' : 'AM'}`;
                return (
                  <option key={index} value={timeLabel}>{timeLabel}</option>
                );
              })}
            </select>
          </div>
          <div className="mb-4">
            <textarea
              name="textarea"
              id="text"
              cols={30}
              rows={5}
              className="text-bold text-gray-900 h-32 w-full resize-none rounded-md border border-slate-300 p-3 md:p-5 font-semibold bg-gray-50 placeholder:text-gray-900"
              placeholder="Message *"
            />
          </div>
          <div className="text-center">
            <button
              onClick={handleFormSubmitLocal}
              className="cursor-pointer rounded-lg bg-purple-500 shadow-md w-full md:w-fit transition-all duration-500 hover:bg-purple-700 px-6 py-4 md:px-8 md:py-5 text-sm font-semibold text-white"
            >
              Book Appointment
            </button>
          </div>
          {/* Success Popup */}
          {showSuccess && <SuccessPopup onClose={closeSuccessPopup} />}
        </div>
      </div>
      <Scrollbar />
      </TracingBeam>
      <Footer />
    </div>
  );
}

export default Tour;
