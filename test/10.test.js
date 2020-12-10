const fs = require('fs');

const { A10, B10 } = require('../lib/10');
const input = fs.readFileSync('./data/10.txt', 'utf-8');

const example1 = '16\n10\n15\n5\n1\n11\n7\n19\n6\n12\n4';
const example2 =
	'28\n33\n18\n42\n31\n14\n46\n20\n48\n47\n24\n23\n49\n45\n19\n38\n39\n11\n1\n32\n25\n35\n8\n17\n7\n9\n4\n2\n34\n10\n3';

describe('10', () => {
	describe('A', () => {
		it('Example 1', () => {
			expect(A10(example1)).toBe(35);
		});

		it('Example 2', () => {
			expect(A10(example2)).toBe(220);
		});

		it('Solution', () => {
			expect(A10(input)).toBe(2048);
		});
	});

	describe('B', () => {
		it('Example 1', () => {
			expect(B10(example1)).toBe(8);
		});

		it('Example 2', () => {
			expect(B10(example2)).toBe(19208);
		});

		it('Solution', () => {
			expect(B10(input)).toBe(1322306994176);
		});
	});
});
