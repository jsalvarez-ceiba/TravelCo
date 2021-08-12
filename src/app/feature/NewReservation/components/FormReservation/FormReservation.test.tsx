import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, cleanup} from '@testing-library/react'
import FormReservation from './FormReservation';
import {prettyDOM} from '@testing-library/dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {mount} from 'enzyme';

 afterEach(cleanup)

const startingState = {}

interface Action {
    type:string
}

function reducer (state = startingState, action : Action) {
    switch (action.type) {
        default:
            return state;

    }
}



function renderWithRedux (component:any, {store = createStore(reducer, startingState)} = {}) {
    return {
        ...render(<Provider store={store}>{component}</Provider> )
    }
} 

describe('Test Form', () => {

    const component = renderWithRedux( <FormReservation /> );

    /* const comp = mount(<FormReservation/>); */


    test('FormReservation Render', () => {
       renderWithRedux( <FormReservation /> )
    });

    /* test('Render Button', () => {
        const button = component.container.querySelector('button');
        expect(button).toBeTruthy();
    }); */

    /* test('should show Nueva Reservacion', () => {
        expect(comp.find('h6').).toEqual('Información del vuelo'); 
    }); */
});



/* test('test of FormReservations', () => {
        const component = renderWithRedux(<FormReservation />)
        const select = component.container.querySelector('select')
        expect(select).toBeTruthy()

})  */

