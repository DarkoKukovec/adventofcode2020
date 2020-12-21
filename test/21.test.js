const fs = require('fs');

const { A21, B21 } = require('../lib/21');
const input = fs.readFileSync('./data/21.txt', 'utf-8');

const example1 =
	'mxmxvkd kfcds sqjhc nhms (contains dairy, fish)\ntrh fvjkl sbzzf mxmxvkd (contains dairy)\nsqjhc fvjkl (contains soy)\nsqjhc mxmxvkd sbzzf (contains fish)';

describe('21', () => {
	describe('A', () => {
		it('Example 1', () => {
			expect(A21(example1)).toBe(5);
		});

		it('Solution', () => {
			expect(A21(input)).toBe(2203);
		});
	});

	describe('B', () => {
		it('Example 1', () => {
			expect(B21(example1)).toBe('mxmxvkd,sqjhc,fvjkl');
		});

		it('Solution', () => {
			expect(B21(input)).toBe('fqfm,kxjttzg,ldm,mnzbc,zjmdst,ndvrq,fkjmz,kjkrm');
		});
	});
});
