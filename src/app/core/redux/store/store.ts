import { applyMiddleware, /* compose, */ createStore } from 'redux';
/* import rootReducer from '../reducers/index'; */
import placesReducer from '../reducers/places/placesReducer';
import thunk from 'redux-thunk';

declare const window: any;

/* const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 */
export const store = createStore(
  placesReducer,
  applyMiddleware(thunk)
);



/* export const store = createStore(reservationReducer); */

/* export default store; */
