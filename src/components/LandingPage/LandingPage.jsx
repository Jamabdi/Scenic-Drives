import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
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
<h2 style = {textPlacement}>{heading}</h2>
      <section className="routes">
        {routes.map(route => {
          return (
            <div data-testid='routeItem' key={route.id}>
              <h3>{route.name}</h3>
              <img onClick = {(event) => displayRoute(route)} style = {imageSizeDown} src={route.map_pic} alt={route.description}/>
              <h6>{route.description}</h6>
            </div>
          );
        })}
      </section>












    <div className="container">

      <div className="grid">
        <div className="grid-col grid-col_8">
         
        </div>
        <div className="grid-col grid-col_4">
          {/* <RegisterForm /> */}

          <center>
            {/* <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button> */}
          </center>
        </div>
      </div>
    </div>
    </main>
  );
}

export default LandingPage;
