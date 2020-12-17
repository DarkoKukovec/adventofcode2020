const fs = require('fs');

const { A17, B17 } = require('../lib/17');
const input = fs.readFileSync('./data/17.txt', 'utf-8');

const example = '.#.\n..#\n###';

describe('17', () => {
	describe('A', () => {
		it('Example 1', () => {
			expect(A17(example)).toBe(112);
		});

		it('Solution', () => {
			expect(A17(input)).toBe(265);
		});
	});

	describe('B', () => {
		it('Example 1', () => {
			expect(B17(example)).toBe(848);
		});

		it('Solution', () => {
			expect(B17(input)).toBe(1936);
		});
	});
});
