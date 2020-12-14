const fs = require('fs');

const { A14, B14 } = require('../lib/14');
const input = fs.readFileSync('./data/14.txt', 'utf-8');

const example1 = 'mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X\nmem[8] = 11\nmem[7] = 101\nmem[8] = 0';
const example2 =
	'mask = 000000000000000000000000000000X1001X\nmem[42] = 100\nmask = 00000000000000000000000000000000X0XX\nmem[26] = 1';

describe('14', () => {
	describe('A', () => {
		it('Example 1', () => {
			expect(A14(example1)).toBe(165);
		});

		it('Solution', () => {
			expect(A14(input)).toBe(7817357407588);
		});
	});

	describe('B', () => {
		it('Example 1', () => {
			expect(B14(example2)).toBe(208);
		});

		it('Solution', () => {
			expect(B14(input)).toBe(4335927555692);
		});
	});
});
