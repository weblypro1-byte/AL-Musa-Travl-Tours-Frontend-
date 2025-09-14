import React from 'react';

const VideoCard = ({ video }) => {
  return (
    <article className="video-card">
      <div className="video-thumb">
        <video
          key={video.src}
          src={video.src}
          controls
          playsInline
          preload="auto"
          poster={video.thumbnail}
          className="reel-video"
        />
        <div className="overlay">
          <span className="time">{video.length}</span>
        </div>
      </div>
      <div className="video-info">
        <h3 className="video-title">{video.title}</h3>
        <span className="video-views">{video.views}</span>
      </div>
    </article>
  );
};

export default VideoCard;