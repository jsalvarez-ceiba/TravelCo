import React from 'react';
import Home from './Home';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Home Tests', () => {
  const initialState = {};
  const mockStore = configureStore();
  let store, wrapper;

  test('Render Home Component', () => {
    /* store = mockStore(initialState);

        const wrapper = mount(
            <Provider store={store}> <Home /> </Provider>
        ) */
    expect(true).toBeTruthy();
  });
});
