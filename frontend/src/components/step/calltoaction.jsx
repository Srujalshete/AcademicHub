import React from 'react';

function CallToAction() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 -mt-2 mb-10">
      <div className="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:rounded-3xl sm:border sm:border-gray-100 sm:px-12 sm:shadow-sm">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-1">
          Join our community today!
        </h2>
        <h3 className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-500">
        Meet our leadership
        </h3>
        <div className="mt-8 flex items-center justify-center gap-x-6">
          <a className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" href="/leadership">
            Explore the forum
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
