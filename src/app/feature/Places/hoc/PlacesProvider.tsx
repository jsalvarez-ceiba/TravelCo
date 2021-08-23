import { getPlaces } from '../../../core/redux/actions/places/placesActions';
import { GeneralState } from '../../../core/redux/model/GeneralState';
/* import { Home } from '../../Home/pages/Home'; */
import { connect } from 'react-redux';
import {Places} from '../pages/Places';

const mapStateToProps = (state: GeneralState) => {
  return state.places;
};

export const PlacesProvider = connect(mapStateToProps, {getPlaces})(Places);
