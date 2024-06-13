import React from 'react';

const HeroSection = () => {
  return (
    <>
      <video style={{position:'absolute',}}  width="100%" height="auto"  muted loop autoPlay>
        <source src="/carvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default HeroSection;