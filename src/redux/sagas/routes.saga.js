import axios from "axios"
import { put, takeLatest } from "redux-saga/effects";

function* getRoutes() {
    try {
        const response = yield axios.get('/api/routes');
        const action = { type: 'GET_ROUTES', payload: response.data };
        yield put(action);
    } catch (error) {
        console.error('Error fetching routes:', error);
        alert('Something went wrong.');
        throw error;
    }
}




function* routesSaga() {
yield takeLatest('FETCH_ROUTESS', getRoutes);   
};

export default routesSaga