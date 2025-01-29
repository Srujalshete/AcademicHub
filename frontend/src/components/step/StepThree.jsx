import React, { useState } from 'react';
import TermsModal from './TermsModal';
import SuccessPopup from './submit'; 

function StepThree({ formData, handleFileUpload, handleBack, handleSubmit }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); // State for showing success message

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleFileUpload(file);
  };

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAcceptTerms = () => {
    setIsModalOpen(false);
    // Optionally, you can proceed with form submission or other actions after terms acceptance
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission logic
    // Here you can call your backend API to submit the form data
    // For demonstration, just set a timeout to simulate async submission
    setTimeout(() => {
      setShowSuccess(true);
    }, 1000); // Show success message after 1 second (simulating a delay)
  };

  const closeSuccessPopup = () => {
    setShowSuccess(false);
    // Optionally, you can reset form data or perform other actions on close
  };

  return (
    <div class="bg-white shadow-all-sides rounded px-8 pt-10 pb-12 mb-32 flex flex-col my-2 mt-10">
      <label className="block mb-2 text-gray-900 text-left text-xs font-bold">Upload School Fee Payment Receipt<span className="text-red-500">*</span></label>
      <input
        type="file"
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
        onChange={handleFileChange}
        className="appearance-none block w-full bg-gray-50 text-gray-900 border border-red rounded py-3 px-4 mb-3"
      />

      <div className="mb-4">
        <p className="text-gray-900 text-left text-xs font-bold mb-2"> 
          <span className="ml-1">
            By submitting this form, you agree to our{' '}
            <a
              href="#terms"
              className="text-blue-500 hover:underline text-left text-xs font-bold"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleOpenModal}
            >
              Terms and Conditions
            </a>.<span className="text-red-500">*</span>
          </span>
        </p>
      </div>

      <div className="mt-6">
        <button
          onClick={handleBack}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mr-2 rounded"
        >
          Back
        </button>
        <button
          onClick={handleFormSubmit} // Changed to handleFormSubmit for form submission
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>

      {/* Modal for Terms and Conditions */}
      <TermsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAccept={handleAcceptTerms}
      />

      {/* Success Popup */}
      {showSuccess && (
        <SuccessPopup onClose={closeSuccessPopup} />
      )}
    </div>
  );
}

export default StepThree;
