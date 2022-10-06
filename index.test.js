const { stringLength, reverseString, calculator, capitalize } = require('./index.js');
let x = new calculator();

test('Counts characters in the word Botlhale', () => {
	expect(stringLength('Botlhale')).toBe(8);
});

test('Checks whether string length is between 1 and 10', () => {
	expect(() => stringLength('Botlhale Setou')).toThrow();
});

test('Reverses a string', () => {
	expect(reverseString('pony')).toMatch('ynop');
});

describe('calculator checks', () => {
	test('Checks add()', () => {
		expect(x.add(5, 5)).toBe(10);
	})
	test('Checks subtract()', () => {
		expect(x.subtract(5, 5)).toBe(0);
	})
	test('Checks divide()', () => {
		expect(x.divide(5, 5)).toBe(1);
	})
	test('Checks multiply()', () => {
		expect(x.multiply(5, 5)).toBe(25);
	})
});

test('Checks whether capitalize() works', () => {
	expect(capitalize('horses')).toMatch('Horses');
});