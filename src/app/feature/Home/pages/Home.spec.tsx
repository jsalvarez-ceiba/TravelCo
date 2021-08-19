import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {cleanup, render} from '@testing-library/react';
import Home from './Home';

afterEach(cleanup);

test('Render Home View', () => {
    const component = render(<Home/>);
    expect(component).toBeTruthy();
});