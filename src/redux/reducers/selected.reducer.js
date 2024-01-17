// Selected route reducer for detailed expansion

const selectedRoute = (state = {},action ) => {
    switch (action.type) {
        case 'SET_ROUTE_DETAILS':
            return action.payload;
            default: 
            return state;
    }
}



export default selectedRoute;