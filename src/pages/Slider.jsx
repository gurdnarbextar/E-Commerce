import React from 'react';
import Slider from 'react-slick';
import HeroSection from './HeroSection';
import Marketing from './Marketing';
import Marketing_2 from './Marketing_2';

// Import Slick styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomSlider = () => {
  const settings = {
    dots: true, // Enable dots below the slider
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval
    arrows: true, // Show next/prev arrows
  };

    return (
        <Slider {...settings}>
      <div>
        <HeroSection />
      </div>
      <div>
        <Marketing_2 />
      </div>
      
      <div>
        <div className="">
          <h1 className="text-3xl font-bold"><Marketing /></h1>
        </div>
      </div>
      <div>
        <div className="bg-gray-200">
          <h1 className="text-3xl font-bold">Slide 4 Content</h1>
        </div>
      </div>
    </Slider>
  );
};

export default CustomSlider;
