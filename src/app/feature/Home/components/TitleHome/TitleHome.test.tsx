import React from 'react';
import TitleHome from './TitleHome';
import { mount } from 'enzyme';

describe('Pruebas al componente TitleHome', () => {
  const component = mount(<TitleHome />);

  test('Renderizar titulo', () => {
    expect(component.find('h1').text()).toEqual('TravelCo');
  });
});
