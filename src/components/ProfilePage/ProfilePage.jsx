import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Button, CardContent, Grid, Paper } from '@mui/material';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function Profile() {
  const [heading, setHeading] = useState('Your Profile');


  const dispatch = useDispatch();
  const routes = useSelector(store => store.routes);

  useEffect(() => {
    dispatch({ type: 'FETCH_ROUTES' });
  }, []);

  const imageSizeDown = {
    width: `${400}px`,
    height: `${300}px`,
  };

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
<main className='body'>
<h2 style={textPlacement}>{heading}</h2>
      <br></br>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
      </div>
      <br></br>
      <br></br>
      <section className="container">
        {routes.map(route => {
          return (
               <Card key={route.id} className="card" elevation={3}>
                <CardContent onClick={(event) => displayRoute(route)}>
                  <div className='routeItem'>
                    <h3 style={textPlacement}>{route.name}</h3>
                    <img style={imageSizeDown} src={route.map_pic} alt={route.description} />
                    <h6 style={textPlacement}>{route.description}</h6>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                    </div>
                    <br></br>
                    <br></br>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <Button onClick={() => removeRoute(route.id)} variant="contained" color="secondary">
                      Delete
                    </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
          );
        })}
      </section>
    </main>






//     <div className="container">
//       <h1 style = {textPlacement}>Welcome Jama! </h1>
// <br></br>
// <br></br>
// <h3 style = {textLeft} > Your Posted Routes</h3>
// <br></br>
// <button>Delete Your Route</button>
// {/* <alert>Are You Sure You Want to Delete?</alert> */}
// <h3 style = {textRight} > Your Bookmarked Routes</h3>
// <br></br>
// {/* <button style = {textRight} >Remove Bookmarked Route</button> */}
//     </div>
  );
}

export default Profile;
