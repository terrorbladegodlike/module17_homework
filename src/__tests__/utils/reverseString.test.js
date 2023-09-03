import { reverseString } from "../../utils/reverseString";

describe('test reverseString function', () => {
    it('should reverse string', () => {
        expect(reverseString('abcd')).toBe('dcba');
        expect(reverseString('123')).toBe('321');
        expect(reverseString('a1!')).toBe('!1a');
    });
});
