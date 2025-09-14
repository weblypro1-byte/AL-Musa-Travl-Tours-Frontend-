import Carousel from "react-bootstrap/Carousel";
import "./Hero.scss";

function HeroSlider() {
  return (
    <section className="hero-slider">
      <Carousel fade indicators={true} controls={true} interval={2000} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100" src='https://res.cloudinary.com/dslbieqdx/image/upload/v1757765494/Hero3_f1bdxk.png'alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src='https://res.cloudinary.com/dslbieqdx/image/upload/v1757765486/Hero1_ok5qsl.png' alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src='https://res.cloudinary.com/dslbieqdx/image/upload/v1757765491/Hero2_khamt3.png' alt="Third slide" />
        </Carousel.Item>

      </Carousel>
      <section className="testimonials">
     
      </section>
    </section>
  );
}

export default HeroSlider;
