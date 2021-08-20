import { combineReducers } from 'redux';
import placesReducer from './places/placesReducer';

const rootReducer = combineReducers({
    
    placesReducer,
});

export default rootReducer;