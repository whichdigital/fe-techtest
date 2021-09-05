import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import App from '../components/App';

afterEach(cleanup);

describe('App', () => {
    it('renders 144 buttons to the screen', () => {
        render(<App />);
        const allButtons = screen.getAllByRole('button');
        expect(allButtons).toHaveLength(144);
    });
});
