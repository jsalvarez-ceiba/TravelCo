import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import FormReservation from './FormReservation';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { mount } from 'enzyme';

describe('Test Form With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store, wrapper;

  test('Render component', () => {
    store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        {' '}
        <FormReservation />{' '}
      </Provider>
    );
    expect(getByText('Nueva Reservación')).not.toBeNull();
  });

  test('render inputs ', () => {
    store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        {' '}
        <FormReservation />{' '}
      </Provider>
    );
  });

  
  test('Snapshot', () => {
    
    store = mockStore(initialState);
    const formEntry = renderer
      .create(
        <Provider store={store}>
          {' '}
          <FormReservation />{' '}
        </Provider>
      )
      .toJSON();

    

    expect(formEntry).toMatchSnapshot();
  });

  test('Inputs', () => {

    store = mockStore(initialState);


    const page = mount(
      <Provider store={store}>
          {' '}
          <FormReservation />{' '}
        </Provider>
    );

    expect(page.find('Input').length).toEqual(4);
  });
});
