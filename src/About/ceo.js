import React, { useEffect } from "react";
import "./CeoSection.scss";


const CeoSection = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate"); // allow replay when scrolling up
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      {/* CEO Section */}
      <section className="ceo-section scroll-animate">
        <div className="container">
          <h2 className="section-title">Meet Our CEO</h2>
          <div className="ceo-wrapper">
            <div className="ceo-image">
              <img src="https://res.cloudinary.com/dslbieqdx/image/upload/v1757766409/WhatsApp_Image_2025-09-13_at_5.24.20_PM_ssydpw.jpg" alt="CEO - Musa Al Raza Travel & Tours" />
            </div>
            <div className="ceo-content">
              <h3>FAISAL HUSSAIN</h3>
              <h4>Chief Executive Officer</h4>
              <p>
                Hi, I’m Faisal Hussain, the Chief Executive Officer (CEO) of{" "}
                <strong>Musa Al Raza Travel & Tours</strong>, a leading travel and
                tourism company dedicated to making your journeys seamless,
                memorable, and stress-free.
              </p>
              <p>
                With years of experience in the travel industry, my mission has
                always been to help individuals, families, and businesses explore
                the world with trust and convenience.
              </p>
              <p>
                I strongly believe that travel is not just about destinations—it’s
                about creating experiences that last a lifetime.
              </p>

              {/* Contact Button */}
              <a href="/contact" className="contact-btn">
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="ceo-section director scroll-animate">
        <div className="container">
          <h2 className="section-title">Meet Our Director</h2>
          <div className="ceo-wrapper">
            <div className="ceo-image">
              <img src="https://res.cloudinary.com/dslbieqdx/image/upload/v1757852213/DSC_9732379_copy_t1erf0.jpg" alt="Director - Musa Al Raza Travel & Tours" />
            </div>
            <div className="ceo-content">
              <h3>ADIL HUSSAIN</h3>
              <h4>Director</h4>
              <p>
                Hello, I’m Adil Hussain, the Director of{" "}
                <strong>Musa Al Raza Travel & Tours</strong>. My role is to oversee
                our strategic growth, client satisfaction, and innovative travel
                solutions.
              </p>
              <p>
                With a strong background in business management and tourism, I
                ensure that our operations remain customer-focused, efficient, and
                future-oriented.
              </p>
              <p>
                Together with our passionate team, we work every day to create
                journeys that inspire confidence and unforgettable memories.
              </p>

              {/* Contact Button */}
              <a href="/contact" className="contact-btn">
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CeoSection;