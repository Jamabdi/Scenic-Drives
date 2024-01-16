


const routesReducer = (state = [], action) => {
    if (action.type === 'GET_ROUTES') {
        return action.payload;
    }
    return state;
};


export default routesReducer;