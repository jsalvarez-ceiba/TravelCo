import React from 'react';
import renderer from 'react-test-renderer';
import TitleHome from './TitleHome';
import { mount } from 'enzyme';

interface Action {
    type:string
}

describe('Pruebas al componente TitleHome', () => {

    /* const Title = renderer.create(<TitleHome />).toJSON(); */
    const component = mount(<TitleHome />);

    /* test('Snapshot Component', () => {
        expect(Title).toMatchSnapshot();
    }); */

    test('Renderizar titulo', () => {
        expect(component.find('h1').text()).toEqual('TravelCo');
    });
});



