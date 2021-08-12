import React from 'react';
import renderer from 'react-test-renderer';
import TitleHome from './TitleHome';
import { mount } from 'enzyme';

interface Action {
    type:string
}

describe('Pruebas al componente TitleHome', () => {

    const Title = renderer.create(<TitleHome />).toJSON();

    test('Snapshot Component', () => {
        expect(Title).toMatchSnapshot();
    });
})



