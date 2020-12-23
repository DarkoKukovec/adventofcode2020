const fs = require('fs');

const { A23, B23 } = require('../lib/23');
const input = fs.readFileSync('./data/23.txt', 'utf-8');

describe('23', () => {
	describe('A', () => {
		it('Example 1', () => {
			expect(A23('389125467')).toBe(67384529);
		});

		it('Solution', () => {
			expect(A23(input)).toBe(32658947);
		});
	});

	describe('B', () => {
		it('Example 1', () => {
			expect(B23('389125467')).toBe(149245887792n);
		});

		it('Solution', () => {
			expect(B23(input)).toBe(683486010900n);
		});
	});
});
