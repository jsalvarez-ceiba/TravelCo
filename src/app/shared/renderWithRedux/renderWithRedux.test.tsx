import renderWithRedux from './renderWithRedux';
import {render} from '@testing-library/react';

describe('Test RenderWithRedux', () => {
    test('Test RenderWithRedux', () => {
        const obj = render(renderWithRedux);
        expect(obj).toBeTruthy();
    });
});