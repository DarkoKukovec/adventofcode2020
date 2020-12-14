const fs = require('fs');

const { A13, B13 } = require('../lib/13');
const input = fs.readFileSync('./data/13.txt', 'utf-8');

const example = '939\n7,13,x,x,59,x,31,19';

describe('13', () => {
	describe('A', () => {
		it('Example 1', () => {
			expect(A13(example)).toBe(295);
		});

		it('Solution', () => {
			expect(A13(input)).toBe(136);
		});
	});

	describe('B', () => {
		it('Example 1', () => {
			expect(B13(example)).toBe(1068781);
		});

		it('Solution', () => {
			expect(B13(input)).toBe(305068317272992);
		});
	});
});
