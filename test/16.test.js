const fs = require('fs');

const { A16, B16 } = require('../lib/16');
const input = fs.readFileSync('./data/16.txt', 'utf-8');

const example1 =
	'class: 1-3 or 5-7\nrow: 6-11 or 33-44\nseat: 13-40 or 45-50\n\nyour ticket:\n7,1,14\n\nnearby tickets:\n7,3,47\n40,4,50\n55,2,20\n38,6,12';
const example2 =
	'class: 0-1 or 4-19\nrow: 0-5 or 8-19\nseat: 0-13 or 16-19\n\nyour ticket:\n11,12,13\n\nnearby tickets:\n3,9,18\n15,1,5\n5,14,9';

describe('16', () => {
	describe('A', () => {
		it('Example 1', () => {
			expect(A16(example1)).toBe(71);
		});

		it('Solution', () => {
			expect(A16(input)).toBe(26988);
		});
	});

	describe('B', () => {
		it('Example 1', () => {
			expect(B16(example2)).toBe(1);
		});

		it('Solution', () => {
			expect(B16(input)).toBe(426362917709);
		});
	});
});
