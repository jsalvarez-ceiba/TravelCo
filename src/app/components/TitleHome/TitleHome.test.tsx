import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, cleanup} from '@testing-library/react'
import TitleHome from './TitleHome';
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

test('TitleHome Render', () => {
    renderWithRedux( <TitleHome /> )
}) 



