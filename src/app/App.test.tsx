import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Test', () => {

    test('Render App ;)', () => {
        render(<App />);
    });

    /* test('Snapshot', () => {
        const page = render(<App/>);
        expect(page).toMatchSnapshot();
    }); */

})

