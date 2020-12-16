const fs = require('fs');

const { A15, B15 } = require('../lib/15');
const input = fs.readFileSync('./data/15.txt', 'utf-8');

describe('15', () => {
	describe('A', () => {
		it('Example 1', () => {
			expect(A15('0,3,6')).toBe(436);
		});
		it('Example 2', () => {
			expect(A15('1,3,2')).toBe(1);
		});
		it('Example 3', () => {
			expect(A15('2,1,3')).toBe(10);
		});
		it('Example 4', () => {
			expect(A15('1,2,3')).toBe(27);
		});
		it('Example 5', () => {
			expect(A15('2,3,1')).toBe(78);
		});
		it('Example 6', () => {
			expect(A15('3,2,1')).toBe(438);
		});
		it('Example 7', () => {
			expect(A15('3,1,2')).toBe(1836);
		});

		it('Solution', () => {
			expect(A15(input)).toBe(376);
		});
	});

	xdescribe('B', () => {
		it('Example 1', () => {
			expect(B15('0,3,6')).toBe(175594);
		});
		it('Solution', () => {
			expect(B15(input)).toBe(323780);
		});
	});
});
