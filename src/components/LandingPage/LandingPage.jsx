import React, { useState } from 'react';
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

  // const dispatch = useDispatch();
  // const movies = useSelector(store => store.routes);

  // useEffect(() => {
  //   dispatch({ type: 'GET_ROUTES' });
  // }, []);


  // const displayRoutes = (routesToDisplay) => {
  //   console.log(movieToDisplay);
  // dispatch({type:'ROUTE_DETAILS', payload: routesToDisplay})
  // history.push(`/details/${routesToDisplay.id}`);
  // };


  const textPlacement = {
    textAlign: 'center',
  };

  return (
    <div className="container">
      <h2 style = {textPlacement}>{heading}</h2>

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
  );
}

export default LandingPage;
