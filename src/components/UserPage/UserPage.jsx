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
    width: `${400}px`,
    height: `${300}px`,
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
      <Button className='postButton' variant="contained" color="primary" onClick={handleShowModal}>Post a New Route</Button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* AddRoute component */}
      <AddRoute showModal={showModal} handleClose={handleCloseModal} />
      {/* Existing routes section */}
      <section className="container">
        {routes.map(route => {
          return (
            // <Paper key={route.id} elevation={3} style={{ margin: '10px', padding: '20px' }}>
               <Card key={route.id} className="card" elevation={3}>
                <CardContent>
                  <div className='routeItem'>
                    <h3 style={textPlacement}>{route.name}</h3>
                    <img onClick={(event) => displayRoute(route)} style={imageSizeDown} src={route.map_pic} alt={route.description} />
                    <h6 style={textPlacement}>{route.description}</h6>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                    <Button variant="contained" color="primary">
                      Bookmark Route
                    </Button>
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
  );
}

export default UserPage;





























