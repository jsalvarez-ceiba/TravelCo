import React from 'react';
/* import { render, screen } from '@testing-library/react'; */

import ListReservations from './ListReservations';
import * as utils from './utils/servicesTests';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount, shallow, render } from 'enzyme';

interface propsPromise {
  then: any;
  catch: any;
  finally: any;
}

describe('Test List Reservations', () => {
  const initialState = {};
  const mockStore = configureStore();
  let store, wrapper;

  test('Test Buscar Vuelo Text', () => {
    store = mockStore(initialState);

    wrapper = mount(
      <Provider store={store}>
        <ListReservations />
      </Provider>
    );
    expect(wrapper.text()).toContain('Buscar vuelo');
  });

  test('test render component', () => {
    store = mockStore(initialState);

    const component = mount(
      <Provider store={store}>
        <ListReservations />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
