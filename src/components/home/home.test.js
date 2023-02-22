import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './home';

describe('<Profile />', () => {
  test('it should mount', () => {
    render(<Home />);
    
    const profile = screen.getByTestId('Home');

    expect(profile).toBeInTheDocument();
  });
});