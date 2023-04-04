import React from 'react';
import { Carousel } from 'react-bootstrap';
import img from '../../images/chemistry.png'
import './Slider.css'

const Slider = () => {
  return (
    <div className="Slider-Main mt-3">

      {/* first slid image */}
       <Carousel className="Slider">
      <Carousel.Item>
        <img
          className="d-block"
          src="/Images/Home.png"
          alt="First slide"
        />
      </Carousel.Item>

 {/* Second slid image */}
      <Carousel.Item>
        <img
          className="d-block "
          src="/Images/Overview.png"
          alt="Second slide"
        />
      </Carousel.Item>
       {/* 3rd  slid image */}
      <Carousel.Item>
        <img
          className="d-block "
          src="/Images/Results.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slider;