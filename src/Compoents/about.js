import React from "react";
import "./about.scss";
import { Link } from "react-router-dom";

const imageUrl = "https://premiotravels.com/wp-content/uploads/2017/09/eourop.jpg";

const ParagraphSection = () => {
  return (
    <section className="paragraph-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Text */}
          <div className="col-md-6 text-left">
            <h1 className="section-heading">ENDLESS DISCOVERIES</h1>
            <h2 className="section-subheading">Musa Al Raza Travel & Tours</h2>
            <p className="section-text">
              Discover the breathtaking beauty and rich heritage of Pakistan with the best tour company in Lahore. Whether you’re seeking adventure in the mountains, exploring vibrant cities, or immersing yourself in local culture, we’re here to make your journey unforgettable.
            </p>
            <p className="section-text">
              Whether you dream of adventure, cultural immersion, or serene escapes, we craft journeys that inspire and create lasting memories.
            </p>
            
            <Link to="/ServicesPage">
              <button className="learn-more-btn">
                Learn More
              </button>
            </Link>
          </div>

          {/* Right Side: Image */}
          <div className="col-md-6 text-center">
            <img
              src={imageUrl}
              alt="Musa Al Raza Travel and Tours"
              className="section-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParagraphSection;
