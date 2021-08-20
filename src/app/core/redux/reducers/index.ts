import { combineReducers } from 'redux';
import reservationReducer from './reservations/reservationReducer';
import placesReducer from './places/placesReducer';

const rootReducer = combineReducers({
    reservationReducer,
    //placesReducer,
});

export default rootReducer;