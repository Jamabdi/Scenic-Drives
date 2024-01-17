//Post Reducer
const postRoute = (state = [], action) => {
    switch (action.type) {
      case 'POST_ROUTE':
        return action.payload;
      default:
        return state;
    }
  }



export default postRoute;