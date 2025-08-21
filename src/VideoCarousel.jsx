


// import React, { useRef, useState } from "react";
// import Slider from "react-slick";
// import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from "react-icons/fa";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./VideoCarousel.scss";

// const videos = [
//     {
//       id: 1,
//       type: "mp4",
//       src: "https://res.cloudinary.com/du3tkzdhe/video/upload/v1755752817/AQNWcxlDYSSZgKWuWam3FoWnQBwhJTIV7V4b3jtg07qF8xX9ZqQtDZo7hh2DYcsyLKFhqC4n9GaPxEYtsVXVH13L_tcllfj.mp4",
//     },
//     {
//       id: 2,
//       type: "mp4",
//       src: "https://res.cloudinary.com/du3tkzdhe/video/upload/v1755752816/AQMIDBn-lHsqFmm6ViLzpZcxj3_eC0xnkr8Ch43lL0iOcmKEoal9VwRAVpn4FuX7pRC3eAzbVCXewHkQp_z2quB5_jixjli.mp4",
//       poster: "https://img.freepik.com/premium-psd/instagram-reels-cover-youtube-short-video-thumbnail-design_475351-778.jpg",
//     },
//     {
//       id: 3,
//       type: "mp4",
//       src: "https://res.cloudinary.com/du3tkzdhe/video/upload/v1755752817/AQNWcxlDYSSZgKWuWam3FoWnQBwhJTIV7V4b3jtg07qF8xX9ZqQtDZo7hh2DYcsyLKFhqC4n9GaPxEYtsVXVH13L_tcllfj.mp4",
//       poster: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&h=800&fit=crop",
//     },
//     {
//       id: 4,
//       type: "mp4",
//       src: "https://res.cloudinary.com/du3tkzdhe/video/upload/v1755752816/AQMIDBn-lHsqFmm6ViLzpZcxj3_eC0xnkr8Ch43lL0iOcmKEoal9VwRAVpn4FuX7pRC3eAzbVCXewHkQp_z2quB5_jixjli.mp4",
//       poster: "https://img.freepik.com/premium-psd/business-instagram-reels-cover-youtube-thumbnail-design_475351-769.jpg",
//     },
// ];


// const VideoCarousel = () => {
//   const sliderRef = useRef(null);
//   const videoRefs = useRef([]);
//   const [playingId, setPlayingId] = useState(null);

//   const settings = {
//     arrows: false,
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 1366, settings: { slidesToShow: 4 } },
//       { breakpoint: 992, settings: { slidesToShow: 3 } },
//       { breakpoint: 600, settings: { slidesToShow: 2 } },
//     ],
//   };

//   const playVideo = (index) => {
//     const v = videoRefs.current[index];
//     if (!v) return;

//     videoRefs.current.forEach((el, i) => {
//       if (el && i !== index && el.tagName === "VIDEO") {
//         el.pause();
//         // el.controls = false;
//       }
//     });

//     if (v.tagName === "VIDEO") {
//       // v.muted = false;
//       v.muted = false;
//       v.controls = false;
//       v.play().catch(() => {
//         v.muted = true;
//         v.play();
//       });
//     }

//     setPlayingId(videos[index].id);
//   };

//   const handlePause = (index) => {
//     const v = videoRefs.current[index];
//     if (!v) return;
//     if (v.tagName === "VIDEO") v.controls = false;
//     setPlayingId(null);
//   };

//   return (
//     <div className="video-carousel">
//       <div className="carousel-header">
//         <h2 className="slider-subtext">Our Latest Videos</h2>
//         <div className="line"></div>
//         <div className="arrow-controls">
//           <button
//             className="arrow-box"
//             aria-label="Previous"
//             onClick={() => sliderRef.current?.slickPrev()}
//           >
//             <FaChevronLeft />
//           </button>
//           <button
//             className="arrow-box"
//             aria-label="Next"
//             onClick={() => sliderRef.current?.slickNext()}
//           >
//             <FaChevronRight />
//           </button>
//         </div>
//       </div>

//       {/* <Slider ref={sliderRef} {...settings}>
//         {videos.map((item, index) => (
//           <div key={item.id} className="video-card">
//             <div className="video-frame">
//               {item.type === "mp4" ? (
//                 <video
//                   ref={(el) => (videoRefs.current[index] = el)}
//                   src={item.src}
//                   poster={item.poster}
//                   className="video-el"
//                   preload="metadata"
//                   playsInline
//                   muted={false}   // 🔊 start with volume
//   controls={false} // 🚫 no native controls
//                   onPause={() => handlePause(index)}
//                   onEnded={() => handlePause(index)}
//                 />
//               ) : (
//                 <iframe
//                   src={item.src}
//                   title={`video-${item.id}`}
//                   width="100%"
//                   height="100%"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="video-el"
//                 />
//               )}
//               {item.type === "mp4" && playingId !== item.id && (
//                 <button
//                   className="play-overlay"
//                   aria-label="Play"
//                   onClick={() => playVideo(index)}
//                 >
//                   <FaPlay className="play-icon" />
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }; */}
//      <Slider ref={sliderRef} {...settings}>
// {videos.map((item, index) => {
//   const isPlaying = playingId === item.id;

//   return (
//     <div key={item.id} className="video-card">
//       <div className="video-frame">
//         {item.type === "mp4" ? (
//           <video
//             ref={(el) => (videoRefs.current[index] = el)}
//             src={item.src}
//             poster={item.poster}
//             className="video-el"
//             preload="metadata"
//             playsInline
//             onPause={() => handlePause(index)}
//             onEnded={() => handlePause(index)}
//           />
//         ) : (
//           <iframe
//             src={item.src}
//             title={`video-${item.id}`}
//             width="100%"
//             height="100%"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             className="video-el"
//           />
//         )}

//         {/* Center overlay button */}
//         <button
//           className="play-overlay"
//           aria-label={isPlaying ? "Pause" : "Play"}
//           onClick={() => {
//             const v = videoRefs.current[index];
//             if (!v) return;

//             if (isPlaying) {
//               v.pause();
//               setPlayingId(null);
//             } else {
//               // pause others first
//               videoRefs.current.forEach((el, i) => {
//                 if (el && i !== index) el.pause();
//               });
//               v.play();
//               setPlayingId(item.id);
//             }
//           }}
//         >
//           {isPlaying ? <FaPause className="play-icon" /> : <FaPlay className="play-icon" />}
//         </button>

//         {/* Bottom control bar */}
//         <div className="video-controls">
//           <button
//             onClick={() => {
//               const v = videoRefs.current[index];
//               if (!v) return;
//               if (v.paused) {
//                 v.play();
//                 setPlayingId(item.id);
//               } else {
//                 v.pause();
//                 setPlayingId(null);
//               }
//             }}
//           >
//             {isPlaying ? <FaPause /> : <FaPlay />}
//           </button>

//           <input
//             type="range"
//             min="0"
//             max="1"
//             step="0.05"
//             defaultValue="1"
//             onChange={(e) => {
//               const v = videoRefs.current[index];
//               if (v) v.volume = e.target.value;
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// })}
// </Slider>
//     </div>
//   );
// }; 

// export default VideoCarousel;
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./VideoCarousel.scss";

const videos = [
  { id: 1, type: "mp4", src: "https://res.cloudinary.com/du3tkzdhe/video/upload/v1755752817/AQNWcxlDYSSZgKWuWam3FoWnQBwhJTIV7V4b3jtg07qF8xX9ZqQtDZo7hh2DYcsyLKFhqC4n9GaPxEYtsVXVH13L_tcllfj.mp4" },
  { id: 2, type: "mp4", src: "https://res.cloudinary.com/du3tkzdhe/video/upload/v1755752816/AQMIDBn-lHsqFmm6ViLzpZcxj3_eC0xnkr8Ch43lL0iOcmKEoal9VwRAVpn4FuX7pRC3eAzbVCXewHkQp_z2quB5_jixjli.mp4", poster: "https://img.freepik.com/premium-psd/instagram-reels-cover-youtube-short-video-thumbnail-design_475351-778.jpg" },
  { id: 3, type: "mp4", src: "https://res.cloudinary.com/du3tkzdhe/video/upload/v1755752817/AQNWcxlDYSSZgKWuWam3FoWnQBwhJTIV7V4b3jtg07qF8xX9ZqQtDZo7hh2DYcsyLKFhqC4n9GaPxEYtsVXVH13L_tcllfj.mp4", poster: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&h=800&fit=crop" },
  { id: 4, type: "mp4", src: "https://res.cloudinary.com/du3tkzdhe/video/upload/v1755752816/AQMIDBn-lHsqFmm6ViLzpZcxj3_eC0xnkr8Ch43lL0iOcmKEoal9VwRAVpn4FuX7pRC3eAzbVCXewHkQp_z2quB5_jixjli.mp4", poster: "https://img.freepik.com/premium-psd/business-instagram-reels-cover-youtube-thumbnail-design_475351-769.jpg" },
];

const VideoCarousel = () => {
  const sliderRef = useRef(null);
  const videoRefs = useRef([]);
  const [playingId, setPlayingId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1366, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
    ],
  };

  const togglePlay = (index, item) => {
    const v = videoRefs.current[index];
    if (!v) return;

    // Pause other videos
    videoRefs.current.forEach((el, i) => {
      if (el && i !== index) el.pause();
    });

    if (v.paused) {
      v.play();
      setPlayingId(item.id);
    } else {
      v.pause();
      setPlayingId(null);
    }
  };

  return (
    <div className="video-carousel">
      <div className="carousel-header">
        <h2 className="slider-subtext">Our Latest Videos</h2>
        <div className="line"></div>
        <div className="arrow-controls">
          <button className="arrow-box" onClick={() => sliderRef.current?.slickPrev()}><FaChevronLeft /></button>
          <button className="arrow-box" onClick={() => sliderRef.current?.slickNext()}><FaChevronRight /></button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {videos.map((item, index) => {
          const isPlaying = playingId === item.id;
          const isHovered = hoveredId === item.id;

          return (
            <div key={item.id} className="video-card">
              <div
                className="video-frame"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.src}
                  poster={item.poster}
                  className="video-el"
                  preload="metadata"
                  playsInline
                  muted
                  onPause={() => setPlayingId(null)}
                  onEnded={() => setPlayingId(null)}
                />

                {/* Center overlay button */}
                {(isHovered || !isPlaying) && (
                  <button
                    className="play-overlay"
                    onClick={() => togglePlay(index, item)}
                  >
                    {isPlaying ? <FaPause className="play-icon" /> : <FaPlay className="play-icon" />}
                  </button>
                )}

                {/* Bottom controls */}
                <div className="video-controls">
                  <button onClick={() => togglePlay(index, item)}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    defaultValue="1"
                    onChange={(e) => {
                      const v = videoRefs.current[index];
                      if (v) v.volume = e.target.value;
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default VideoCarousel;
