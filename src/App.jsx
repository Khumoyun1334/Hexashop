import React from "react";
import "./App.css";
import "./bootstrap.min.css";
import "./flex-slider.css";
import "./lightbox.css";
import "./owl-carousel.css";

import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import SingleProducts from "./pages/SingleProducts";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/singleproducts" element={<SingleProducts />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;

// import React from 'react';
// import Carousel from './components/Carusel';

// const App = () => {
//     const images = [
//         'https://imgs.search.brave.com/DIvBAEl01QhB86-uwSDfpn6-LPM_hKx2YlICcWz9ksY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy9pbWct/cHJhY3RpY2UvcHJv/ZC9jb3Vyc2VzLzE2/OTkzNDI4NzEvV2Vi/L0NvbnRlbnQvSmF2/YS1iYWNrZW5kLWxp/dmUtdGh1bWJuYWls/LndlYnA',
//         'https://imgs.search.brave.com/qdKvNG496HUW1_1zeG9d8Zxa7LVzzeWUVf7vOdPn2jA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/d2luemlwLmNvbS9z/dGF0aWMvd3ovaW1h/Z2VzL2xlYXJuL2Zp/bGUtZm9ybWF0cy9p/bWcvaG93dG8tMS5w/bmc',
//         'https://imgs.search.brave.com/q8tWV4j72FKnZy5Qg7ofGFxK32R6HY40y1p489zJnPo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy9pbWct/cHJhY3RpY2UvcHJv/ZC9jb3Vyc2VzLzE2/OTkzNDI4NzEvV2Vi/L0NvbnRlbnQvamF2/YXNjcmlwdC10aHVt/Ym5haWwud2VicA',
//         // Add more image URLs as needed
//     ];

//     return (
//         <div>
//             <h1>React Carousel</h1>
//             <Carousel images={images} />
//         </div>
//     );
// };

// export default App;

// import React, { Component } from "react";
// import Slider from "react-slick";
// import Suv from "./components/Suv";

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

// export default class Responsive extends Component {
//     render() {
//         var settings = {
//             dots: true,
//             infinite: false,
//             speed: 500,
//             slidesToShow: 4,
//             slidesToScroll: 4,
//             initialSlide: 0,
//             responsive: [
//                 {
//                     breakpoint: 1024,
//                     settings: {
//                         slidesToShow: 3,
//                         slidesToScroll: 3,
//                         infinite: true,
//                         dots: true
//                     }
//                 },
//                 {
//                     breakpoint: 600,
//                     settings: {
//                         slidesToShow: 2,
//                         slidesToScroll: 2,
//                         initialSlide: 2
//                     }
//                 },
//                 {
//                     breakpoint: 480,
//                     settings: {
//                         slidesToShow: 1,
//                         slidesToScroll: 1
//                     }
//                 }
//             ]
//         };
//         return (
//             <div>
//                 <h2> Responsive </h2>
//                 <Slider {...settings}>
//                     <div>
//                         <h3><Suv/></h3>
//                     </div>
//                     <div>
//                         <h3><Suv/></h3>
//                     </div>
//                     <div>
//                         <h3><Suv/></h3>
//                     </div>
//                     <div>
//                         <h3><Suv/></h3>
//                     </div>
//                     <div>
//                         <h3><Suv/></h3>
//                     </div>
//                     <div>
//                         <h3><Suv/></h3>
//                     </div>
//                     <div>
//                         <h3><Suv/></h3>
//                     </div>
//                     <div>
//                         <h3><Suv/></h3>
//                     </div>
//                 </Slider>
//                 <Slider {...settings}>
//                     <div>
//                         <h3><Suv/></h3>
//                     </div>
//                     <div>
//                         <h3><Suv/></h3>
//                     </div>
//                     <div>
//                         <h3><Suv/></h3>
//                     </div>
//                     <div>
//                         <h3><Suv/></h3>
//                     </div>
//                     <div>
//                         <h3><Suv/></h3>
//                     </div>
//                     <div>
//                         <h3><Suv/></h3>
//                     </div>
//                     <div>
//                         <h3><Suv/></h3>
//                     </div>
//                     <div>
//                         <h3><Suv/></h3>
//                     </div>
//                 </Slider>
//                 <Slider  {...settings}>
//                     <div className="flex">
//                     <div>
//                         <h3><Suv/></h3>
//                     </div>
//                     <div>
//                         <h3><Suv/></h3>
//                     </div>
//                     <div>
//                         <h3><Suv/></h3>
//                     </div>
//                     <div>
//                         <h3><Suv/></h3>
//                     </div>
//                     <div>
//                         <h3><Suv/></h3>
//                     </div>
//                     <div>
//                         <h3><Suv/></h3>
//                     </div>
//                     <div>
//                         <h3><Suv/></h3>
//                     </div>
//                     <div>
//                         <h3><Suv/></h3>
//                     </div>

//                     </div>
//                 </Slider>
//             </div>
//         );
//     }
// }

// import React from 'react';
// import Swiper from 'react-id-swiper';

// const LoopModeWithMultipleSlidesPerGroup = () => {
//   const params = {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     slidesPerGroup: 3,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev'
//     }
//   }
//   return (
//     <Swiper {...params}>
//       <div>Slide #1</div>
//       <div>Slide #2</div>
//       <div>Slide #3</div>
//       <div>Slide #4</div>
//       <div>Slide #5</div>
//     </Swiper>
//   )
// };
// export default LoopModeWithMultipleSlidesPerGroup;
