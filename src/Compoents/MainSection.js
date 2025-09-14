




import React from "react";
import './TravelAgency.scss';

const TravelPage = () => {
  return (
    <div className="travel-page">
      {/* Features Section */}
      {/* Features Section */}
<div className="features">
  <div className="feature-item">
    <img src="https://timestravel.com.pk/wp-content/uploads/2024/12/Group-614-1.png" alt="Best Travel Deals" />
    <h4>Best Travel Deals</h4>
    <p>Find The Best Fares & Packages For Your Retreats With Us.</p>
  </div>
  <div className="feature-item">
    <img src="https://timestravel.com.pk/wp-content/uploads/2024/12/Group-615-1.png" alt="Flexible Bookings" />
    <h4>Flexible Bookings</h4>
    <p>Take Advantage Of Our Low Deposit & Flexible Installment Plans.</p>
  </div>
  <div className="feature-item">
    <img src="https://timestravel.com.pk/wp-content/uploads/2024/12/Group-616-1.png" alt="No Hidden Fees" />
    <h4>No Hidden Fees</h4>
    <p>We Are Quite Clear About What Your Reservation Includes.</p>
  </div>
  <div className="feature-item">
    <img src="https://timestravel.com.pk/wp-content/uploads/2024/12/Group-617-1.png" alt="24/7 Assistance" />
    <h4>24/7 Assistance</h4>
    <p>Our Team Of Specialists Work Around The Clock For Your Convenience.</p>
  </div>
</div>


      {/* Black Area with Form + Image */}
      <div className="form-image-section">
        {/* Booking Form */}
        <div className="form-wrapper">
          <div className="booking-form">
            <h5>We’ll Organize Your Journey To Top Destinations Within Your Budget!</h5>
            <form>
              <input type="text" placeholder="Full Name" />
              <input type="tel" placeholder="Phone" />
              <select>
                <option>Air Ticket</option>
                <option>Hotel</option>
                <option>Car Rental</option>
              </select>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>

        {/* Image with Badge */}
        <div className="hero-image">
          <img 
            src="https://timestravel.com.pk/wp-content/uploads/2024/12/img-2-2-1.png" 
            alt="Travel Girl"
          />
          <div className="customer-badge">
            <h3>60K+</h3>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          
          <h2>Explore Your Perfect Vacation Spot</h2>
          <p>
            Let Us Help You Find Your Ideal Holiday With Our Curated Travel Deals. 
            From Stunning Destinations To Exclusive Offers, We Make Planning Your 
            Perfect Getaway Effortless.
             Let Us Help You Find Your Ideal Holiday With Our Curated Travel Deals. 
            From Stunning Destinations To Exclusive Offers, We Make Planning Your 
            Perfect Getaway Effortless.
             Let Us Help You Find Your Ideal Holiday With Our Curated Travel Deals. 
            From Stunning Destinations To Exclusive Offers, We Make Planning Your 
            Perfect Getaway Effortless.
             Let Us Help You Find Your Ideal Holiday With Our Curated Travel Deals. 
            From Stunning Destinations To Exclusive Offers, We Make Planning Your 
            Perfect Getaway Effortless.
             Let Us Help You Find Your Ideal Holiday With Our Curated Travel Deals. 
            From Stunning Destinations To Exclusive Offers, We Make Planning Your 
            Perfect Getaway Effortless.
          </p>
          <button className="cta-btn">Get In Touch</button>
        </div>
      </div>
    </div>
  );
};

export default TravelPage;
