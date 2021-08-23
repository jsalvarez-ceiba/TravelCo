import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import FormReservation from './FormReservation';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { mount, shallow } from 'enzyme';

describe('Test Form With React Testing Library', () => {
  const initialState = {  };
  const mockStore = configureStore();
  let store, wrapper;

  test('true', () => {
    expect(true).toBeTruthy();
  });

});
