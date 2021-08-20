import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import ContainerPlaces from './ContainerPlaces';
import React from 'react';

describe('Test ContainerPlaces', () => {
  const initialState = {};
  const mockStore = configureStore();
  let store, wrapper;

  test('container test!', () => {
    store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <ContainerPlaces />
      </Provider>
    );
    expect(wrapper.find('div').hasClass('flexCenter')).toBeTruthy();
  });
});
