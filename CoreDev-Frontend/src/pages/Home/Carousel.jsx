import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carousel.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App({ images }) {
  const navigate = useNavigate();
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        spaceBetween={70} // Space between slides
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 5000, // Time between slides in milliseconds
          disableOnInteraction: false, // Keep autoplay even after user interaction
        }}
        pagination={{
          clickable: true, // Allow click on pagination
        }}
        navigation={false} // Disable navigation buttons
        modules={[Autoplay, Pagination]} // Exclude Navigation module
        className="mySwiper"
        speed={800}
        breakpoints={{
          400: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 45,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 55,
          },
          1224: {
            slidesPerView: 5,
            spaceBetween: 70,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content" >
              <img onClick={() => navigate("/Clients")} src={`src/assets/clients/${image.image}`} title={image.name}  alt={image.name}/>
              <div className="tooltip" id="tooltip">{}</div>
              {/* Overlay for each image */}
              <div className="overlay" >
                {/* <h3  onClick={() => navigate("/Clients")} >{image.name}</h3> */}
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
