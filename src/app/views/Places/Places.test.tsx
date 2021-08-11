import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, cleanup} from '@testing-library/react'
import Places from './Places'

afterEach(cleanup)

test('Render Home View', () => {
    const component = render(<Places/>)
    expect(component).toBeTruthy();
})