import React from 'react';
import { render, screen } from '@testing-library/react';



import ListReservations from './ListReservations';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {shallow} from 'enzyme';

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store, wrapper;

  test('Show "Hello World"', () => {
    store = mockStore(initialState);
    const { getByText } = render(<Provider store={store} > <ListReservations/> </Provider>);
    expect(getByText('Buscar vuelo')).not.toBeNull();
  });

  test('Show "Hello World"', () => {
    
    expect(true).toBeTruthy();
  });

  

  /* test('Wrapper', () => {
    store = mockStore(initialState);
    const wrapper = shallow( <Provider store={store} > <ListReservations/> </Provider> );
    expect(wrapper).toMatchSnapshot();
      
      
  }); */



  



});
