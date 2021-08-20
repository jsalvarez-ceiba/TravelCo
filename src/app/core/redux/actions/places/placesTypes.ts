import { Places } from '../../../../feature/Places/models/Places.model';

export const SET_PLACES = 'SET_PLACES';

interface ActionSetPlaces {
    type: typeof SET_PLACES;
    payload: Places[];
}

export type Actions = | ActionSetPlaces;

