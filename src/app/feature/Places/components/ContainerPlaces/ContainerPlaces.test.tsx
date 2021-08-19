import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {cleanup, render} from '@testing-library/react';
import ContainerPlaces from './ContainerPlaces';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

afterEach(cleanup);

const startingState = {};

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
    };
} 

test('ContainerPlaces Render', () => {
    renderWithRedux( <ContainerPlaces /> );
}); 

test('Count cards', () => {
    const component = renderWithRedux( <ContainerPlaces /> );

    const cards = component.container.getElementsByClassName('card');

    expect(cards).toBeTruthy();
});

