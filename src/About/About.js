
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaPlaneDeparture, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WhyUsPage.scss";
import VideoSection from './VideoSection.js'
import { Link } from "react-router-dom";

import Testimonials from "../Testimonials";

const WhyUsFullPage = () => {
  const sliderCards = [
    {
      title: "Expert Local Guides",
      desc: "Our tour leaders will take you beyond the guidebook on your tour.",
      icon: <FaPlaneDeparture />,
    },
    {
      title: "Six Continents!",
      desc: "More than 50 destinations all around the world.",
      icon: <FaPlaneDeparture />,
    },
    {
      title: "Solo Female Travelers",
      desc: "Families and solo female travels with 100% confidence.",
      icon: <FaPlaneDeparture />,
    },
    {
      title: "Senior Travelers",
      desc: "Complete support for our senior travelers including wheelchairs.",
      icon: <FaPlaneDeparture />,
    },
  ];


  return (
    <div className="whyus-fullpage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content" data-aos="fade-up">
          <h2>Why Us!</h2>
          <p>People Don’t Take, Trips Take People</p>
        </div>
      </section>

      {/* Slider Section */}
      <section className="slider-section">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {sliderCards.map((card, idx) => (
            <SwiperSlide key={idx}>
              <div className="card">
                <div className="card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <div className="underline"></div>
                <p>{card.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Paragraph Section 1 */}
      <section className="paragraph-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img
                src="https://res.cloudinary.com/dslbieqdx/image/upload/v1757767196/Copy_of_uk_2_pqdibf.png"
                alt="Musa Al Raza Travel"
                className="section-image"
              />
            </div>
            <div className="col-md-6">
              <h2 className="section-subheading">
                Your Assurance of Unforgettable Journeys
              </h2>
              <p className="section-text">
                From the moment you pick up the phone to after you return home,
                we ensure that your journey is seamless, authentic, and beyond
                what you had imagined.
              </p>
              <p className="section-text">
                We have vast experience in the luxury travel industry, and we
                are constantly circling the globe in order to provide you with
                cutting-edge destination knowledge and personalized itineraries.
              </p>
              <p className="section-text">
                Musa Al Raza Travel & Tours is committed to ensuring your
                happiness and comfort throughout. Our experienced team is
                available in every country to accommodate your wishes and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
  
        <VideoSection />
   

      {/* Paragraph Section 2 */}
      <section className="paragraph-section alternate">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="section-heading">
                Great Opportunity For Tours & Travels
              </h1>
              <h2 className="section-subheading">Musa Al Raza Travel & Tours</h2>
              <p className="section-text">
                We excel in group tours to various destinations around the
                world.
              </p>
              <div className="d-flex align-items-center mb-3">
                <div className="icon-circle">
                  <FaLocationArrow size={18} />
                </div>
                <p className="section-text mb-0 ms-2">
                  <strong>Where Adventure Holidays Begin</strong> — 28 years
                  experience of extraordinary adventure holidays.
                </p>
              </div>
              <div className="d-flex align-items-center mt-3 flex-wrap">
                <div className="icon-circle">
                  <FaPhoneAlt size={18} />
                </div>
                <p className="section-text mb-0 ms-2 me-3">
                  <strong>Call experts:</strong> 0309 1111311 | 0301 3334562 |
                  0331 3334562
                </p>
                <button className="learn-more-btn">Contact Us</button>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="https://res.cloudinary.com/dslbieqdx/image/upload/v1757767198/Copy_of_uk_3_oymedc.png"
                alt="Musa Al Raza Travel"
                className="section-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2 className="stats-heading">We Serve Around The Globe</h2>
          <div className="stats-row">
            <div className="stat-item">
              <h3 className="stat-number">100+</h3>
              <p className="stat-label">Countries</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">14+</h3>
              <p className="stat-label">Branches</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">98%</h3>
              <p className="stat-label">Success Rate</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">1,000+</h3>
              <p className="stat-label">Visa Processing</p>
            </div>
          </div>
        </div>
      </section>
{/* CEO */}
<section className="ceo-section">
  <div className="container">
    <h2 className="section-title">MEET OUR CEO</h2>
    <div className="ceo-wrapper">
      <div className="ceo-image">
        <img
          src="https://res.cloudinary.com/dslbieqdx/image/upload/v1757766409/WhatsApp_Image_2025-09-13_at_5.24.20_PM_ssydpw.jpg"
          alt="CEO - Musa Al Raza Travel & Tours"
        />
      </div>
      <div className="ceo-content">
        <h3>FAISAL HUSSAIN</h3>

        <p>
          Hi, I’m Musa Al Raza, the Chief Executive Officer (CEO) of{" "}
          <strong>Musa Al Raza Travel & Tours</strong>, a leading travel and
          tourism company dedicated to making your journeys seamless,
          memorable, and stress-free.
        </p>
        <p>
          With years of experience in the travel industry, my mission has
          always been to help individuals, families, and businesses explore
          the world with trust and convenience. At Musa Al Raza Travel &
          Tours, we pride ourselves on offering customized travel packages,
          visa assistance, and guided tours that cater to the unique needs of
          every client.
        </p>
        <p>
          I strongly believe that travel is not just about destinations—it’s
          about creating experiences that last a lifetime. That’s why our team
          is committed to providing the highest level of service,
          transparency, and customer care. Whether you’re planning a family
          holiday, a business trip, or an adventure abroad, we’re here to make
          it a reality.
        </p>

        {/* Read More Button */}
        <Link to="/contact" className="read-more-btn">
  Read More <i className="fas fa-arrow-right"></i>
</Link>
      </div>
    </div>
  </div>
</section>

      <Testimonials />
    </div>
  );
};

export default WhyUsFullPage;
