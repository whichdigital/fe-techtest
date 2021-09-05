import { createNumberArray } from '../helpers/createNumberArray';

describe('createNumberArray', () => {
    it('creates an array with 144 numbers', () => {
        expect(createNumberArray(1, 144)).toHaveLength(144);
    });

    it('creates an array with a length of 1', () => {
        expect(createNumberArray(1, 1)).toHaveLength(1);
    });
});
