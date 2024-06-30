import React, { useState } from 'react';

// Import your images
import image1 from '../assets/img-01.jpg';
import image2 from '../assets/img-02.jpg';
import image3 from '../assets/img-03.jpg';
import image4 from '../assets/img-04.jpg';
import image5 from '../assets/img-05.jpg';
import image6 from '../assets/img-06.jpg';
import image7 from '../assets/img-07.jpg';
import image8 from '../assets/img-08.jpg';
// import image9 from '../assets/img-09.jpg';
// import image10 from '../assets/img-10.jpg';
// import image11 from '../assets/img-11.jpg';
// import image12 from '../assets/img-12.jpg';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(image1); // Initial image to display in main gallery

  // Function to open lightbox and display clicked image
  const openLightbox = (imageSrc) => {
    setCurrentImage(imageSrc);
    setLightboxOpen(true);
  };

  // Function to close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Function to handle thumbnail click and update main image
  const handleThumbnailClick = (imageSrc) => {
    setCurrentImage(imageSrc);
  };
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-6">
        <div className="mb-16">
        <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
            <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Here's to the crazy ones</span>
          </h1>
          <p className="w-full text-center text-gray-600 text-lg font-normal leading-8">
            Explore the essence of beauty in our gallery's intimate space.
          </p>
        </div>

        <div className="flex flex-col-reverse gap-8 mx-auto">
  <div className="slider-box flex flex-col xl:flex-row gap-8">
    <div className="box xl:w-[1062px] w-full gallery">
      <div className="swiper main-slide-carousel swiper-container relative">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="block xl:w-[1062px] w-full mx-auto h-[730px] rounded-3xl">
              <img
                src={currentImage}
                alt="Gallery image"
                className="gallery-image w-full h-full mx-auto rounded-3xl cursor-pointer"
                onClick={() => openLightbox(currentImage)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="xl:w-[200px] w-full">
  <div className="nav-for-slider">
    <div className="swiper-wrapper justify-center md:gap-7 gap-4 xl:flex-col">
      {[image1, image2, image3, image4, image5, image6, image7, image8].map((image, index) => (
        <div key={index} className="swiper-slide thumbs-slide lg:w-[126px] md:w-full">
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="gallery-image w-full h-auto object-cover rounded-3xl border-2 border-gray-200 transition-all duration-500 hover:border-indigo-600"
            style={{ maxHeight: '110px', margin: '0.5rem' }} // Added margin to create space between images
            onClick={() => handleThumbnailClick(image)}
          />
        </div>
      ))}
    </div>
  </div>
</div>

  </div>
</div>

            
        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-80">
            <div className="lightbox">
              <span className="close" onClick={closeLightbox}>&times;</span>
              <img src={currentImage} alt="Lightbox" className="lightbox-image" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
