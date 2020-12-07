const fs = require('fs');

const { A07, B07 } = require('../lib/07');
const input = fs.readFileSync('./data/07.txt', 'utf-8');

const example = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;

describe('07', () => {
	describe('A', () => {
		it('Example 1', () => {
			expect(A07(example)).toBe(4);
		});

		it('Solution', () => {
			expect(A07(input)).toBe(177);
		});
	});

	describe('B', () => {
		it('Example 1', () => {
			expect(B07(example)).toBe(32);
		});

		it('Example 2', () => {
			expect(
				B07(`shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.`),
			).toBe(126);
		});

		it('Solution', () => {
			expect(B07(input)).toBe(34988);
		});
	});
});
