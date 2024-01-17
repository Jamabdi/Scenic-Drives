//Post Reducer
const deleteRoute = (state = [], action) => {
    switch (action.type) {
      case 'DELETE_ROUTE':
        return action.payload;
      default:
        return state;
    }
  }



export default deleteRoute;