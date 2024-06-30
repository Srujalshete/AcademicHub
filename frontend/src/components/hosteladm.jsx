import React, { useState } from 'react';
import StepOne from '../components/step/StepOne';
import StepTwo from '../components/step/StepTwo';
import StepThree from '../components/step/StepThree';
import Navbar from "./navbar";
import Footer from "./footer";

function MultiStepForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    gender: '',
    idProof: '',
    nationality: '',
    homeAddress: '',
    studentContact: '',
    parentName: '',
    parentContact: '',
    parentAddress: '',
    emergencyContactPerson: '',
    emergencyContactNumber: '',
    paymentReceipt: null, // For file upload
  });
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileUpload = (file) => {
    setFormData({
      ...formData,
      paymentReceipt: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form state or redirect to success page
  };

  return (
    <> 
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen">
  {/* Progress Indicator */}
  <div className="w-full max-w-lg mx-auto px-4 mt-20 top-20 mb-0 pb-0">
        <nav aria-label="Progress">
          <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
            <li className={`md:flex-1 ${currentStep >= 1 ? 'md:border-t-4 border-indigo-600' : 'md:border-t-4 border-gray-200 hover:border-gray-300 mt-10'}`}>
              <div className={`group cursor-pointer flex flex-col py-1 pl-4 md:pb-0 md:pl-0 md:pt-2 border-l-4 ${currentStep >= 1 ? 'border-indigo-600' : 'border-gray-200 hover:border-gray-300'} md:border-l-0 md:border-t-4`} aria-current={currentStep === 1 ? 'step' : null}>
                <span className={`text-sm font-medium ${currentStep >= 1 ? 'text-indigo-600' : 'text-gray-500 group-hover:text-gray-700'}`}>Step 1</span>
                <span className="text-sm font-medium text-gray-900">Student's Details</span>
              </div>
            </li>
            <li className={`md:flex-1 ${currentStep >= 2 ? 'md:border-t-4 border-indigo-600' : 'md:border-t-4 border-gray-200 hover:border-gray-300'}`}>
              <div className={`group cursor-pointer flex flex-col py-1 pl-4 md:pb-0 md:pl-0 md:pt-2 border-l-4 ${currentStep >= 2 ? 'border-indigo-600' : 'border-gray-200 hover:border-gray-300'} md:border-l-0 md:border-t-4`} aria-current={currentStep === 2 ? 'step' : null}>
                <span className={`text-sm font-medium ${currentStep >= 2 ? 'text-indigo-600' : 'text-gray-500 group-hover:text-gray-700'}`}>Step 2</span>
                <span className="text-sm font-medium text-gray-900">Guardian’s Details</span>
              </div>
            </li>
            <li className={`md:flex-1 ${currentStep >= 3 ? 'md:border-t-4 border-indigo-600' : 'md:border-t-4 border-gray-200 hover:border-gray-300'}`}>
              <div className={`group cursor-pointer flex flex-col py-1 pl-4 md:pb-0 md:pl-0 md:pt-2 border-l-4 ${currentStep >= 3 ? 'border-indigo-600' : 'border-gray-200 hover:border-gray-300'} md:border-l-0 md:border-t-4`} aria-current={currentStep === 3 ? 'step' : null}>
                <span className={`text-sm font-medium ${currentStep >= 3 ? 'text-indigo-600' : 'text-gray-500 group-hover:text-gray-700'}`}>Step 3</span>
                <span className="text-sm font-medium text-gray-900">Additional Information</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Form Steps */}
      <div className="w-full max-w-lg mx-auto px-4 mt-0"> {/* Adjust mt-20 to create space */}
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <StepOne
              formData={formData}
              handleChange={handleChange}
              handleNext={handleNext}
            />
          )}
          {currentStep === 2 && (
            <StepTwo
              formData={formData}
              handleChange={handleChange}
              handleNext={handleNext}
              handleBack={handleBack}
            />
          )}
          {currentStep === 3 && (
            <StepThree
              formData={formData}
              handleFileUpload={handleFileUpload}
              handleBack={handleBack}
            />
          )}

          {/* Navigation Buttons
          <div className="mt-4 flex justify-between">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Back
              </button>
            )}

            {currentStep < 3 && (
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button>
            )}

            {currentStep === 3 && (
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            )}
          </div> */}
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default MultiStepForm;
