import { axiosIntance } from '../config/AxiosConfig';
import {urls} from './endpoints';


export const createReservation = (data:any) => {
    try {

        axiosIntance.post( `${urls.localhost}/reservations`, data, {
            headers: {'Content-Type': 'application/json'}
        }).then((res) => console.log(res));

    } catch (err) {
        throw new Error(err);
    }
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

export const deleteReservation = async (id:string) => {
    try {

        await axiosIntance.delete(`${urls.localhost}/reservations/${id}`, {
            headers: {'Content-Type': 'application/json'}
        });

    } catch (err) {

        throw new Error(err);

    }
};