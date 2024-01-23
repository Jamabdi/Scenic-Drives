import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome to ScenicDrives');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };


  const textPlacement = {
    textAlign: 'center',
  };

  const headingPlacement = {
    textAlign: 'center',
    textIndent: -550,
  }

  return (
    <div className="container">
      <h1 style={headingPlacement}>{heading}</h1>
      <div className="grid">
        <div className="grid-col grid-col_8">
          <h2 style={textPlacement}>
             Your Ultimate Destination for Scenic Overpasses and Windy Roads.
          </h2>
          <br></br>
          <br></br>

          <h3 style = {textPlacement}>About Us:</h3>
          <h4 style = {textPlacement}>
            Scenic Drives is a dedicated online platform for driving and motorcycle enthusiasts who crave the thrill of exploring the open road.

            Our mission is to connect passionate travelers with the best scenic routes,
            picturesque overpasses, and winding roads, ensuring unforgettable journeys for every adventure seeker.
          </h4>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;































