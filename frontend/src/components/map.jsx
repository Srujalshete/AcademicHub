import React from 'react';

const MapSection = () => {
  return (
    <section className="mt-28">
      <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat rounded-lg shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.569782817353!2d73.9336367743204!3d18.548333668327338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3d7fdc9093d%3A0x58244553dd513e00!2sWonderKinds%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1719603080742!5m2!1sen!2sin" 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-5xl text-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Our Location</h2>
        <p className="mt-4 text-lg text-gray-900">
          Visit us at the iconic Golden Gate Bridge. Our office is located in the heart of San Francisco.
        </p>
      </div>
    </section>
  );
};

export default MapSection;
