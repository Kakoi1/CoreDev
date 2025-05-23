import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tooltip } from "@components/ui";

import "swiper/css";
import "swiper/css/pagination";

import "./Carousel.css";

import { Autoplay, Pagination } from "swiper/modules";

export default function App({ images }) {
    const navigate = useNavigate();
    const progressCircle = useRef(null); // Note: Unused ref
    const progressContent = useRef(null); // Note: Unused ref

    return (
        <Swiper
            spaceBetween={20} // Default for larger screens
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            speed={800}
            breakpoints={{
                // Extra small screens (≤ 400px, e.g., small mobile)
                370: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 15,
                },
                // Small screens (≤ 640px, e.g., standard mobile)
                640: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 15,
                },
                // Medium screens (≤ 768px, e.g., tablets)
                768: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                    spaceBetween: 15,
                },
                // Large screens (≤ 1024px, e.g., small desktops)
                1024: {
                    slidesPerView: 5,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                },
                // Extra large screens (≤ 1280px, e.g., large desktops)
                1280: {
                    slidesPerView: 6,
                    slidesPerGroup: 1,
                    spaceBetween: 25,
                },
            }}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className="slide-content">
                        <Tooltip text={image.name} position="right">
                            <img
                                onClick={() => navigate("/Clients")}
                                src={`src/assets/clients/${image.image}`}
                                alt={image.name}
                            />
                        </Tooltip>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}