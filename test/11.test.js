const fs = require('fs');

const { A11, B11 } = require('../lib/11');
const input = fs.readFileSync('./data/11.txt', 'utf-8');

const example =
	'L.LL.LL.LL\nLLLLLLL.LL\nL.L.L..L..\nLLLL.LL.LL\nL.LL.LL.LL\nL.LLLLL.LL\n..L.L.....\nLLLLLLLLLL\nL.LLLLLL.L\nL.LLLLL.LL';

describe('11', () => {
	describe('A', () => {
		it('Example 1', () => {
			expect(A11(example)).toBe(37);
		});

		it('Solution', () => {
			expect(A11(input)).toBe(2412);
		});
	});

	describe('B', () => {
		it('Example 1', () => {
			expect(B11(example)).toBe(26);
		});

		it('Solution', () => {
			expect(B11(input)).toBe(2176);
		});
	});
});
