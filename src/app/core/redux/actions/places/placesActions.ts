import { Places } from '../../../../feature/Places/models/Places.model';
import {urls} from '../../../api/endpoints';
import {axiosIntance} from '../../../config/AxiosConfig';
import {Actions, SET_PLACES} from './placesTypes';

export function setPlaces  (places : Array<Places>) : Actions {
    return {
        type: SET_PLACES,
        payload: places,
        
    };
}

export const getPlaces = async () => {
    /* return async (dispatch : any) => { */
        try {
            const response = await axiosIntance.get(`${urls.localhost}/places`);
            const data = response.data;
            setPlaces(data);
        } catch (err) {
            throw new Error(err);
        }
    /* }; */
};