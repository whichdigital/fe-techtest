import { isMultiple } from '../helpers/isMultiple';

describe('isMulitple', () => {
    it('returns true if first argument is a multiple of the second arg', () => {
        expect(isMultiple(4, 2)).toBe(true);
        expect(isMultiple(114, 38)).toBe(true);
        expect(isMultiple(3, 2)).toBe(false);
        expect(isMultiple(100, 9)).toBe(false);
    });
});
