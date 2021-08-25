import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { Places } from './Places';
import configureMockStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

describe('Test Places View', () => {
  const initialState = {};
  let store, wrapper;

  test('render component', () => {
    store = mockStore(initialState);

    const component = mount(
      <Provider store={store}>
        <Places />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  test('render div background', () => {
    store = mockStore(initialState);
    const component = mount(

      <Provider store={store}>
        <Places />
      </Provider>

    );
    expect(component.find('h1')).toEqual({});

  })
});
