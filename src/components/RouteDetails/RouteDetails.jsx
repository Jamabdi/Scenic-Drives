import {useSelector} from 'react-redux';


function RouteDetails(){
    const route = useSelector(store => store.selectedRouteDetails);
    return (
        <div>
            <h3>{route.name}</h3>
            <img src={route.map_pic} alt={route.name}></img>
            <p>{route.description}</p>
        </div>
    )
}

export default RouteDetails;