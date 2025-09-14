// import React from "react";
// import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaArrowRight } from "react-icons/fa6";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { Link } from "react-router-dom"; // Assuming you're using React Router
// import "./Footer.scss";
// import logowhite from './logowhite.png'; // Your white logo

// const Footer = () => {
//   return (
//     <div className="page-container">
     
      
//       <footer className="footer">
//         <div className="footer-container">
//           {/* Left Section - Logo & About */}
//           <div className="footer-section about">
//             <div className="logo-content">
//               <div className="logo">
//                 <img src={logowhite} alt="EDIFY Logo" className="logo-img" />
//                 <div className="logo-text">
                  
//                 </div>
//               </div>
//               <p className="tagline">
//               Unlock your true academic potential and explore boundless opportunities abroad. Connect with us today to craft the perfect international study pathway.
//               </p>
//             </div>
            
//             <div className="social-icons">
//               <Link to="https://www.facebook.com/profile.php?id=61573866037648" target="_blank" rel="noopener noreferrer" className="social-link">
//                 <FaFacebookF />
//               </Link>
//               <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
//                 <FaXTwitter />
//               </Link>
//               <Link to="https://www.instagram.com/konnectstudyadvisor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-link">
//                 <FaInstagram />
//               </Link>
//               <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
//                 <FaLinkedinIn />
//               </Link>
//               <Link to="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
//                 <FaYoutube />
//               </Link>
//             </div>
//           </div>

//           {/* Links Section */}
//           <div className="footer-section links">
//             <h3>Links</h3>
//             <ul>
//               <li><Link to="/blogs" className="footer-link">Blogs <FaArrowRight className="link-arrow" /></Link></li>
//               <li><Link to="/courses" className="footer-link">Courses <FaArrowRight className="link-arrow" /></Link></li>
//               <li><Link to="/services" className="footer-link">Services <FaArrowRight className="link-arrow" /></Link></li>
//               <li><Link to="/partners" className="footer-link">Partners <FaArrowRight className="link-arrow" /></Link></li>
//             </ul>
//           </div>

//           {/* Explore Section */}
//           <div className="footer-section explore">
//             <h3>Explore</h3>
//             <ul>
//               <li><Link to="/news" className="footer-link">News & Events <FaArrowRight className="link-arrow" /></Link></li>
//               <li><Link to="/teams" className="footer-link">Teams <FaArrowRight className="link-arrow" /></Link></li>
//               <li><Link to="/about" className="footer-link">About Us <FaArrowRight className="link-arrow" /></Link></li>
//               <li><Link to="/Form" className="footer-link">Contact Us <FaArrowRight className="link-arrow" /></Link></li>
//             </ul>
//           </div>

//           {/* Information Section */}
//           <div className="footer-section information">
//             <h3>Information</h3>
//             <div className="contact-item">
//               <div className="icon-circle">
//                 <FaPhoneAlt className="icon" /> 
//               </div>
//               <span>+92 321 9666612</span>
//             </div>
//             <div className="contact-item">
//               <div className="icon-circle">
//                 <FaEnvelope className="icon" /> 
//               </div>
//               <Link to="Konnectstudyadvisor@gmail.com">Konnectstudyadvisor@gmail.com</Link>
//             </div>
//             <div className="contact-item">
//               <div className="icon-circle">
//                 <FaMapMarkerAlt className="icon" /> 
//               </div>
//               <span>Office #3 2nd Floor Legacy Tower Kohinoor, Faisalabad</span>
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="footer-bottom">
//           <p>© {new Date().getFullYear()} Konnect Study Advisor of Companies. All Rights Reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;
import React from "react";
import { Link } from "react-router-dom"; // <-- Import Link
import {
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  LinkedinFilled,
  YoutubeFilled,
  PhoneOutlined,
  EnvironmentOutlined,
  MailOutlined,
} from "@ant-design/icons";

import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-wave"></div>

      <div className="footer-container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <h2>MUSA AL RAZA TRAVEL</h2>
            <p className="brand-sub">AND TOURS PVT LTD</p>
            <p className="brand-tagline">
              Explore the world with comfort, style, and unforgettable adventures.
            </p>
          </div>

          {/* Footer columns */}
          <div className="footer-columns">
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/countries">Countries</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Our Services</h3>
              <ul>
                <li><Link to="#">Travel Packages</Link></li>
                <li><Link to="#">Hotel Booking</Link></li>
                <li><Link to="#">Flight Booking</Link></li>
                <li><Link to="#">Tour Guide</Link></li>
                <li><Link to="#">Visa Assistance</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Contact Us</h3>
              <p><EnvironmentOutlined /> OFFICE #4 1st Floor Pak Plaza Pwd Main Road Islamabad</p>
              <p><PhoneOutlined /> +92 317 8221428</p>
              <p><MailOutlined /> Musaalraza51214@gmail.com</p>

              <div className="footer-social">
                <a href="https://www.facebook.com/profile.php?id=61568445782096" className="facebook" target="_blank" rel="noopener noreferrer"><FacebookFilled /></a>
                <a href="https://twitter.com" className="twitter" target="_blank" rel="noopener noreferrer"><TwitterSquareFilled /></a>
                <a href="https://www.instagram.com/musa.alraza_tandt" className="instagram" target="_blank" rel="noopener noreferrer"><InstagramFilled /></a>
                <a href="https://www.linkedin.com" className="linkedin" target="_blank" rel="noopener noreferrer"><LinkedinFilled /></a>
                <a href="https://www.youtube.com/@MUSAALRAZA" className="youtube" target="_blank" rel="noopener noreferrer"><YoutubeFilled /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} MUSA AL RAZA TRAVEL. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
