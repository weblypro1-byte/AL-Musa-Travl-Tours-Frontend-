
// import React, { useState } from "react";
// import { Player } from "video-react";
// import "./VideoSection.scss";

// const Reels = () => {
//   const [videos] = useState([
//     {
//       id: 1,
//       src: "https://res.cloudinary.com/dslbieqdx/video/upload/v1757780851/VID-20250912-WA0024_miwwi1.mp4",
//       poster: "https://res.cloudinary.com/dslbieqdx/video/upload/so_2/v1757780851/VID-20250912-WA0024_miwwi1.jpg",
//     },
//     {
//       id: 2,
//       src: "https://res.cloudinary.com/dslbieqdx/video/upload/v1757780874/VID-20250912-WA0025_a68mi7.mp4",
//       poster: "https://res.cloudinary.com/dslbieqdx/video/upload/so_2/v1757780874/VID-20250912-WA0025_a68mi7.jpg",
//     },
//     {
//       id: 3,
//       src: "https://res.cloudinary.com/dslbieqdx/video/upload/v1757780875/VID-20250912-WA0026_npiq41.mp4",
//       poster: "https://res.cloudinary.com/dslbieqdx/video/upload/so_2/v1757780875/VID-20250912-WA0026_npiq41.jpg",
//     },
//   ]);

//   return (
//     <div className="reels-wrapper">
//       <div className="reels-container">
//         {videos.map((video) => (
//           <div key={video.id} className="reel-item">
//             <Player playsInline poster={video.poster} src={video.src} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Reels;




import React, { useState } from "react";
import { Player } from "video-react";
import "./VideoSection.scss";

const Reels = () => {
  const [videos] = useState([
    {
      id: 1,
      src: "https://res.cloudinary.com/dslbieqdx/video/upload/v1757780851/VID-20250912-WA0024_miwwi1.mp4",
      poster:
        "https://res.cloudinary.com/dslbieqdx/image/upload/so_2/v1757780851/VID-20250912-WA0024_miwwi1.jpg",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dslbieqdx/video/upload/v1757780874/VID-20250912-WA0025_a68mi7.mp4",
      poster:
        "https://res.cloudinary.com/dslbieqdx/image/upload/so_2/v1757780874/VID-20250912-WA0025_a68mi7.jpg",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dslbieqdx/video/upload/v1757780875/VID-20250912-WA0026_npiq41.mp4",
      poster:
        "https://res.cloudinary.com/dslbieqdx/image/upload/so_2/v1757780875/VID-20250912-WA0026_npiq41.jpg",
    },
  ]);

  return (
    <div className="reels-wrapper">
      {/* Centered Heading */}
      <div className="reels-heading">
        <h2>Our Travel Reels</h2>
        <p>Experience unforgettable journeys through our short reels.</p>
      </div>

      {/* Video Grid */}
      <div className="reels-container">
        {videos.map((video) => (
          <div key={video.id} className="reel-item">
            <Player playsInline poster={video.poster} src={video.src} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reels;
