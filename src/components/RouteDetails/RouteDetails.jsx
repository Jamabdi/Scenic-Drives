// import {useSelector, useDispatch} from 'react-redux';
// import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
// import { useEffect } from 'react';
// import AddRoute from '../AddRoute/AddRoute.jsx'
// import LandingPage from '../LandingPage/LandingPage.jsx';
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


// function RouteDetails(){
//     const route = useSelector(store => store.selectedRoute);
//     const {routeId} = useParams();
//     const dispatch = useDispatch();
//     const history = useHistory();

//     useEffect(() => {
//         dispatch({type: 'FETCH_ROUTE_DETAILS', payload: routeId});
//     }, [routeId]);



  
//     const removeRoute = (id) => {
//         dispatch({ type: 'DELETE_ROUTE', payload: id});
//       }




//     const imageSizeDown = {
//         width: `${800}px`, // Set the desired width
//         height: `${700}px`, // Set the desired height
//        };



//     return (
//         <div>
//             <h3>{route.name}</h3>
//             <img  style = {imageSizeDown} src={route.map_pic} alt={route.name}></img>
//             <p>{route.description}</p>
//         </div>
//     )
// }

// export default RouteDetails;




import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';
import AddRoute from '../AddRoute/AddRoute.jsx';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Card, CardContent, Button } from '@mui/material';
import './RouteDetails.css';

function RouteDetails() {
  const route = useSelector((store) => store.selectedRoute);
  const { routeId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_ROUTE_DETAILS', payload: routeId });
  }, [routeId]);

  const removeRoute = (id) => {
    dispatch({ type: 'DELETE_ROUTE', payload: id });
  };

  const imageSizeDown = {
    width: `${800}px`,
    height: `${700}px`,
  };


  const textPlacement = {
    textAlign: 'center',
  };

  return (
    <div>
      <Card className="detailsCard">
        <CardContent>
          <h3>{route.name}</h3>
          <img style={imageSizeDown} src={route.map_pic} alt={route.name}></img>
          <p>{route.description}</p>
          {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
          <Button variant="contained" color="secondary" onClick={() => removeRoute(route.id)}>
            Delete Route
          </Button>
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
}

export default RouteDetails;
