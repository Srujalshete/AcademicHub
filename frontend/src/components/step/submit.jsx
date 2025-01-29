import React from 'react';

function SuccessPopup({ onClose }) {
  const handleClose = () => {
    onClose(); // Close the popup (handled by parent component)
    window.location.href = '/layout'; // Redirect to the /layout component
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-purple-600">Thank You!</h2>
        <p className="text-lg text-gray-700 mb-4">The school representative will contact you soon for further process.</p>
        <button
          onClick={handleClose}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default SuccessPopup;
