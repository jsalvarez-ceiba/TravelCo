import {render} from '@testing-library/react';
import ReservationModel from './Reservation.model';

describe('Testing Model Reservation', () => {
    test('Valid interface', () => {
        const obj = render(ReservationModel);
        expect(obj).toBeTruthy();
    });
});