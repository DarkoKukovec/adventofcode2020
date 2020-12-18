const fs = require('fs');

const { A18, B18 } = require('../lib/18');
const input = fs.readFileSync('./data/18.txt', 'utf-8');

describe('18', () => {
	describe('A', () => {
		it('Example 1', () => {
			expect(A18('1 + 2 * 3 + 4 * 5 + 6')).toBe(71);
		});
		it('Example 2', () => {
			expect(A18('2 * 3 + (4 * 5)')).toBe(26);
		});
		it('Example 3', () => {
			expect(A18('5 + (8 * 3 + 9 + 3 * 4 * 3)')).toBe(437);
		});
		it('Example 4', () => {
			expect(A18('5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))')).toBe(12240);
		});
		it('Example 5', () => {
			expect(A18('((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2')).toBe(13632);
		});

		it('Solution', () => {
			expect(A18(input)).toBe(3159145843816);
		});
	});

	describe('B', () => {
		it('Example 1', () => {
			expect(B18('1 + 2 * 3 + 4 * 5 + 6')).toBe(231n);
		});
		it('Example 2', () => {
			expect(B18('1 + (2 * 3) + (4 * (5 + 6))')).toBe(51n);
		});
		it('Example 3', () => {
			expect(B18('2 * 3 + (4 * 5)')).toBe(46n);
		});
		it('Example 4', () => {
			expect(B18('5 + (8 * 3 + 9 + 3 * 4 * 3)')).toBe(1445n);
		});
		it('Example 5', () => {
			expect(B18('5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))')).toBe(669060n);
		});
		it('Example 6', () => {
			expect(B18('((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2')).toBe(23340n);
		});

		it('Solution', () => {
			expect(B18(input)).toBe(55699621957369n);
		});
	});
});
