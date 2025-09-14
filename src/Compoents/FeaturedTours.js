

























import React from "react";
import "./FeaturedTours.scss";
const tours = [
  {
    title: "Dubai City Tour",
    location: "Dubai, United Arab Emirates",
    duration: "5 Days",
    availability: "Whole Year",
    description:
      "Discover Dubai’s iconic skyscrapers, desert adventures, luxury shopping, and cultural heritage in a perfectly curated 5-day tour.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZu5hLllCQe3Pf_cuDmNYc0kSrIv8QH6a8k_NLozXYojXDhGfkzdh9RZ6dbkOLICdD4w&usqp=CAU",
  },
  {
    title: "Baghdad Heritage Tour",
    location: "Baghdad, Iraq",
    duration: "7 Days",
    availability: "October - April",
    description:
      "Explore the rich cultural and historical sites of Baghdad, including ancient mosques, vibrant bazaars, and the Tigris River.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOU9Y6TwlY733u0-BlOhSOO6kob2bXqW3oAQ&s",
  },
  {
    title: "London & Edinburgh Tour",
    location: "United Kingdom",
    duration: "10 Days",
    availability: "Whole Year",
    description:
      "Explore the best of the UK with visits to London’s Buckingham Palace, Tower Bridge, and Big Ben, along with Edinburgh’s historic castles and Scottish highlands.",
    image:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-4.1.0&q=80&w=3000&fit=crop",
  },
  {
    title: "Istanbul & Cappadocia Tour",
    location: "Turkey",
    duration: "8 Days",
    availability: "Whole Year",
    description:
      "From Istanbul’s mosques and bazaars to Cappadocia’s magical hot-air balloons and fairy chimneys, explore the best of Turkey.",
    image:
      "https://www.grayline.com/wp-content/uploads/2025/07/Blue-Mosque-1-scaled.jpg",
  },
  {
    title: "Paris & Swiss Alps Tour",
    location: "France & Switzerland",
    duration: "12 Days",
    availability: "March - October",
    description:
      "Enjoy the romance of Paris, the Eiffel Tower, and the stunning landscapes of the Swiss Alps in a luxury European getaway.",
    image:
      "https://i0.wp.com/limitless-secrets.com/wp-content/uploads/2021/08/Best-Places-to-take-photos-with-the-Eiffel-Tower-Blog-Banner.png?fit=2240%2C1260&ssl=1",
  },
  {
    title: "Rome, Venice & Florence Tour",
    location: "Italy",
    duration: "12 Days",
    availability: "March - October",
    description:
      "Discover the heart of Italy with visits to Rome’s Colosseum and Vatican City, the romantic canals of Venice, and the Renaissance art treasures of Florence.",
    image:
      "https://i.natgeofe.com/k/e9781357-7abe-4d48-96d2-1151d9fd265a/italy-coliseum.jpg?wp=1&w=1084.125&h=609",
  },
];

const FeaturedTours = () => {
  return (
    <section className="featured-tours">
      <h2 className="featured-tours__title">
        <span>World Tours</span>
      </h2>
      <div className="featured-tours__grid">
        {tours.map((tour, index) => (
          <div className="tour-card" key={index}>
            <div
              className="tour-card__image"
              style={{ backgroundImage: `url(${tour.image})` }}
            />

            <div className="tour-card__tags">
              <span>
                <i className="fas fa-clock"></i> {tour.duration}
              </span>
              <span>
                <i className="fas fa-calendar-alt"></i> {tour.availability}
              </span>
            </div>

            <div className="tour-card__content">
              <h3>{tour.title}</h3>
              <p className="tour-card__location">
                <i className="fas fa-map-marker-alt"></i> {tour.location}
              </p>
              <hr />
              <p className="tour-card__description">{tour.description}</p>
              <button className="tour-card__button">Tour Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTours;
