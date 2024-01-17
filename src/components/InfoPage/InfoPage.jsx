import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function Profile() {

  const textPlacement = {
    textAlign: 'center',
  };


  return (
    <div className="container">
      <h1 style = {textPlacement}>Welcome Jama! </h1>
    </div>
  );
}

export default Profile;
