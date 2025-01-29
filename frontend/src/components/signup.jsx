import React, { useState } from 'react';
import axios from 'axios';
import Validation from './signupvalidation';

function Signup() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    dob: '',
    gender: '',
    mobile: '',
    password: '',
    address: ''
  });
  const [errors, setErrors] = useState({});

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = Validation(formData); // Assuming Validation function returns errors object
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Submitting payload:', formData);
      axios.post('http://localhost:8000/signup', formData)
        .then(res => {
          console.log(res.data);
          // Navigate to login page or show success message
          window.location.href = '/login'; // Example redirection
        })
        .catch(err => {
          console.error('Error during signup request:', err);
          if (err.response && err.response.data && err.response.data.error) {
            alert(err.response.data.error);
          } else {
            alert('An error occurred while processing your request.');
          }
        });
    }
  };

  return (
    <div>
      <section className="flex justify-center relative">
        {/* Background image */}
        <img
          src="https://pagedone.io/asset/uploads/1702362010.png"
          alt="gradient background image"
          className="w-full h-full object-cover fixed"
        />

        {/* Signup form */}
        <div className="mx-auto max-w-lg px-6 lg:px-8 absolute py-20">
          <img
            src="https://pagedone.io/asset/uploads/1702362108.png"
            alt="pagedone logo"
            className="mx-auto lg:mb-11 mb-8"
          />
          <div className="rounded-2xl bg-white shadow-xl">
            <form onSubmit={handleSubmit} className="lg:p-11 p-7 mx-auto">
              <div className="mb-11">
                <h1 className="text-gray-900 text-center font-manrope text-3xl font-bold leading-10 mb-2">
                  Create Your Account
                </h1>
                <p className="text-gray-500 text-center text-base font-medium leading-6">
                  Let’s get started with your 30 days free trial
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <input
                  type="text"
                  name="fname"
                  value={formData.fname}
                  onChange={handleInput}
                  className={`w-full h-12 placeholder:text-gray-400 text-white text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 ${errors.fname ? 'border-red-500' : ''}`}
                  placeholder="First Name"
                />
                <input
                  type="text"
                  name="lname"
                  value={formData.lname}
                    onChange={handleInput}
                    className={`w-full h-12 placeholder:text-gray-400 text-white text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 ${errors.lname ? 'border-red-500' : ''}`}
                    placeholder="Last Name"
                    />
                    </div>
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInput}
                    className={`w-full h-12 placeholder:text-gray-400 text-white text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6 ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="Email"
                    />
                    <div className="grid grid-cols-2 gap-4 mb-6">
                    <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInput}
                    className={`w-full h-12 placeholder:text-gray-400 text-white text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 ${errors.dob ? 'border-red-500' : ''}`}
                    placeholder="Date of Birth"
                    style={{ colorScheme: 'dark' }} // Ensure the text is white in the datepicker
                    />
                    <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInput}
                    className={`w-full h-12 placeholder:text-gray-400 text-white text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 ${errors.gender ? 'border-red-500' : ''}`}
                    placeholder="Gender"
                    >
                    <option value="" disabled>
                    Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    </select>
                    </div>
                    <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInput}
                    className={`w-full h-12 mt-6 placeholder:text-gray-400 text-white text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6 ${errors.mobile ? 'border-red-500' : ''}`}
                    placeholder="Mobile Number"
                    />
                    <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInput}
                    className={`w-full h-12 placeholder:text-gray-400 text-white text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6 ${errors.password ? 'border-red-500' : ''}`}
                    placeholder="Password"
                    />
                    <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInput}
                    className={`w-full h-12 placeholder:text-gray-400 text-white text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6 ${errors.address ? 'border-red-500' : ''}`}
                    placeholder="Address"
                    />
                    <button
                                 type="submit"
                                 className="w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-indigo-800 transition-all duration-700 bg-indigo-600 shadow-sm mb-11"
                               >
                    Register Now
                    </button>
                    <a
                                 href="/login"
                                 className="flex justify-center text-gray-900 text-base font-medium leading-6"
                               >
                    Already have an account?{' '}
                    <span className="text-indigo-600 font-semibold pl-3">Login</span>
                    </a>
                    </form>
                    </div>
                    </div>
                        {/* Icons container */}
    <div className="absolute top-0 left-0 m-6 flex space-x-4 text-white">
      {/* Home icon */}
      <a href="/layout">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>
      </a>

      {/* User icon with dropdown */}
      <div className="relative">
        <button onClick={toggleDropdown}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {dropdownOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
            <a
              href="/admin"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Admin
            </a>
            <a
              href="/employee"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Employee
            </a>
          </div>
        )}
      </div>
    </div>
  </section>
</div>
);
}

export default Signup;