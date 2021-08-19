import { urls } from './endpoints';
import { axiosIntance } from '../config/AxiosConfig';

export const getPlaces = async () => {
    const res = await axiosIntance.get(`${urls.localhost}/places`);
    return res.data;
}