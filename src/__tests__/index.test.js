import { muliply, sum } from '../index.js';

describe('test multiply', () => {
    it('muliply 1 * 0 to equal 0', () => {
        const result = muliply(1, 0);
        expect(result).toBe(0);
    }),
    
    it('muliply 1 * 1 to equal 1', () => {
        const result = muliply(1, 1);
        expect(result).toBe(1);
    });
});

describe('test sum', () => {
    it('adds 1 + 2 to equal 3', () => {
        const result = sum(1, 2)
        expect(result).toBe(3);
    });
});