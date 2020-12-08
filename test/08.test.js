const fs = require('fs');

const { A08, B08 } = require('../lib/08');
const input = fs.readFileSync('./data/08.txt', 'utf-8');

const example = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;

describe('08', () => {
	describe('A', () => {
		it('Example 1', () => {
			expect(A08(example)).toBe(5);
		});

		it('Solution', () => {
			expect(A08(input)).toBe(1941);
		});
	});

	describe('B', () => {
		it('Example 1', () => {
			expect(B08(example)).toBe(8);
		});

		it('Solution', () => {
			expect(B08(input)).toBe(2096);
		});
	});
});
