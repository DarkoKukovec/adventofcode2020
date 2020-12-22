const fs = require('fs');

const { A22, B22 } = require('../lib/22');
const input = fs.readFileSync('./data/22.txt', 'utf-8');

const example1 = 'Player 1:\n9\n2\n6\n3\n1\n\nPlayer 2:\n5\n8\n4\n7\n10';

describe('22', () => {
	describe('A', () => {
		it('Example 1', () => {
			expect(A22(example1)).toBe(306);
		});

		it('Solution', () => {
			expect(A22(input)).toBe(32413);
		});
	});

	describe('B', () => {
		it('Example 1', () => {
			expect(B22(example1)).toBe(291);
		});

		it('Solution', () => {
			expect(B22(input)).toBe(31596);
		});
	});
});
