//Edit Reducer
const editRoute = (state = [], action) => {
    switch (action.type) {
      case 'EDIT_ROUTE':
        return action.payload;
      default:
        return state;
    }
  }



export default editRoute;