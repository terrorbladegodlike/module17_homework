import { definePrime } from "../../utils/definePrime";

xdescribe('test definePrime function', () => {
    const simple = 17;
    const complex = 16;

    it('simple number', () => {
        expect(definePrime(simple)).toBe(`Число ${simple} - простое число`);
    }),
    it('complex number', () => {
        expect(definePrime(complex)).toBe(`Число ${complex} - составное число`);
    }),
    it('invalid number', () => {
        expect(definePrime(1001)).toBe('Данные неверны');
    });
});

describe('test definePrime function', () => {
    const simple = 17;
    const complex = 16;

    it('should operate correctly simple, complex and invalid number', () => {
        expect(definePrime(simple)).toBe(`Число ${simple} - простое число`);
        expect(definePrime(complex)).toBe(`Число ${complex} - составное число`);
        expect(definePrime(1001)).toBe('Данные неверны');
        });
});