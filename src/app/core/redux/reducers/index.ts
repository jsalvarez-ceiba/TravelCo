import { combineReducers } from 'redux';
import {reservationReducer} from './reservationReducer';

const rootReducer = combineReducers({
    reservationReducer
});

export default rootReducer;