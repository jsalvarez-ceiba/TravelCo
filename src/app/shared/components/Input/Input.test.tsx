import React from 'react';
import renderer from 'react-test-renderer';
import Input from './Input';

describe('InputComponent Test', () => {
    const input = renderer.create(<Input />).toJSON();
    test('Input Render', () => {
        expect(input).toMatchSnapshot();
    });
});