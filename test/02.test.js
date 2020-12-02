const fs = require('fs');

const { A02, B02 } = require('../lib/02');
const input = fs.readFileSync('./data/02.txt', 'utf-8');

describe('02', () => {
	describe('A', () => {
		it('Example 1', () => {
			expect(A02('1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc')).toBe(2);
		});

		it('Solution', () => {
			expect(A02(input)).toBe(445);
		});
	});

	describe('B', () => {
		it('Example 1', () => {
			expect(B02('1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc')).toBe(1);
		});

		it('Solution', () => {
			expect(B02(input)).toBe(491);
		});
	});
});
