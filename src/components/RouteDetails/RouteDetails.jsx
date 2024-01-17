import {useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';


function RouteDetails(){
    const route = useSelector(store => store.selectedRoute);
    const {routeId} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'FETCH_ROUTE_DETAILS', payload: routeId});
    }, [routeId]);




    const imageSizeDown = {
        width: `${500}px`, // Set the desired width
        height: `${400}px`, // Set the desired height
       };



    return (
        <div>
            <h3>{route.name}</h3>
            <img  style = {imageSizeDown} src={route.map_pic} alt={route.name}></img>
            <p>{route.description}</p>
        </div>
    )
}

export default RouteDetails;