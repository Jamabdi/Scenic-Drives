import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            id felis metus. Vestibulum et pulvinar tortor. Morbi pharetra lacus
            ut ex molestie blandit. Etiam et turpis sit amet risus mollis
            interdum. Suspendisse et justo vitae metus bibendum fringilla sed
            sed justo. Aliquam sollicitudin dapibus lectus, vitae consequat odio
            elementum eget. Praesent efficitur eros vitae nunc interdum, eu
            interdum justo facilisis. Sed pulvinar nulla ac dignissim efficitur.
            Quisque eget eros metus. Vestibulum bibendum fringilla nibh a
            luctus. Duis a sapien metus.
          </p>

          <p>
            Praesent consectetur orci dui, id elementum eros facilisis id. Sed
            id dolor in augue porttitor faucibus eget sit amet ante. Nunc
            consectetur placerat pharetra. Aenean gravida ex ut erat commodo, ut
            finibus metus facilisis. Nullam eget lectus non urna rhoncus
            accumsan quis id massa. Curabitur sit amet dolor nisl. Proin
            euismod, augue at condimentum rhoncus, massa lorem semper lacus, sed
            lobortis augue mi vel felis. Duis ultrices sapien at est convallis
            congue.
          </p>

          <p>
            Fusce porta diam ac tortor elementum, ut imperdiet metus volutpat.
            Suspendisse posuere dapibus maximus. Aliquam vitae felis libero. In
            vehicula sapien at semper ultrices. Vivamus sed feugiat libero. Sed
            sagittis neque id diam euismod, ut egestas felis ultricies. Nullam
            non fermentum mauris. Sed in enim ac turpis faucibus pretium in sit
            amet nisi.
          </p>
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































// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { Card, CardContent, Grid, Paper } from '@mui/material';
// import './LandingPage.css';

// // CUSTOM COMPONENTS
// import RegisterForm from '../RegisterForm/RegisterForm';

// function LandingPage() {
//   const [heading, setHeading] = useState('Scenic Byways & Routes in Your Area');
//   const history = useHistory();

//   const onLogin = (event) => {
//     history.push('/login');
//   };

//   const dispatch = useDispatch();
//   const routes = useSelector(store => store.routes);

//   useEffect(() => {
//     dispatch({ type: 'FETCH_ROUTES' });
//   }, []);


//   const removeRoute = (id) => {
//     dispatch({ type: 'DELETE_ROUTE', payload: id });
//   }


//   const textPlacement = {
//     textAlign: 'center',
//   };

//   const imageSizeDown = {
//     width: `${500}px`, // Set the desired width
//     height: `${400}px`, // Set the desired height
//   };

//   const displayRoute = (routeToDisplay) => {
//     // dispatch({type:'SET_ROUTE_DETAILS', payload: routeToDisplay})
//     history.push(`/details/${routeToDisplay.id}`);
//   }

//   return (

//     <main>
//       <h2 style={textPlacement}>{heading}</h2>
//       <br></br>
//       <button style ={textPlacement} onClick={() => history.push('/add')}>Post a New Route</button>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <section className="routes">
//         {routes.map(route => {
//           return (
//             <div className='routeItem' key={route.id}>
//               <h3>{route.name}</h3>
//               <img onClick={(event) => displayRoute(route)} style={imageSizeDown} src={route.map_pic} alt={route.description} />
//               <h6>{route.description}</h6>
//               <br></br>
//               <br></br>
//               <button onClick={() => removeRoute(route.id)}>Delete</button>
//               <br></br>
//               <button>Bookmark Route?</button>
//             </div>
//           );
//         })}
//       </section>
//     </main>
//   );
// }

// export default LandingPage;
