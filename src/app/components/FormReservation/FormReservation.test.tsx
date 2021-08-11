import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react'
import FormReservation from './FormReservation';
import {prettyDOM} from '@testing-library/dom'

describe('Form element tests', () => {

    let container:HTMLElement

    it('Render Select in form', () => {
        const input = container.querySelector('Input')
        expect(input).toHaveLength(5)
    })
})
