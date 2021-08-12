/* import {axiosIntance} from '../../config/AxiosConfig';
import {urls} from '../../api/endpoints';

export type Action = {
    type: 'SET_RESERVATIONS', 
    payload: string
}

export const createReservation = (data:any) => {
    return async () => {
        axiosIntance.post( `${urls.localhost}/reservations`, data, {
            headers: {'Content-Type': 'application/json'}
        }).then((res) => console.log(res));
    };
}; */

export const actions = {
    action: ''
};

    

    

    
