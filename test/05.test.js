const fs = require('fs');

const { A05, B05 } = require('../lib/05');
const input = fs.readFileSync('./data/05.txt', 'utf-8');

describe('05', () => {
	describe('A', () => {
		it('Example 1', () => {
			expect(A05(`FBFBBFFRLR\nBFFFBBFRRR\nFFFBBBFRRR\nBBFFBBFRLL`)).toBe(820);
		});

		it('Solution', () => {
			expect(A05(input)).toBe(883);
		});
	});

	describe('B', () => {
		it('Solution', () => {
			expect(B05(input)).toBe(532);
		});
	});
});
