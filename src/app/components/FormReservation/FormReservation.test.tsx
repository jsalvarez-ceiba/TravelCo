import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, cleanup} from '@testing-library/react'
import FormReservation from './FormReservation';
import {prettyDOM} from '@testing-library/dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

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

 test('render', () => {
    renderWithRedux( <FormReservation /> )
}) 

/* test('TravelCo Form', () => {
    expect(true).toBeTruthy()
}) */

/* test('test of FormReservations', () => {
        const component = renderWithRedux(<FormReservation />)
        const select = component.container.querySelector('select')
        expect(select).toBeTruthy()

})  */

