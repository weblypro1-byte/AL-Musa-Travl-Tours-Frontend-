
// import React, { useState, useEffect, useRef } from "react";
// import useScrollAnimation from "./useScrollAnimation"; // import your scroll animation hook

// import {
//   MenuOutlined,
//   CloseOutlined,
//   MailOutlined,
//   PhoneOutlined,
//   DownOutlined,
// } from "@ant-design/icons";

// import "./Header.scss";
// import logo from "./assets/logoo.png"; // adjust path if needed
// import { Link } from "react-router-dom";


// export default function Header() {
//   useScrollAnimation();
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null); // 'services' | 'countries' | null
//   const [scrolled, setScrolled] = useState(false);

//   const headerRef = useRef(null);
//   const sidebarRef = useRef(null);

//   // Close dropdowns when clicking outside header
//   useEffect(() => {
//     // add animate class after mount so animations reliably play
//     const el = headerRef.current;
//     if (!el) return;
//     // use requestAnimationFrame so browser paints, then plays animation
//     requestAnimationFrame(() => el.classList.add("animate"));
//   }, []);

//   // Close sidebar when clicking outside sidebar (desktop mobile)
//   useEffect(() => {
//     function onDoc(e) {
//       if (!sidebarRef.current) return;
//       if (sidebarOpen && !sidebarRef.current.contains(e.target)) {
//         setSidebarOpen(false);
//         setOpenDropdown(null);
//       }
//     }
//     document.addEventListener("mousedown", onDoc);
//     return () => document.removeEventListener("mousedown", onDoc);
//   }, [sidebarOpen]);

//   // ESC to close
//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") {
//         setSidebarOpen(false);
//         setOpenDropdown(null);
//       }
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   // shrink header on scroll
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const toggleSidebar = () => {
//     setSidebarOpen((s) => !s);
//     if (sidebarOpen) setOpenDropdown(null);
//   };

//   const toggleDropdown = (menu, e) => {
//     if (e) e.preventDefault();
//     setOpenDropdown((prev) => (prev === menu ? null : menu));
//   };

//   const openOnHover = (menu) => {
//     if (window.innerWidth > 1028) setOpenDropdown(menu);
//   };
//   const closeOnLeave = () => {
//     if (window.innerWidth > 1028) setOpenDropdown(null);
//   };

//   // helper to close everything when navigating from sidebar
//   const onSidebarNavClick = (e) => {
//     e.preventDefault();
//     setSidebarOpen(false);
//     setOpenDropdown(null);
//   };

//   return (
//     <header
//       ref={headerRef}
//       className={`site-header ${scrolled ? "scrolled" : ""}`}
//       role="banner"
//     >
//       {/* TOPBAR */}
//       <div className="topbar">
//         <div className="topbar-inner">
//           <div className="topbar-left" />
//           <div className="topbar-right">
//             <span className="contact-item">
//               <MailOutlined /> info@example.com
//             </span>
//             <span className="contact-item">
//               <PhoneOutlined /> +92 343 3350139
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* MAIN NAV */}
//       <div className="nav-wrapper">
//         <div className="nav-container">
//         <div className="brand">
//   <a href="/" className="brand-link">
//     <img src={logo} alt="logo" className="brand-logo" />
//     <div className="brand-text">
//       <span className="brand-title">MUSA AL RAZA TRAVEL</span>
//       <span className="brand-sub">AND TOURS PVT LTD</span>
//     </div>
//   </a>
// </div>

//           {/* Desktop nav */}
//           <nav className="nav-links" aria-label="Main navigation">
//             <ul>
//               <li>
//                 <a href="#" onClick={(e) => e.preventDefault()} className="nav-link">
//                   Home
//                 </a>
//               </li>

//               <li
//                 className={`nav-item dropdown ${openDropdown === "services" ? "open" : ""}`}
//                 onMouseEnter={() => openOnHover("services")}
//                 onMouseLeave={closeOnLeave}
//               >
//                <a
//   href="#"
//   className="nav-link has-sub"
//   onClick={(e) => {
//     if (window.innerWidth <= 1028) toggleDropdown("services", e);
//     else e.preventDefault();
//   }}
//   aria-expanded={openDropdown === "services"}
// >
//   Services <DownOutlined style={{ fontSize: "12px" }} />
// </a>

               

//                 <ul className="dropdown-menu">
//                   <li><a href="#" onClick={(e) => e.preventDefault()}>Web Development</a></li>
//                   <li><a href="#" onClick={(e) => e.preventDefault()}>App Development</a></li>
//                   <li><a href="#" onClick={(e) => e.preventDefault()}>UI/UX Design</a></li>
//                 </ul>
//               </li>

//               <li
//                 className={`nav-item dropdown ${openDropdown === "countries" ? "open" : ""}`}
//                 onMouseEnter={() => openOnHover("countries")}
//                 onMouseLeave={closeOnLeave}
//               >
//                 <a
//                   href="#"
//                   className="nav-link has-sub"
//                   onClick={(e) => {
//                     if (window.innerWidth <= 1028) toggleDropdown("countries", e);
//                     else e.preventDefault();
//                   }}
//                   aria-expanded={openDropdown === "countries"}
//                 >
//                    Countries <DownOutlined style={{ fontSize: "12px" }} />

//                 </a>

//                 <ul className="dropdown-menu">
//                   <li><a href="#" onClick={(e) => e.preventDefault()}>USA</a></li>
//                   <li><a href="#" onClick={(e) => e.preventDefault()}>UK</a></li>
//                   <li><a href="#" onClick={(e) => e.preventDefault()}>Canada</a></li>
//                   <li><a href="#" onClick={(e) => e.preventDefault()}>UAE</a></li>
//                 </ul>
//               </li>

//               <li>
//                 <a href="#" onClick={(e) => e.preventDefault()} className="nav-link">
//                   About
//                 </a>
//               </li>
//               <li>
//                 {/* <a href="/Contact" onClick={(e) => e.preventDefault()} className="nav-link">
//                   Contact
//                 </a> */}

// <Link to="/Contact" className="nav-link">
//   Contact
// </Link>
//               </li>
//             </ul>
//           </nav>

//           {/* mobile toggle (right) */}
//           <button
//             className="mobile-toggle"
//             aria-label={sidebarOpen ? "Close menu" : "Open menu"}
//             onClick={toggleSidebar}
//           >
//             {sidebarOpen ? <CloseOutlined /> : <MenuOutlined />}
//           </button>
//         </div>
//       </div>

//       {/* SIDEBAR (custom, right drawer) */}
//       <div className={`sidebar ${sidebarOpen ? "open" : ""}`} ref={sidebarRef} role="dialog" aria-hidden={!sidebarOpen}>
//         <div className="sidebar-header">
//           <div className="sidebar-logo">
//             <img src={logo} alt="logo" />
//           </div>
//           <button className="sidebar-close" onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
//             <CloseOutlined />
//           </button>
//         </div>

//         <ul className="sidebar-links">
//   <li><a href="#" onClick={onSidebarNavClick}>Home</a></li>

//   <li className={`sidebar-item ${openDropdown === "services" ? "open" : ""}`}>
//     <a
//       href="#"
//       onClick={(e) => {
//         e.preventDefault();
//         toggleDropdown("services");
//       }}
//     >
//       Services 
//       <DownOutlined className="arrow" style={{ fontSize: "12px" }} />
//     </a>
//     <ul className={`sidebar-sub ${openDropdown === "services" ? "open" : ""}`}>
//       <li><a href="#" onClick={onSidebarNavClick}>Web Development</a></li>
//       <li><a href="#" onClick={onSidebarNavClick}>App Development</a></li>
//       <li><a href="#" onClick={onSidebarNavClick}>UI/UX Design</a></li>
//     </ul>
//   </li>

//   <li className={`sidebar-item ${openDropdown === "countries" ? "open" : ""}`}>
//     <a
//       href="#"
//       onClick={(e) => {
//         e.preventDefault();
//         toggleDropdown("countries");
//       }}
//     >
//       Countries 
//       <DownOutlined className="arrow" style={{ fontSize: "12px" }} />
//     </a>
//     <ul className={`sidebar-sub ${openDropdown === "countries" ? "open" : ""}`}>
//       <li><a href="#" onClick={onSidebarNavClick}>USA</a></li>
//       <li><a href="#" onClick={onSidebarNavClick}>UK</a></li>
//       <li><a href="#" onClick={onSidebarNavClick}>Canada</a></li>
//       <li><a href="#" onClick={onSidebarNavClick}>UAE</a></li>
//     </ul>
//   </li>

//   <li><a href="#" onClick={onSidebarNavClick}>About</a></li>
//   <li><a href="#" onClick={onSidebarNavClick}>Contact</a></li>
// </ul>

//       </div>

//       {/* overlay for sidebar */}
//       {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)} />}
//     </header>
//   );
// }



// import React, { useState, useEffect, useRef } from "react";
// import useScrollAnimation from "./useScrollAnimation"; 
// import {
//   MenuOutlined,
//   CloseOutlined,
//   MailOutlined,
//   PhoneOutlined,
//   DownOutlined,
// } from "@ant-design/icons";

// import "./Header.scss";
// import logo from "./assets/logoo.png";
// import { Link } from "react-router-dom";

// export default function Header() {
//   useScrollAnimation();
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null); 
//   const [scrolled, setScrolled] = useState(false);

//   const headerRef = useRef(null);
//   const sidebarRef = useRef(null);

//   useEffect(() => {
//     const el = headerRef.current;
//     if (!el) return;
//     requestAnimationFrame(() => el.classList.add("animate"));
//   }, []);

//   useEffect(() => {
//     function onDoc(e) {
//       if (!sidebarRef.current) return;
//       if (sidebarOpen && !sidebarRef.current.contains(e.target)) {
//         setSidebarOpen(false);
//         setOpenDropdown(null);
//       }
//     }
//     document.addEventListener("mousedown", onDoc);
//     return () => document.removeEventListener("mousedown", onDoc);
//   }, [sidebarOpen]);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") {
//         setSidebarOpen(false);
//         setOpenDropdown(null);
//       }
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // const toggleSidebar = () => {
//   //   setSidebarOpen((s) => !s);
//   //   if (sidebarOpen) setOpenDropdown(null);
//   // };

//   // const toggleDropdown = (menu, e) => {
//   //   if (e) e.preventDefault();
//   //   setOpenDropdown((prev) => (prev === menu ? null : menu));
//   // };

//   // const openOnHover = (menu) => {
//   //   if (window.innerWidth > 1028) setOpenDropdown(menu);
//   // };
//   // const closeOnLeave = () => {
//   //   if (window.innerWidth > 1028) setOpenDropdown(null);
//   // };

//   // const closeSidebarNav = () => {
//   //   setSidebarOpen(false);
//   //   setOpenDropdown(null);
//   // };

  

//   return (
//     <header
//       ref={headerRef}
//       className={`site-header ${scrolled ? "scrolled" : ""}`}
//       role="banner"
//     >
//       {/* TOPBAR */}
//       <div className="topbar">
//         <div className="topbar-inner">
//           <div className="topbar-left" />
//           <div className="topbar-right">
//             <span className="contact-item">
//               <MailOutlined /> Musaalraza51214@gmail.com
//             </span>
//             <span className="contact-item">
//               <PhoneOutlined /> +92 317 8221428
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* MAIN NAV */}
//       <div className="nav-wrapper">
//         <div className="nav-container">
//           <div className="brand">
//             <Link to="/" className="brand-link">
//               <img src={logo} alt="logo" className="brand-logo" />
//               <div className="brand-text">
//                 <span className="brand-title">MUSA AL RAZA TRAVEL</span>
//                 <span className="brand-sub">AND TOURS PVT LTD</span>
//               </div>
//             </Link>
//           </div>

//           {/* Desktop nav */}
//           <nav className="nav-links" aria-label="Main navigation">
//             <ul>
//               <li>
//                 <Link to="/" className="nav-link">Home</Link>
//               </li>

//               <li>
//       <Link to="/ServicesPage" className="nav-link">Services</Link>
//     </li>
          
//               <li
//                 className={`nav-item dropdown ${openDropdown === "countries" ? "open" : ""}`}
//                 onMouseEnter={() => openOnHover("countries")}
//                 onMouseLeave={closeOnLeave}
//               >
//                 <span
//                   className="nav-link has-sub"
//                   onClick={(e) => {
//                     if (window.innerWidth <= 1028) toggleDropdown("countries", e);
//                   }}
//                 >
//                   Countries <DownOutlined style={{ fontSize: "12px" }} />
//                 </span>
//                 <ul className="dropdown-menu">
//                   <li><Link to="/ServicesPage" className="nav-link">USA</Link></li>
//                   <li><Link  to="/ServicesPage" className="nav-link">UK</Link></li>
//                   <li><Link  to="/ServicesPage" className="nav-link">Canada</Link></li>
//                   <li><Link  to="/ServicesPage" className="nav-link">UAE</Link></li>
//                 </ul>
//               </li>

//               <li>
//                 <Link to="/about" className="nav-link">About</Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="nav-link">Contact</Link>
//               </li>
//             </ul>
//           </nav>

//           {/* mobile toggle */}
//           <button
//             className="mobile-toggle"
//             aria-label={sidebarOpen ? "Close menu" : "Open menu"}
//             onClick={toggleSidebar}
//           >
//             {sidebarOpen ? <CloseOutlined /> : <MenuOutlined />}
//           </button>
//         </div>
//       </div>

//       {/* SIDEBAR */}
//       <div className={`sidebar ${sidebarOpen ? "open" : ""}`} ref={sidebarRef} role="dialog" aria-hidden={!sidebarOpen}>
//         <div className="sidebar-header">
//           <div className="sidebar-logo">
//           <Link to="/" className="brand">
//           <img 
//   src={logo} 
//   alt="logo" 
//   className="brand" 
//   style={{ width: "80px", height: "auto" }} 
// />
              
          
//             </Link>
//           </div>
//           <button className="sidebar-close" onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
//             <CloseOutlined />
//           </button>
//         </div>

//         <ul className="sidebar-links">
//           <li><Link to="/" className="nav-link" onClick={closeSidebarNav}>Home</Link></li>
//           <li><Link to="/ServicesPage" className="nav-link" onClick={closeSidebarNav}>Services</Link></li>


//           <li className={`sidebar-item ${openDropdown === "countries" ? "open" : ""}`}>
//             <span
//               onClick={() => toggleDropdown("countries")}
//             >
//               Countries <DownOutlined className="arrow" style={{ fontSize: "12px" }} />
//             </span>
//             <ul className={`sidebar-sub ${openDropdown === "countries" ? "open" : ""}`}>
//               <li><Link to="/countries/usa" onClick={closeSidebarNav}>USA</Link></li>
//               <li><Link to="/countries/uk" onClick={closeSidebarNav}>UK</Link></li>
//               <li><Link to="/countries/canada" onClick={closeSidebarNav}>Canada</Link></li>
//               <li><Link to="/countries/uae" onClick={closeSidebarNav}>UAE</Link></li>
//             </ul>
//           </li>

//           <li><Link to="/about" onClick={closeSidebarNav}>About</Link></li>
//           <li><Link to="/contact" onClick={closeSidebarNav}>Contact</Link></li>
//         </ul>
//       </div>

//       {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)} />}
//     </header>
//   );
// }



import React, { useState, useEffect, useRef } from "react";
import useScrollAnimation from "./useScrollAnimation"; 
import { MenuOutlined, CloseOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./Header.scss";


export default function Header() {
  useScrollAnimation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const headerRef = useRef(null);
  const sidebarRef = useRef(null);
  const handleLinkClick = () => {
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
  };
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    requestAnimationFrame(() => el.classList.add("animate"));
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <header ref={headerRef} className={`site-header ${scrolled ? "scrolled" : ""}`} role="banner">
      {/* TOPBAR */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left" />
          <div className="topbar-right">
            <span className="contact-item"><MailOutlined /> Musaalraza51214@gmail.com</span>
            <span className="contact-item"><PhoneOutlined /> +92 317 8221428</span>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="nav-wrapper">
        <div className="nav-container">
          <div className="brand">
            <Link to="/" className="brand-link">
              <img src='https://res.cloudinary.com/dslbieqdx/image/upload/v1757766355/logoo-removebg-preview_j9d4z6.png' alt="logo" className="brand-logo" />
              <div className="brand-text">
                <span className="brand-title">MUSA AL RAZA TRAVEL</span>
                <span className="brand-sub">AND TOURS PVT LTD</span>
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="nav-links" aria-label="Main navigation">
            <ul>
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/ServicesPage" className="nav-link">Services</Link></li>
              <li><Link to="/ImageSlider" className="nav-link">Countries</Link></li>
              <li><Link to="/about" className="nav-link">About</Link></li>
              <li><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
          </nav>

          {/* mobile toggle */}
          <button className="mobile-toggle" aria-label={sidebarOpen ? "Close menu" : "Open menu"} onClick={toggleSidebar}>
            {sidebarOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </div>

      {/* SIDEBAR */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`} ref={sidebarRef} role="dialog" aria-hidden={!sidebarOpen}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <Link to="/">
              <img src='https://res.cloudinary.com/dslbieqdx/image/upload/v1757766355/logoo-removebg-preview_j9d4z6.png' alt="logo" style={{ width: "80px", height: "auto" }} />
            </Link>
          </div>
          {/* <button className="sidebar-close" onClick={closeSidebar} aria-label="Close sidebar"><CloseOutlined /></button> */}
        </div>

        <ul className="sidebar-links">
          <li><Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link></li>
<li><Link to="/ServicesPage" className="nav-link" onClick={handleLinkClick}>Services</Link></li>


          <li><Link to="/ImageSlider" className="nav-link"onClick={handleLinkClick}>Countries</Link></li>
          <li><Link to="/about" className="nav-link" onClick={handleLinkClick}>About</Link></li>
          <li><Link to="/contact" className="nav-link" onClick={handleLinkClick}>Contact</Link></li>
        </ul>
      </div>

      {sidebarOpen && <div className="overlay" onClick={closeSidebar} />}
    </header>
  );
}
