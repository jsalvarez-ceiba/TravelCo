import { applyMiddleware, compose, createStore } from 'redux';
/* import rootReducer from '../reducers/index'; */
import placesReducer from '../reducers/places/placesReducer';
import thunk from 'redux-thunk';

declare const window: any;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  placesReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;

