import React from "react";
import Slider from "react-slick";
import "./Adventure.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Replace these with your real image URLs
const carouselImages = [
 'https://res.cloudinary.com/dslbieqdx/image/upload/v1757851583/Copy_of_uk_4_uo8bwq.png',
 'https://res.cloudinary.com/dslbieqdx/image/upload/v1757766355/WhatsApp_Image_2025-09-13_at_5.06.43_PM_ow1ism.jpg',
 'https://res.cloudinary.com/dslbieqdx/image/upload/v1757766354/WhatsApp_Image_2025-09-13_at_5.00.26_PM_wt3m9q.jpg'
];

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3, // default desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true,       // vertical scroll
          verticalSwiping: true,
          arrows: false,
          dots: true,
          centerMode: true,     // center the slide
          centerPadding: "0px", // remove padding around slide
        },
      },
    ],
  };

  return (
    <section className="hero">
      <div className="hero__background">
        <div className="hero__overlay">
          <div className="hero__content">
            <p className="hero__subtitle">Adventure With Us</p>
            <h1 className="hero__title">
              Let Us Show You The Beauty Of The World
            </h1>
            <button className="hero__button">Book Now</button>
          </div>
        </div>
      </div>

      <div className="hero__carousel">
        <Slider {...settings}>
          {carouselImages.map((img, index) => (
            <div key={index} className="hero__slide">
              <img src={img} alt={`Tour ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;