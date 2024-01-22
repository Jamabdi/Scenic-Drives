import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, CardContent, Grid, Paper } from '@mui/material';
// import './LandingPage.css';

// CUSTOM COMPONENTS
// import RegisterForm from '../RegisterForm/RegisterForm';

function UserPage() {
  const [heading, setHeading] = useState('Scenic Byways & Routes in Your Area');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  const dispatch = useDispatch();
  const routes = useSelector(store => store.routes);

  useEffect(() => {
    dispatch({ type: 'FETCH_ROUTES' });
  }, []);


  const removeRoute = (id) => {
    dispatch({ type: 'DELETE_ROUTE', payload: id });
  }


  const textPlacement = {
    textAlign: 'center',
  };

  const imageSizeDown = {
    width: `${500}px`, // Set the desired width
    height: `${400}px`, // Set the desired height
  };

  const displayRoute = (routeToDisplay) => {
    // dispatch({type:'SET_ROUTE_DETAILS', payload: routeToDisplay})
    history.push(`/details/${routeToDisplay.id}`);
  }

  return (

    <main>
      <h2 style={textPlacement}>{heading}</h2>
      <br></br>
      <button style ={textPlacement} onClick={() => history.push('/add')}>Post a New Route</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section className="routes">
        {routes.map(route => {
          return (
            <div className='routeItem' key={route.id}>
              <h3>{route.name}</h3>
              <img onClick={(event) => displayRoute(route)} style={imageSizeDown} src={route.map_pic} alt={route.description} />
              <h6>{route.description}</h6>
              <br></br>
              <br></br>
              <button onClick={() => removeRoute(route.id)}>Delete</button>
              <br></br>
              <button>Bookmark Route?</button>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default UserPage;
