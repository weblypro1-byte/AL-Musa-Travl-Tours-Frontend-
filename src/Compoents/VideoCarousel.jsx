// import React, { useRef, useState, useEffect } from "react";
// import Slider from "react-slick";
// import { FaPlay, FaPause, FaChevronLeft, FaChevronRight, FaExpand, FaTimes } from "react-icons/fa";
// import "./ReelsSlider.scss";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const videoData = [
//   { id: 1, src: "https://res.cloudinary.com/du3tkzdhe/video/upload/v1755752817/AQNWcxlDYSSZgKWuWam3FoWnQBwhJTIV7V4b3jtg07qF8xX9ZqQtDZo7hh2DYcsyLKFhqC4n9GaPxEYtsVXVH13L_tcllfj.mp4" },
//   { id: 2, src: "https://res.cloudinary.com/du3tkzdhe/video/upload/v1755752817/AQNWcxlDYSSZgKWuWam3FoWnQBwhJTIV7V4b3jtg07qF8xX9ZqQtDZo7hh2DYcsyLKFhqC4n9GaPxEYtsVXVH13L_tcllfj.mp4" },
//   { id: 3, src: "https://res.cloudinary.com/du3tkzdhe/video/upload/v1755752817/AQNWcxlDYSSZgKWuWam3FoWnQBwhJTIV7V4b3jtg07qF8xX9ZqQtDZo7hh2DYcsyLKFhqC4n9GaPxEYtsVXVH13L_tcllfj.mp4" },
//   { id: 4, src: "https://res.cloudinary.com/du3tkzdhe/video/upload/v1755752817/AQNWcxlDYSSZgKWuWam3FoWnQBwhJTIV7V4b3jtg07qF8xX9ZqQtDZo7hh2DYcsyLKFhqC4n9GaPxEYtsVXVH13L_tcllfj.mp4" },
//   { id: 5, src: "https://res.cloudinary.com/du3tkzdhe/video/upload/v1755752817/AQNWcxlDYSSZgKWuWam3FoWnQBwhJTIV7V4b3jtg07qF8xX9ZqQtDZo7hh2DYcsyLKFhqC4n9GaPxEYtsVXVH13L_tcllfj.mp4" },
// ];

// const PrevArrow = ({ onClick }) => (
//   <button className="slick-custom-arrow slick-prev" onClick={onClick}>
//     <FaChevronLeft />
//   </button>
// );
// const NextArrow = ({ onClick }) => (
//   <button className="slick-custom-arrow slick-next" onClick={onClick}>
//     <FaChevronRight />
//   </button>
// );

// export default function ReelsSlider() {
//   const sliderRef = useRef(null);
//   const [playing, setPlaying] = useState(null);
//   const [fullscreenId, setFullscreenId] = useState(null);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth <= 768;
//       setIsMobile(mobile);
      
//       // Exit fullscreen when resizing to larger screens
//       if (window.innerWidth > 768 && fullscreenId) {
//         setFullscreenId(null);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [fullscreenId]);

//   const pauseAll = () => {
//     videoData.forEach(v => {
//       const vid = document.getElementById(`video-${v.id}`);
//       if (vid && !vid.paused) vid.pause();
//     });
//     setPlaying(null);
//   };

//   const togglePlay = (id) => {
//     // If we're in fullscreen mode on mobile, don't allow individual video control
//     if (isMobile && fullscreenId) return;
    
//     const video = document.getElementById(`video-${id}`);
//     if (!video) return;

//     if (video.paused) {
//       videoData.forEach(v => {
//         const other = document.getElementById(`video-${v.id}`);
//         if (other && v.id !== id && !other.paused) other.pause();
//       });
//       video.play();
//       setPlaying(id);
//     } else {
//       video.pause();
//       setPlaying(null);
//     }
//   };

//   const toggleFullscreen = (id) => {
//     if (fullscreenId === id) {
//       setFullscreenId(null);
//       // Resume normal slider functionality
//       if (sliderRef.current) {
//         sliderRef.current.slickPlay();
//       }
//     } else {
//       setFullscreenId(id);
//       // Pause slider autoplay if enabled
//       if (sliderRef.current) {
//         sliderRef.current.slickPause();
//       }
//       // Auto-play when entering fullscreen
//       const video = document.getElementById(`video-${id}`);
//       if (video && video.paused) {
//         video.play();
//         setPlaying(id);
//       }
//     }
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2, // Show 4 reels on desktop by default
//     slidesToScroll: 1,
//     arrows: !isMobile,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//     responsive: [
//       {
//         breakpoint: 1400,
//         settings: {
//           slidesToShow: 3,
//         }
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           arrows: false,
//           dots: true
//         }
//       }
//     ],
//     afterChange: (current) => {
//       setCurrentSlide(current);
//       pauseAll();
//       // Auto-play the current slide only on mobile
//       if (isMobile && !fullscreenId) {
//         const video = document.getElementById(`video-${videoData[current].id}`);
//         if (video) {
//           setTimeout(() => {
//             video.play();
//             setPlaying(videoData[current].id);
//           }, 300);
//         }
//       }
//     },
//     beforeChange: (current, next) => {
//       // Pause the current video before sliding on mobile
//       if (isMobile) {
//         const video = document.getElementById(`video-${videoData[current].id}`);
//         if (video && !video.paused) video.pause();
//       }
//     }
//   };

//   return (
//     <section className="reels-wrapper">
//       <div className="reels-inner">
//         <h2 className="reels-heading">Latest Reels</h2>
//         <Slider ref={sliderRef} {...settings}>
//           {videoData.map((v) => (
//             <div key={v.id} className="reel-slide">
//               <div className={`reel-card ${fullscreenId === v.id ? "fullscreen" : ""}`}>
//                 <video
//                   id={`video-${v.id}`}
//                   className="reel-video"
//                   src={v.src}
//                   playsInline
//                   loop
//                   muted
//                 />
//                 <button
//                   className={`control-btn ${playing === v.id ? "playing" : "paused"}`}
//                   onClick={() => togglePlay(v.id)}
//                 >
//                   {playing === v.id ? <FaPause /> : <FaPlay />}
//                 </button>

//                 {/* Fullscreen button for small screens */}
//                 {isMobile && (
//                   <button
//                     className="fullscreen-btn"
//                     onClick={() => toggleFullscreen(v.id)}
//                   >
//                     {fullscreenId === v.id ? <FaTimes /> : <FaExpand />}
//                   </button>
//                 )}

//                 {/* Cancel button for fullscreen mode */}
//                 {fullscreenId === v.id && (
//                   <button
//                     className="cancel-fullscreen-btn"
//                     onClick={() => toggleFullscreen(v.id)}
//                   >
//                     <FaTimes />
//                   </button>
//                 )}

//                 <div className="reel-info">
                  
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// }
import React from 'react'

export default function () {
  return (
    <div></div>
  )
}
