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
  
  test('Testing use state hooks', () => {
    
     store = mockStore(initialState); 
    const cityOrigin = 'cityOrigin'
    const cityDestination = 'cityDestination';

    React.useState = jest.fn()
      .mockReturnValueOnce([cityOrigin, {}])
      .mockReturnValueOnce([cityDestination, {}])

    

    const wrapper = shallow(
      <Provider store={store}>
        <FormReservation places={[]} />
      </Provider>
    )
    
    
    
    
    
    
    
    
    





    

  });
});
