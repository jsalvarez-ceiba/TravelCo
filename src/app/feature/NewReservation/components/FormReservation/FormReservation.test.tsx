import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import FormReservation from './FormReservation';

import configureStore from 'redux-mock-store';

describe('Test Form With React Testing Library', () => {
  const initialState = {};
  const mockStore = configureStore();
  let store, wrapper;

  test('true', () => {
    expect(FormReservation).toBeTruthy();
  });
});
