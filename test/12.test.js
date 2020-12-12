const fs = require('fs');

const { A12, B12 } = require('../lib/12');
const input = fs.readFileSync('./data/12.txt', 'utf-8');

const example = 'F10\nN3\nF7\nR90\nF11';

describe('12', () => {
	describe('A', () => {
		it('Example 1', () => {
			expect(A12(example)).toBe(25);
		});

		it('Solution', () => {
			expect(A12(input)).toBe(582);
		});
	});

	describe('B', () => {
		it('Example 1', () => {
			expect(B12(example)).toBe(286);
		});

		it('Solution', () => {
			expect(B12(input)).toBe(52069);
		});
	});
});
