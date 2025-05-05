import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tooltip } from "@components/ui";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

import { Autoplay, Pagination } from "swiper/modules";

export default function App({ images }) {
    const navigate = useNavigate();
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

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
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-content">
                            <Tooltip text={image.name} position="right">
                                <img
                                    onClick={() => navigate("/Clients")}
                                    src={`src/assets/clients/${image.image}`}
                                />
                            </Tooltip>
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
