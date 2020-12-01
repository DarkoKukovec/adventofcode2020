const fs = require('fs');

const { A01, B01 } = require('../lib/01');
const input = fs.readFileSync('./data/01.txt', 'utf-8');

describe('01', () => {
	describe('A', () => {
		it('Example 1', () => {
			expect(A01('1721\n979\n366\n299\n675\n1456')).toBe(514579);
		});

		it('Solution', () => {
			expect(A01(input)).toBe(567171);
		});
	});

	describe('B', () => {
		it('Example 1', () => {
			expect(B01('1721\n979\n366\n299\n675\n1456')).toBe(241861950);
		});

		it('Solution', () => {
			expect(B01(input)).toBe(212428694);
		});
	});
});
