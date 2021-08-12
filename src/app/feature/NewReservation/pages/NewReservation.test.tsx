import React from 'react';

import {render} from '@testing-library/react';

import NewReservation from './NewReservation';


describe('Render Home View', () => {
    
    
    test('render new reservations', () => {
        const component = render(NewReservation);
        expect(component).toBeTruthy();
        
    });
});