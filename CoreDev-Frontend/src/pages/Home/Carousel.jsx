import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carousel.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App({ images }) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        spaceBetween={30} // Space between slides
        // loop={true}
        autoplay={{
          delay: 5000, // Time between slides in milliseconds
          disableOnInteraction: false, // Keep autoplay even after user interaction
        }}
        pagination={{
          clickable: true, // Allow click on pagination
        }}
        navigation={false} // Disable navigation buttons
        modules={[Autoplay, Pagination]} // Exclude Navigation module
        onAutoplayTimeLeft={onAutoplayTimeLeft} // Track autoplay time progress
        className="mySwiper"
        speed={800}
        breakpoints={{
          // Default to 7 slides per view
          320: {
            slidesPerView: 1, // 1 slide on very small screens (e.g., mobile)
            spaceBetween: 10, // Space between slides on mobile
          },
          480: {
            slidesPerView: 2, // 2 slides on small screens
            spaceBetween: 15, // Space between slides
          },
          768: {
            slidesPerView: 3, // 3 slides on medium-sized screens
            spaceBetween: 20, // Space between slides
          },
          1024: {
            slidesPerView: 5, // 5 slides on larger screens
            spaceBetween: 25, // Space between slides
          },
          1200: {
            slidesPerView: 7, // 7 slides on very large screens
            spaceBetween: 30, // Space between slides
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={`src/assets/clients/${image.image}`} alt={image.alt || `Slide ${index + 1}`} />
              {/* Overlay for each image */}
              <div className="overlay">
                <h3>{image.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
