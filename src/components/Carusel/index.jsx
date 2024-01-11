import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Suv from "../Suv";

// install Swiper modules

export default function App() {
  return (
    <div className="w-full  flex m-auto justify-center">
      <div className=" w-full mx-auto">
        <Swiper
          loop={true}
          breakpoints={{
            425: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="swiper-my "
          navigation={true}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <Suv />
          </SwiperSlide>
          <SwiperSlide>
            <Suv />
          </SwiperSlide>
          <SwiperSlide>
            <Suv />
          </SwiperSlide>
          <SwiperSlide>
            <Suv />
          </SwiperSlide>
          <SwiperSlide>
            <Suv />
          </SwiperSlide>
          <SwiperSlide>
            <Suv />
          </SwiperSlide>
        </Swiper>

        <div className="bbgbf w-full h-0 my-11"></div>
      </div>
    </div>
  );
}

// import React, { useState } from 'react';

// const Carousel = ({ images }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const goToNextSlide = () => {
//         const newIndex = (currentIndex + 1) % images.length;
//         setCurrentIndex(newIndex);
//     };

//     const goToPrevSlide = () => {
//         const newIndex = (currentIndex - 1 + images.length) % images.length;
//         setCurrentIndex(newIndex);
//     };

//     return (
//         <div className="carousel-container flex">
//             <button onClick={goToPrevSlide}>Previous</button>
//             <button onClick={goToNextSlide} style={{ position: 'absolute', marginLeft: '800px', marginTop: '300px' }}>Next</button>
//             <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

//         </div>
//     );
// };

// export default Carousel;
