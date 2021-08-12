import {render} from '@testing-library/react';
import reservationActions from './reservationActions';

describe('test actions', () => {

    test('should actions', () => {

        const obj = render(reservationActions)
        expect(obj).toBeTruthy();
        
    });
    
    
});
