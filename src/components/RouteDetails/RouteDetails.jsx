import {useSelector, useDispatch} from 'react-redux';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';
import AddRoute from '../AddRoute/AddRoute.jsx'
import LandingPage from '../LandingPage/LandingPage.jsx';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function RouteDetails(){
    const route = useSelector(store => store.selectedRoute);
    const {routeId} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({type: 'FETCH_ROUTE_DETAILS', payload: routeId});
    }, [routeId]);



  
    const removeRoute = (id) => {
        dispatch({ type: 'DELETE_ROUTE', payload: id});
      }




    const imageSizeDown = {
        width: `${500}px`, // Set the desired width
        height: `${400}px`, // Set the desired height
       };



    return (
        <div>
            <h3>{route.name}</h3>
            <img  style = {imageSizeDown} src={route.map_pic} alt={route.name}></img>
            <p>{route.description}</p>
            {/* <Link to = {`/post/${route.id}`}>Post New Route</Link> */}


            <button onClick = {()=>history.push('/add')}>Post a New Route</button>
            <br></br>
            <br></br>
            <button onClick={() => removeRoute(route.id)}>Delete</button>
            {/* <AddRoute/> */}
        </div>
    )
}

export default RouteDetails;