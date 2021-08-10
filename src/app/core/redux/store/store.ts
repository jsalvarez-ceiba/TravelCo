import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../reducers/index';
import {reservationReducer} from '../reducers/reservationReducer';
import thunk from 'redux-thunk';

declare const window: any;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);



/* export const store = createStore(reservationReducer); */

/* export default store; */
