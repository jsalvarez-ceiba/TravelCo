import React from 'react';
import { mount } from 'enzyme';
import { render } from '@testing-library/react';
import {prettyDOM} from '@testing-library/dom';
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

  test('render component', () => {
    store = mockStore({});
    const component = mount(
      <Provider store={store}>
        <NewReservation />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  test('backgroundFlyCell', () => {
    store = mockStore({});
    const component = render(
      <Provider store={store}>
        <NewReservation />
      </Provider>
    );

    const div = component.container.querySelector('.backgroundFlyCell');

    /* console.log(prettyDOM(div)); */

     expect(div).not.toBeNull(); 


  })

});
