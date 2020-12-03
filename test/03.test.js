const fs = require('fs');

const { A03, B03 } = require('../lib/03');
const input = fs.readFileSync('./data/03.txt', 'utf-8');

const example =
	'..##.......\n#...#...#..\n.#....#..#.\n..#.#...#.#\n.#...##..#.\n..#.##.....\n.#.#.#....#\n.#........#\n#.##...#...\n#...##....#\n.#..#...#.#';

describe('03', () => {
	describe('A', () => {
		it('Example 1', () => {
			expect(A03(example)).toBe(7);
		});

		it('Solution', () => {
			expect(A03(input)).toBe(198);
		});
	});

	describe('B', () => {
		it('Example 1', () => {
			expect(B03(example)).toBe(336);
		});

		it('Solution', () => {
			expect(B03(input)).toBe(5140884672);
		});
	});
});
