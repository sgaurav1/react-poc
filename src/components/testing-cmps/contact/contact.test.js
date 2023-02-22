import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from './contact';

const phone = "8888888888";

describe('<Contact />', () => {
    test('it should mount', () => {
        render(<Contact />);

        const profile = screen.getByTestId('Contact');

        expect(profile).toBeInTheDocument();
    });

});

describe('The contact should render correclty', () => {
    test('it shoudl have number', ()=> {
        render(<Contact phone={phone} />);
    const profile = screen.getByTestId('Contact');
    expect(profile).toMatchSnapshot();
})
})