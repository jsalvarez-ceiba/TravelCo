import Reservation from '../../../feature/NewReservation/models/Reservation.model';
import {axiosIntance} from '../../config/AxiosConfig';
import {urls} from '../../api/endpoints';

export const createReservation = (reservation:Reservation) => {
    return async () => {
        try {
            await axiosIntance.post( `${urls.localhost}/reservations`, reservation, {
                headers: {'Content-Type': 'application/json'}
            }).then((res) => console.log(res));
    
        } catch (err) {
            throw new Error(err);
        }

    };
};

export const getReservations = async () => {
    
        try {
            const res = await axiosIntance.get(`${urls.localhost}/reservations`, {
                headers: {'Content-Type': 'application/json'}
            });
            return res.data;
    
        } catch (err) {
            throw new Error(err);
        }
    
};

export const deleteReservation = (id:string) => {
    return async () => {
        try {
    
            await axiosIntance.delete(`${urls.localhost}/reservations/${id}`, {
                headers: {'Content-Type': 'application/json'}
            });
    
        } catch (err) {
    
            throw new Error(err);
    
        }

    };
};



    

    

    
