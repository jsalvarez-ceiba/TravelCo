import React from 'react';
import { render, screen } from '@testing-library/react';

import ListReservations from './ListReservations';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount, shallow } from 'enzyme';

describe('Test List Reservations', () => {
  const initialState = {};
  const mockStore = configureStore();
  let store, wrapper;

  test('Test Buscar Vuelo Text', () => {
    store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        {' '}
        <ListReservations />{' '}
      </Provider>
    );
    expect(getByText('Buscar vuelo')).not.toBeNull();
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
