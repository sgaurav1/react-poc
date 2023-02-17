import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nomatch from './Nomatch';

describe('<Nomatch />', () => {
  test('it should mount', () => {
    render(<Nomatch />);
    
    const nomatch = screen.getByTestId('Nomatch');

    expect(nomatch).toBeInTheDocument();
  });
});