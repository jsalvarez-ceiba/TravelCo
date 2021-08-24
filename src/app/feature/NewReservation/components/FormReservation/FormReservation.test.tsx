import React from 'react';
import { render } from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom';

import renderer from 'react-test-renderer';

import FormReservation from './FormReservation';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';

function requiredProps(overrides = {}) {
  return {
    places: [],
  };
}

function renderComponent(props = requiredProps()) {}

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test Form With React Testing Library', () => {
  let store, wrapper;

  beforeEach(() => {});

  const initialState = {};
  /* const mockStore = configureStore(); */

  test('opacityCell Test', () => {
    store = mockStore({});
    const component = render(
      <Provider store={store}>
        <FormReservation places={[]} />
      </Provider>
    );

    const div = component.container.querySelector('.card');

    /*     console.log(prettyDOM(div));
     */ expect(div).not.toBeNull();
  });


  test('render component', () => {
    store = mockStore(initialState);
    wrapper = shallow(
      <Provider store={store}>
        <FormReservation places={[]} />
      </Provider>
    );

    expect(wrapper.find('div').length).toBe(0);
  });




  test('Testing use state hooks', () => {
    store = mockStore(initialState);
    const cityOrigin = 'cityOrigin';
    const cityDestination = 'cityDestination';
    const name = 'name';
    const lastname = 'lastname';
    const age = 'age';
    const date = 'date';
    const birthdate = 'birthdate';
    const price = 'price';
    const newPrice = 'newPrice';
    const message = 'message';
    const summary = 'summary';

    React.useState = jest
      .fn()
      .mockReturnValueOnce([cityOrigin, {}])
      .mockReturnValueOnce([cityDestination, {}])
      .mockReturnValueOnce([name, {}])
      .mockReturnValueOnce([lastname, {}])
      .mockReturnValueOnce([age, {}])
      .mockReturnValueOnce([date, {}])
      .mockReturnValueOnce([birthdate, {}])
      .mockReturnValueOnce([price, {}])
      .mockReturnValueOnce([newPrice, {}])
      .mockReturnValueOnce([message, {}])
      .mockReturnValueOnce([summary, {}]);

    const wrapper = shallow(
      <Provider store={store}>
        <FormReservation places={[]} />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  
});
