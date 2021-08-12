import React from 'react';
import {render} from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar Test', () => {
    test('Navbar Render', () => {
        render(<Navbar />);
    });
});