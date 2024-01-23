import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, CardContent } from '@mui/material';
import './ProfilePage.css'; // Import your CSS file

function Profile() {
  const [heading, setHeading] = useState('Your Profile');

  const dispatch = useDispatch();
  const routes = useSelector(store => store.routes);

  useEffect(() => {
    dispatch({ type: 'FETCH_ROUTES' });
  }, []);


  const removeRoute = async (id) => {
    // Dispatch action to delete route
  dispatch({ type: 'DELETE_ROUTE', payload: id });
  };

  const imageSizeDown = {
    width: `${400}px`,
    height: `${300}px`,
  };

  const textPlacement = {
    textAlign: 'center',
  };

  return (
    <main className='body'>
      <br></br>
      <h2 style={textPlacement}>{heading}</h2>
      <br></br>
      <br></br>
        <div className="container">
                 {/* <h2 className='routes-title' >Your Routes</h2> */}
        <section className="card-container">
          {routes.map(route => (
            <Card key={route.id} className="card" elevation={3}>
              <CardContent>
                <div className='routeItem'>
                  <h3 style={textPlacement}>{route.name}</h3>
                  <img style={imageSizeDown} src={route.map_pic} alt={route.description} />
                  <h6 style={textPlacement}>{route.description}</h6>
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
          ))}
        </section>
      </div>
    </main>
  );
}

export default Profile;








































