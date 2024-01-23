import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Button, CardContent, Grid, Paper } from '@mui/material';
import './UserPage.css';
import AddRoute from '../AddRoute/AddRoute.jsx';
import { Modal } from 'react-modal';

function UserPage() {
  const [heading, setHeading] = useState('Scenic Byways & Routes in Your Area');
  const [showModal, setShowModal] = useState(false); // New state for modal visibility
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
    width: `${500}px`,
    height: `${400}px`,
  };

  const displayRoute = (routeToDisplay) => {
    history.push(`/details/${routeToDisplay.id}`);
  }

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <main>
      <h2 style={textPlacement}>{heading}</h2>
      <br></br>
      <button style={textPlacement} onClick={handleShowModal}>Post a New Route</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* AddRoute component */}
      <AddRoute showModal={showModal} handleClose={handleCloseModal} />
      {/* Existing routes section */}
      <section className="routes">
        {routes.map(route => {
          return (
            <Paper style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }} key={route.id}>
              <div className='routeItem'>
                <h3>{route.name}</h3>
                <img onClick={(event) => displayRoute(route)} style={imageSizeDown} src={route.map_pic} alt={route.description} />
                <h6>{route.description}</h6>
                <br></br>
                <br></br>
                <button onClick={() => removeRoute(route.id)}>Delete</button>
                <br></br>
                <button>Bookmark Route?</button>
              </div>
            </Paper>
          );
        })}
      </section>
    </main>
  );
}

export default UserPage;

