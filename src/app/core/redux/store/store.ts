import { applyMiddleware,  createStore } from 'redux';

import placesReducer from '../reducers/places/placesReducer';
import thunk from 'redux-thunk';

declare const window: any;



export const store = createStore(
  placesReducer,
  applyMiddleware(thunk)
);






