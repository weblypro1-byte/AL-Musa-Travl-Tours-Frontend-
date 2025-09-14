


// import "antd/dist/reset.css";
// import React, { useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./header";
// import Footer from "./footer";
// import Home from "./Home";
// import Services from "./Expertise";
// import Testimonials from "./Testimonials";
// import Contact from "./Contactform";
// import ServicesPage from "./ServicesPage";
// import WhatsappPortal from "./Compoents/WhatsappPortal";
// import About from "./About/About";
// import Subscribe from "./Compoents/SubscribeCard";
// import Features from "./Compoents/FeaturedTours";
// import Adventure from "./Compoents/Adventure";
// import TravelInfo from "./Compoents/TravelInfoPage";
// import "./App.scss";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import ScrollToTop from "./ScrollToTop";

// import ImageSlider from './Compoents/ImageSlider'
// import "video-react/dist/video-react.css";
// import Icon from "./Compoents/icons";

// function App() {
//   useEffect(() => {
//     AOS.init({ duration: 600, once: true, easing: "ease-in-out" });
//   }, []);

//   return (
//     <div className="App">
//       <ScrollToTop />
//       <Navbar />
      
//       <Icon />
      
//       <main className="main-content">
//         <Routes>
//           {/* Home Page (full) */}
//           <Route path="/" element={<div data-aos="fade-up"><Home /></div>} />

//           {/* Home sub-pages */}
//           <Route path="/about" element={<div data-aos="fade-right"><About /></div>} />
//           <Route path="/features" element={<div data-aos="fade-up"><Features /></div>} />
//           <Route path="/adventure" element={<div data-aos="fade-up"><Adventure /></div>} />
//           <Route path="/travel-info" element={<div data-aos="fade-left"><TravelInfo /></div>} />
//           <Route path="/subscribe" element={<div data-aos="fade-up"><Subscribe /></div>} />
//           <Route path="/imageslider" element={<div data-aos="fade-left"><ImageSlider /></div>} />
       
//           {/* Other standalone pages */}
//           <Route path="/services" element={<div data-aos="fade-right"><Services /></div>} />
//           <Route path="/testimonials" element={<div data-aos="fade-up"><Testimonials /></div>} />
//           <Route path="/contact" element={<div data-aos="fade-left"><Contact /></div>} />
//           <Route path="/ServicesPage" element={<ServicesPage />} />
//         </Routes>
     
//       </main>

//       <Footer/>

      
//     </div>
//   );
// }

// export default App;











//new 
import "video-react/dist/video-react.css"; 

import "antd/dist/reset.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./header";
import Footer from "./footer";
import Services from "./Expertise";
import Testimonials from "./Testimonials";
import Contact from "./Contactform";
import ServicesPage from "./ServicesPage";
import About from "./About/About";
import Subscribe from "./Compoents/SubscribeCard";
import Features from "./Compoents/FeaturedTours";
import Adventure from "./Compoents/Adventure";
import TravelInfo from "./Compoents/TravelInfoPage";
import "./App.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ImageSlider from "./Compoents/ImageSlider";
import Icon from "./Compoents/icons";
import CEO from './About/ceo';
// Sections from Home.js
import Hero from "./Hero";
import AboutSection from "./Compoents/about";
import RehmanServices from "./Compoents/RehmanServices";
import About2 from "./Compoents/AboutSection";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 600, once: true, easing: "ease-in-out" });

    // Fake loader for 1.5s
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="App">
           
      <Navbar />
      <Icon />

     
      <main className="main-content">
        <Routes>
          {/* Home Page composed here directly */}
          <Route
            path="/"
            element={
              <div data-aos="fade-up">
               
                <section id="hero"><Hero /></section>
                <section id="about"><AboutSection /></section>
                <section id="services"><Services /></section>
                <section id="features"><Features /></section>
                <section id="image-slider"><ImageSlider /></section>
                <section id="servis"><RehmanServices /></section>
                <section id="adventure"><Adventure /></section>
                <section id="about2"><About2 /></section>
                <section id="travel"><TravelInfo /></section>
                <section id="testimonials"><Testimonials /></section>
                <section id="subscribe"><Subscribe /></section>
                
              </div>
            }
          />

          {/* Other pages */}
          <Route path="/about" element={<div data-aos="fade-right"><About /></div>} />
          <Route path="/features" element={<div data-aos="fade-up"><Features /></div>} />
          <Route path="/adventure" element={<div data-aos="fade-up"><Adventure /></div>} />
          <Route path="/travel-info" element={<div data-aos="fade-left"><TravelInfo /></div>} />
          <Route path="/subscribe" element={<div data-aos="fade-up"><Subscribe /></div>} />
          <Route path="/imageslider" element={<div data-aos="fade-left"><ImageSlider /></div>} />
          <Route path="/services" element={<div data-aos="fade-right"><Services /></div>} />
          <Route path="/testimonials" element={<div data-aos="fade-up"><Testimonials /></div>} />
          <Route path="/contact" element={<div data-aos="fade-left"><Contact /></div>} />
          <Route path="/ServicesPage" element={<ServicesPage />} />
          <Route path="/ceo" element={<CEO />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
