const fs = require('fs');

const { A06, B06 } = require('../lib/06');
const input = fs.readFileSync('./data/06.txt', 'utf-8');

describe('06', () => {
	describe('A', () => {
		it('Example 1', () => {
			expect(A06(`abc\n\na\nb\nc\n\nab\nac\n\na\na\na\na\n\nb`)).toBe(11);
		});

		it('Solution', () => {
			expect(A06(input)).toBe(6630);
		});
	});

	describe('B', () => {
		it('Example 1', () => {
			expect(B06(`abc\n\na\nb\nc\n\nab\nac\n\na\na\na\na\n\nb`)).toBe(6);
		});

		it('Solution', () => {
			expect(B06(input)).toBe(3437);
		});
	});
});
