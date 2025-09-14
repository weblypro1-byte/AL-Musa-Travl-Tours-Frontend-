import React from "react";
import "./Expertise.scss";

import { FaCar, FaPlane, FaKaaba } from "react-icons/fa";
import { MdOutlineHotel } from "react-icons/md";
import { TbLuggage } from "react-icons/tb";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { AiFillInsurance } from "react-icons/ai";
import { SiVisa } from "react-icons/si";

const services = [
  {
    icon: <SiVisa />,
    title: "Visa Assistance",
    desc: "MUSA Al Raza Travel and Tours Provides the Best Quality Services",
    color: "blue",
  },
  {
    icon: <FaKaaba />,
    title: "Hajj And Umrah Packages",
    desc: "Executive 5 Star To Economy Budget Class Hajj And Umrah Packages Available.",
    color: "black",
  },
  {
    icon: <MdOutlineHotel />,
    title: "Worldwide Reservations",
    desc: "Hotel, Resort, Apartment Reservations.",
    color: "blue",
  },
  {
    icon: <TbLuggage />,
    title: "Packages Tailor",
    desc: "We Have Itineraries For Honeymooners & Families.",
    color: "black",
  },
  {
    icon: <BsFillSuitHeartFill />,
    title: "Honeymoon Tour",
    desc: "MUSA Al Raza Travel and Tours Provides the Best Quality Services for Honeymooners.",
    color: "blue",
  },
  {
    icon: <FaCar />,
    title: "Ground Services",
    desc: "Times Travel And Worldwide Provides Car Hire, Meet & Greet.",
    color: "blue",
  },
  {
    icon: <AiFillInsurance />,
    title: "Travel Insurance",
    desc: "Comprehensive Travel Insurance: Protect Your Trips, Health, And Peace Worldwide.",
    color: "blue",
  },
  {
    icon: <FaPlane />,
    title: "Air Ticketing",
    desc: "Times Travel And Tourism Provides International & Domestic Air Ticket Facility On Just One Call.",
    color: "black",
  },
];

export default function Expertise() {
  return (
    <section className="expertise">
      <h2 className="expertise__title">
        Range Of Expertise
      </h2>
      <p className="expertise__subtitle">
        Times Travel And Tourism, Where Your Travel Experience Takes Center Stage. 
        Our Array Of Exclusive Tours And Travel Products Is Designed With A Personal Touch, 
        Tailoring Each Vacation To Your Unique Tastes, Needs, And Budget. 
        Unlike Any Other, Our Offerings Stand Out, Thanks To Special Relationships With 
        The World's Leading Tour Operators, Tourist Boards, Airlines, And Travel Suppliers.
      </p>

      <div className="expertise__grid">
        {services.map((service, index) => (
          <div key={index} className="expertise__card">
            <div className={`expertise__icon ${service.color === "black" ? "black" : "blue"}`}>
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}