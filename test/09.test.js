const fs = require('fs');

const { A09, B09 } = require('../lib/09');
const input = fs.readFileSync('./data/09.txt', 'utf-8');

const example = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;

describe('09', () => {
	describe('A', () => {
		it('Example 1', () => {
			expect(A09(example, 5)).toBe(127);
		});

		it('Solution', () => {
			expect(A09(input)).toBe(10884537);
		});
	});

	describe('B', () => {
		it('Example 1', () => {
			expect(B09(example, 5)).toBe(62);
		});

		it('Solution', () => {
			expect(B09(input)).toBe(1261309);
		});
	});
});
