import axios from "axios"
import { put, takeLatest, takeEvery } from "redux-saga/effects";
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';





function* fetchAllRoutes() {
    try {
      // Get the routes:
      const routesResponse = yield axios.get('/api/routes');
      // Set the value of the routes reducer:
      yield put({
        type: 'SET_ROUTES',
        payload: routesResponse.data
      });
    } catch (error) {
      console.log('fetchAllRoutes error:', error);
    }
  }


function* fetchRouteDetails(action){
    try{
        const route = yield axios.get(`/api/routes/${action.payload}`)
        yield put ({type: 'SET_ROUTE_DETAILS', payload: route.data})
    } catch(e){
        console.log(e);
    }
}





//   The rootSaga generator function
  function* routesSaga() {
yield takeLatest('FETCH_ROUTE_DETAILS', fetchRouteDetails),
yield takeLatest('FETCH_ROUTES', fetchAllRoutes); 
};

export default routesSaga