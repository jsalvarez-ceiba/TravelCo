import React from 'react';
import {render} from '@testing-library/react';
import ListReservations from './ListReservations';

describe('ListReservations Test', () => {
    test('ListReservations Render', () => {
        render(<ListReservations />);
    });
});