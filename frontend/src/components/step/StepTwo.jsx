import React from 'react';

function StepTwo({ formData, handleChange, handleNext, handleBack }) {
  return (
    <div className="top-0 left-0 right-0 bg-white shadow-all-sides rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 mt-14">
      <label className="block mb-2 text-gray-900 text-left text-xs font-bold">Parent’s/Guardian’s Names<span className="text-red-500">*</span></label>
      <input
        type="text"
        name="parentName"
        value={formData.parentName}
        onChange={handleChange}
         className="appearance-none block w-full bg-gray-50 text-gray-900 border border-red rounded py-3 px-4 mb-3"
      />

      <label className="block mb-2 text-gray-900 text-left text-xs font-bold">Parent’s/Guardian’s Contact Numbers<span className="text-red-500">*</span></label>
      <input
        type="tel"
        name="parentContact"
        value={formData.parentContact}
        onChange={handleChange}
  className="appearance-none block w-full bg-gray-50 text-gray-900 border border-red rounded py-3 px-4 mb-3"
      />

      <label className="block mb-2 text-gray-900 text-left text-xs font-bold">Parent’s/Guardian’s Address (if different)<span className="text-red-500">*</span></label>
      <textarea
        name="parentAddress"
        value={formData.parentAddress}
        onChange={handleChange}
          className="appearance-none block w-full bg-gray-50 text-gray-900 border border-red rounded py-3 px-4 mb-3"
      ></textarea>

      <label className="block mb-2 text-gray-900 text-left text-xs font-bold">Emergency Contact Person<span className="text-red-500">*</span></label>
      <input
        type="text"
        name="emergencyContactPerson"
        value={formData.emergencyContactPerson}
        onChange={handleChange}
  className="appearance-none block w-full bg-gray-50 text-gray-900 border border-red rounded py-3 px-4 mb-3"
      />

      <label className="block mb-2 text-gray-900 text-left text-xs font-bold">Emergency Contact Number<span className="text-red-500">*</span></label>
      <input
        type="tel"
        name="emergencyContactNumber"
        value={formData.emergencyContactNumber}
        onChange={handleChange}
          className="appearance-none block w-full bg-gray-50 text-gray-900 border border-red rounded py-3 px-4 mb-3"
      />

      <div className="mt-6">
        <button
          onClick={handleBack}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mr-2 rounded"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default StepTwo;
