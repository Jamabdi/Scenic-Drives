import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function Profile() {

  const textPlacement = {
    textAlign: 'center',
  };

  const textLeft = {
    textAlign: 'left',
  };

  const textRight = {
    textAlign: 'right',
  };

  return (
    <div className="container">
      <h1 style = {textPlacement}>Welcome Jama! </h1>
<br></br>
<h3 style = {textLeft} > Your Posted Routes</h3>
<br></br>
<button>Delete Your Route</button>
{/* <alert>Are You Sure You Want to Delete?</alert> */}
<h3 style = {textRight} > Your Bookmarked Routes</h3>
<br></br>
{/* <button style = {textRight} >Remove Bookmarked Route</button> */}
    </div>
  );
}

export default Profile;
