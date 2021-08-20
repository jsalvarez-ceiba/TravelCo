import { string } from 'prop-types';
import { onSelected } from './onSelected';
import { render } from '@testing-library/react';

describe('On Selected Test', () => {
  test('Test ;)', () => {
    expect(true).toBeTruthy();
  });

  test('Selected exists', () => {
    expect(onSelected).toBeTruthy();
  });
});
