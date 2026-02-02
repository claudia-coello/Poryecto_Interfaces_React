// import "./VideoBackGround.css"
const VideoBackground = ({ src, zIndex = 0 }) => {
  return (
    <video
      className="video-bg"
      style={{ zIndex }}
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default VideoBackground;
