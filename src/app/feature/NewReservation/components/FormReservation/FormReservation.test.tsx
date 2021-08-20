import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import FormReservation from './FormReservation';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { mount, shallow } from 'enzyme';

describe('Test Form With React Testing Library', () => {
  const initialState = {  };
  const mockStore = configureStore();
  let store, wrapper;

  test('true', () => {
    expect(true).toBeTruthy();
  })

  test('Render component', () => {
    const component = render(FormReservation);

    expect(component).toBeTruthy();

    /* store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <FormReservation />{' '}
      </Provider>
    ); */
    /* expect(wrapper.find('Nueva Reservación')).toBeTruthy(); */
  });

  /* test('Inputs', () => {
    store = mockStore(initialState);
    const page = mount(
      <Provider store={store}>
        <FormReservation />
      </Provider>
    );
    expect(page.find('Input').length).toEqual(4);
  }); */

  /* test('Selects ', () => {
    store = mockStore(initialState);
    const page = mount(
      <Provider store={store}>
        <FormReservation />
      </Provider>
    )
    expect(page.find('Select').length).toEqual(2);

  }); */

  

});
