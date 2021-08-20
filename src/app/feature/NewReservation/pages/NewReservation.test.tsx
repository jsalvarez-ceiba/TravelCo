import React from 'react';
import { mount } from 'enzyme';
import { render } from '@testing-library/react';
import NewReservation from './NewReservation';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';


describe('Render Home View', () => {

  const initialState = {};
  const mockStore = configureStore();
  let store, wrapper;


  test('render new reservations', () => {
    const component = render(NewReservation);
    expect(component).toBeTruthy();
  });

  /* test('backgroundFlyCell', () => {
    store = mockStore(initialState);
    const page = mount(
      <Provider store={store}>
        <NewReservation />
      </Provider>
    );
    expect(page.find('div').hasClass('backgroundFlyCell')).toBeTruthy();
  }); */

});
