import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import FormReservation from './FormReservation';

import configureStore from 'redux-mock-store';

import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';

function requiredProps(overrides = {}) {
  return {
    places: [],
  };
}

function renderComponent(props = requiredProps()) {}

describe('Test Form With React Testing Library', () => {
  const initialState = {};
  const mockStore = configureStore();
  let store, wrapper;

  test('render component', () => {
    store = mockStore(initialState);

    const component = mount(
      <Provider store={store}>
        <FormReservation places={[]} />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
