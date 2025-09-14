


import React from 'react';
import './AboutSection.scss';
import { motion } from 'framer-motion';
import { FaBell, FaStar, FaGlobe } from 'react-icons/fa'; // ✅ removed FaCheckCircle

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left: Image Section */}
        <motion.div
          className="image-section"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="icon-badge"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FaBell size={28} color="white" /> {/* 🔔 modern bell icon */}
          </motion.div>

          <motion.img
            src="https://ibex.com.pk/wp-content/uploads/2024/01/image-20.jpg"
            alt="Main"
            className="main-img"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="https://ibex.com.pk/wp-content/uploads/2024/01/image-21.jpg"
            alt="Mini"
            className="mini-img"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className="experience-box"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            <span className="highlight">28</span> Years of <br /> experience
          </motion.div>
        </motion.div>

        {/* Right: Content Section */}
        <motion.div
          className="content-section"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="tag"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About Company
          </motion.span>

          <motion.h2
            className="heading"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Great Opportunity For Tours & Travels
          </motion.h2>

          <motion.p
            className="description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Musa Al Raza Travel & Tours is a trusted travel and visa consultancy in Pakistan. 
            We offer expert services for visit, work, and student visas to top destinations including 
            Europe, Asia, the USA, Canada, and the Middle East. Our team also specializes in guided 
            group tours across Turkey, Russia, UK, France, Switzerland, and more.
          </motion.p>

          {/* Info Items */}
          <motion.div
            className="info-item"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="icon">
              <FaStar color="  #f38602;" size={22} /> {/* ⭐ star icon */}
            </div>
            <div>
              <h4>5 Star Luxury Travel</h4>
              <p>Our expertise is 5 Star travel and accommodations.</p>
            </div>
          </motion.div>

          <motion.div
            className="info-item"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="icon">
              <FaGlobe color="  #f38602;" size={22} /> {/* 🌍 globe icon */}
            </div>
            <div>
              <h4>Six Continents!</h4>
              <p>More than 50 destinations all around the world.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
