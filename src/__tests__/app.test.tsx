/* eslint-disable react/react-in-jsx-scope */
import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  test('it renders', () => {
    render(<App />);
    expect(screen.getByText('Welcome')).toMatch('Welcome');
  });
});
