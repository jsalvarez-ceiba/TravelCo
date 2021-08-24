import React from 'react';
import { mount } from 'enzyme';
import { render } from '@testing-library/react';
import NewReservation from './NewReservation';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)




describe('Render Home View', () => {

  /* const initialState = {}; */
  /* const mockStore = configureMockStore(); */
  let store, wrapper;


  /* test('render new reservations', () => {
    const component = render(NewReservation);
    expect(component).toBeTruthy();
  }); */

  test('render component', () => {
    store = mockStore({});
    const component = mount(
      <Provider store={store}>
        <NewReservation />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

});
