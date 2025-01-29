import React, { useState } from 'react';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 mt-3">
            <h2 className="text-6xl font-manrope text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
              Frequently asked questions
            </h2>
          </div>
          <div className="accordion-group mt-6">
            {[
              { question: 'How can I reset my password?', answer: 'To reset your password, go to the login page and click on "Forgot Password". Follow the instructions sent to your registered email.' },
              { question: 'How do I update my billing information?', answer: 'To update your billing information, log in to your account, go to "Billing Settings", and update your payment details.' },
              { question: 'How can I contact customer support?', answer: 'You can contact customer support by clicking on the "Support" tab and filling out the contact form or by calling the support number provided.' },
              { question: 'How do I delete my account?', answer: 'To delete your account, go to "Account Settings" and click on "Delete Account". Follow the confirmation steps.' },
            ].map((item, index) => (
              <div
                key={index}
                className={`accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 mb-8 lg:p-4 ${activeIndex === index ? 'accordion-active:bg-indigo-50 accordion-active:border-indigo-600' : ''}`}
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600"
                  aria-controls={`accordion-content-${index}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <h5>{item.question}</h5>
                  <svg
                    className={`w-6 h-6 text-gray-900 transition duration-500 ${activeIndex === index ? 'hidden' : 'block'} group-hover:text-indigo-600`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 12H18M12 18V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg
                    className={`w-6 h-6 text-gray-900 transition duration-500 ${activeIndex === index ? 'block' : 'hidden'} group-hover:text-indigo-600`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 12H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div
                  id={`accordion-content-${index}`}
                  className={`accordion-content w-full overflow-hidden pr-4 transition-max-height duration-500 ease-in-out ${activeIndex === index ? 'max-h-[250px]' : 'max-h-0'}`}
                  aria-labelledby={`accordion-heading-${index}`}
                >
                  <p className="text-base text-gray-900 font-normal leading-6">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
