import React from 'react';
import {shallow} from 'enzyme';

import {render} from '@testing-library/react';

import NewReservation from './NewReservation';


describe('Render Home View', () => {
    
    test('render new reservations', () => {
        const component = render(NewReservation);
        expect(component).toBeTruthy();
    });

    test('render form reservation ', () => {
        const component = shallow(<NewReservation />);
        const wrapper = component.contains('Nueva Reserva');
        console.log(wrapper);
    });
    
});