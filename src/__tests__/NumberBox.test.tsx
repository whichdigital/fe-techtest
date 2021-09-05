import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import NumberBox from '../components/NumberBox';

afterEach(cleanup);

describe('NumberBox', () => {
    it('renders the component', () => {
        render(<NumberBox number={1} isMultiple={false} callBack={() => {}} />);
    });

    it('renders the number inside the NumberBox', () => {
        render(<NumberBox number={2} isMultiple={false} callBack={() => {}} />);
        screen.getByText('2');

        render(<NumberBox number={144} isMultiple={false} callBack={() => {}} />);
        screen.getByText('144');
    });

    it('renders the NumberBox with the correct class', () => {
        render(<NumberBox number={2} isMultiple={true} callBack={() => {}} />);
        expect(screen.getByText(2)).toHaveClass('is-highlighted');

        render(<NumberBox number={3} isMultiple={false} callBack={() => {}} />);
        expect(screen.getByText(3).className).toBe('');
    });
});
