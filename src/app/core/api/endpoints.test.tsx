import {render} from '@testing-library/react';
import endpoints from './endpoints';

describe('Test Endpoints', () => {
    test('Endpoint Localhost', () => {
        const obj = render(endpoints);
        expect(obj).toBeTruthy();
    });
});