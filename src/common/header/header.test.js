import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './header';

describe('<Header />', () => {
  test('it should mount', () => {
    render(<Header />);
    const login = screen.getByTestId('Header');
    expect(login).toBeInTheDocument();
  });
});