import React from 'react';
import './Services.scss';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Visa Consultancy',
    description: 'Expert Visa Consultancy For Hassle-Free Global Travel And Smooth Journeys.',
    image: 'https://visalobby.com/wp-content/uploads/2025/08/consultants-1.jpg',
    link: '/Contact',
  },
  {
    id: 2,
    title: 'Holiday Package',
    description: 'Make Your Holidays Stress-Free With Our Exclusive Holiday Packages With Guaranteed Comfort And Reliability!',
    image: 'https://blog.clickaholiday.co.uk/wp-content/uploads/istanbul-turkey.webp',
    link: '/Contact',
  },
  {
    id: 3,
    title: 'Air Ticket',
    description: 'Book Affordable Air Tickets For Seamless Worldwide Travel Adventures.',
    image: 'https://www.informalnewz.com/wp-content/uploads/2023/09/Plane-Ticket-Offer.jpg',
    link: '/Contact',
  },
  {
    id: 4,
    title: 'Umrah Package',
    description: 'Embark on a spiritual journey with our exclusive Umrah packages for a blessed and peaceful experience.',
    image: 'https://umrahexplorer.com/wp-content/uploads/2025/05/haidan-IAwnp88Fz8Y-unsplash-1.jpg',
    link: '/Contact',
  },
  {
    id: 5,
    title: 'Hotel Booking',
    description: 'Book your perfect stay worldwide with ease, offering comfort, affordable options for all travelers.',
    image: 'https://timestravel.com.pk/wp-content/uploads/2025/01/6.png',
    link: '/Contact',
  },
  {
    id: 6,
    title: 'Fast Processing',
    description: 'Book Your Dream Vacation Quickly And Easily With Our Seamless & Hassle-Free Travel Assistance.',
    image: 'https://dcsvisasolutions.com/wp-content/uploads/2018/03/passaports-on-desk-600x400.jpg',
    link: '/Contact',
  },
];

const ServicesPage = () => {
  return (
    <div className="services-container">
      {/* Animated Header */}
      <motion.div 
        className="services-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <p className="company-name">Times Travel</p>
          <h1 className="main-title">Our Services</h1>
          <p className="sub-text">
            Times Travel Is The Largest And Most Reliable Travel Company In Pakistan With Lots Of
            Satisfied Clients And We Have Arranged Almost Over 60,000 Satisfied Clients Successfully.
          </p>
        </div>
        <motion.button
          className="book-now-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert('Booking functionality coming soon!')}
        >
          Book Now
        </motion.button>
      </motion.div>

      {/* Services Cards with animation */}
      <div className="services-grid">
        {services.map(({ id, title, description, image, link }) => (
          <motion.div
            className="service-card"
            key={id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: id * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <img src={image} alt={title} className="service-image" />
            <div className="card-content">
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={link} className="card-link">
                Book Now &rarr;
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
