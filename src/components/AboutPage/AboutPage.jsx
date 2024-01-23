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
    <>
    <div style={textPlacement} className='Technologies'>
    <p>Technologies Used</p>
          <ul>
            <li>React</li>
            <li>Javascript</li>
            <li>Cloudinary</li>
            <li>Global Style</li>
            <li>PostgreSQL</li>
            <li>Material UI</li>
            <li>CSS Flexbox</li>
            <li>Axios</li>
            <li>Redux</li>
            <li>Sagas</li>
          </ul>
    </div>




    <div style = {textPlacement} className="container">
      <div>
      <p>Welcome to ScenicDrives.com: Your Ultimate Destination for Scenic Overpasses and Windy Roads About Us:</p>
      <p>RoadTripper Hub is a dedicated online platform for driving and motorcycle enthusiasts who crave the thrill of exploring the open road.</p>
      <p>Our mission is to connect passionate travelers with the best scenic routes,
         picturesque overpasses, and winding roads, ensuring unforgettable journeys for every adventure seeker.</p>
      </div>
    </div>
    </>
  );
}

export default AboutPage;
