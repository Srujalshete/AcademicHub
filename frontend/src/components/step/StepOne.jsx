import React from 'react';

function StepOne({ formData, handleChange, handleNext }) {
  return (
 
    <div class="bg-white shadow-all-sides rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 mt-10">
      <div class="-mx-3 md:flex mb-6 mt-4">
      <div className="md:w-1/2 px-3 mb-6 md:mb-0">
  <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2 text-left" htmlFor="grid-first-name">
    Student's Name<span className="text-red-500">*</span>
  </label>
  <input
    type="text"
    name="studentName"
    value={formData.studentName}
    onChange={handleChange}
    className="appearance-none block w-full bg-gray-50 text-gray-900 border border-red rounded py-3 px-4 mb-3"
    placeholder="Enter student's name"
  />
</div>

<div className="md:w-1/2 px-3 mb-6 md:mb-0">
  <label className="block mb-2 text-gray-900 text-xs font-bold text-left">
    Date of Birth<span className="text-red-500">*</span>
  </label>
  <input
    type="date"
    name="dob"
    value={formData.dob}
    onChange={handleChange}
    className="appearance-none block w-full bg-gray-50 text-gray-900 border border-red rounded py-3 px-4 mb-3"
  />
</div>
</div>

      {/* Row 2: Gender and ID Proof */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
        <div className="mb-3">
          <label className="block mb-2 text-gray-900 text-xs font-bold text-left">Gender<span className="text-red-500">*</span></label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="appearance-none block w-full bg-gray-50 text-gray-900 border border-red rounded py-3 px-4 mb-3" 
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="block mb-2 text-gray-900 text-xs font-bold text-left">ID Proof<span className="text-red-500">*</span></label>
          <input
            type="text"
            name="idProof"
            value={formData.idProof}
            onChange={handleChange}
            className="appearance-none block w-full bg-gray-50 text-gray-900 border border-red rounded py-3 px-4 mb-3" 
            placeholder="Enter ID proof"
          />
        </div>
      </div>

      {/* Row 3: Nationality */}
      <div className="mb-3">
        <label className="block mb-2 text-gray-900 text-xs font-bold text-left">Nationality<span className="text-red-500">*</span></label>
        <input
          type="text"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          className="appearance-none block w-full bg-gray-50 text-gray-900 border border-red rounded py-3 px-4 mb-3" 
          placeholder="Enter nationality"
        />
      </div>

      {/* Row 4: Home Address */}
      <div className="mb-3">
        <label className="block mb-2 text-gray-900 text-xs font-bold text-left">Home Address<span className="text-red-500">*</span></label>
        <textarea
          name="homeAddress"
          value={formData.homeAddress}
          onChange={handleChange}
          className="appearance-none block w-full bg-gray-50 text-gray-900 border border-red rounded py-3 px-4 mb-3" 
          placeholder="Enter home address"
        ></textarea>
      </div>

      {/* Row 5: Student's Contact Number */}
      <div className="mb-3">
        <label className="block mb-2 text-gray-900 text-xs font-bold text-left">Student's Contact Number<span className="text-red-500">*</span></label>
        <input
          type="tel"
          name="studentContact"
          value={formData.studentContact}
          onChange={handleChange}
          className="appearance-none block w-full bg-gray-50 text-gray-900 border border-red rounded py-3 px-4 mb-3" 
          placeholder="Enter contact number"
        />
      </div>

      <div className="mt-6">
        <button
          onClick={handleNext}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default StepOne;
