import { axiosIntance } from '../config/AxiosConfig';

export const urls = {
    localhost: 'http://localhost:8000',
};

export const servicePlaces = {
    getP: () => axiosIntance.get('http://localhost:8000/places'),
}