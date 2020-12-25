const fs = require('fs');

const { A25, B25 } = require('../lib/25');
const input = fs.readFileSync('./data/25.txt', 'utf-8');

const example = '5764801\n17807724';

describe('25', () => {
	describe('A', () => {
		it('Example 1', () => {
			expect(A25(example)).toBe(14897079n);
		});

		it('Solution', () => {
			expect(A25(input)).toBe(4441893n);
		});
	});
});
