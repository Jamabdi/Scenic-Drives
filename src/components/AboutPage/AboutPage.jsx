import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {


  const textPlacement = {
    textAlign: 'center',
  };


  return (
    <div className="container">
      <div>
      <p style = {textPlacement}>Welcome to ScenicDrives.com: Your Ultimate Destination for Scenic Overpasses and Windy Roads About Us:</p>
      <p style = {textPlacement}>RoadTripper Hub is a dedicated online platform for driving and motorcycle enthusiasts who crave the thrill of exploring the open road.</p>
      <p style = {textPlacement}>Our mission is to connect passionate travelers with the best scenic routes,
         picturesque overpasses, and winding roads, ensuring unforgettable journeys for every adventure seeker.</p>
      </div>
    </div>
  );
}

export default AboutPage;
