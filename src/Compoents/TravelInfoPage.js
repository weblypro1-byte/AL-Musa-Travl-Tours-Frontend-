import React from "react";
import "./TravelInfo.scss";

const TravelInfo = () => {
  return (
    <section className="travel-info">
      <div className="info-container">

        {/* Left Section */}
        <div className="info-left">
          <h2>Your Holiday, Your Way</h2>
          <p>
            Our Fantastic Range Of Holidays Include Everything From Last Minute
            Getaways, Family Breaks And Solo Travel, To Cruise Holidays And
            Specialist Trips Focused On Wellness, Wildlife-Watching, Sports,
            Relaxing And Lots More.
          </p>
          <img
            src="https://img.freepik.com/free-photo/medium-shot-smiley-couple-with-documents_23-2149272139.jpg"
            alt="Holiday"
          />
        </div>

        {/* Right Section */}
        <div className="info-right">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/008/063/100/small_2x/rear-view-portrait-of-young-man-traveler-with-backpack-standing-on-a-mountain-with-arms-spread-open-travel-life-style-and-adventure-concept-free-photo.jpg"
            alt="Travelers"
          />
          <h2>What We Do?</h2>
          <p>
            We Expertly Handle Travel Services From Simple To Unique Destinations For 
            All Customers Including Business And Corporate Clients. It's A One Stop 
            Provider For All Your Travel Needs And Requirements.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TravelInfo;
