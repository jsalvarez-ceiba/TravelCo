import { PlacesState } from '../../model/PlacesState';
/* import Places from '../../../../feature/Places/models/Places.model'; */
import { Actions, SET_PLACES } from '../../actions/places/placesTypes';

const InitialState: PlacesState = {
  places: [],
};

const placesReducer = (state = InitialState, action: Actions): PlacesState => {
  switch (action.type) {
    case SET_PLACES:
      return {
        ...state,
        places: action.payload
      } 
    default:
      return state;
  }
}
export default placesReducer;
