import React from 'react';
import renderer from 'react-test-renderer';
import Select from './Select';

describe('Test Select Component', () => {

    const select = renderer.create(<Select />).toJSON();

    test('Select Render', () => {
        expect(select).toMatchSnapshot();
    });

    test('Select Render', () => {
        expect(true).toBeTruthy();
    });

});