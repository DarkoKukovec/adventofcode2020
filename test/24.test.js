const fs = require('fs');

const { A24, B24 } = require('../lib/24');
const input = fs.readFileSync('./data/24.txt', 'utf-8');

const example =
	'sesenwnenenewseeswwswswwnenewsewsw\nneeenesenwnwwswnenewnwwsewnenwseswesw\nseswneswswsenwwnwse\nnwnwneseeswswnenewneswwnewseswneseene\nswweswneswnenwsewnwneneseenw\neesenwseswswnenwswnwnwsewwnwsene\nsewnenenenesenwsewnenwwwse\nwenwwweseeeweswwwnwwe\nwsweesenenewnwwnwsenewsenwwsesesenwne\nneeswseenwwswnwswswnw\nnenwswwsewswnenenewsenwsenwnesesenew\nenewnwewneswsewnwswenweswnenwsenwsw\nsweneswneswneneenwnewenewwneswswnese\nswwesenesewenwneswnwwneseswwne\nenesenwswwswneneswsenwnewswseenwsese\nwnwnesenesenenwwnenwsewesewsesesew\nnenewswnwewswnenesenwnesewesw\neneswnwswnwsenenwnwnwwseeswneewsenese\nneswnwewnwnwseenwseesewsenwsweewe\nwseweeenwnesenwwwswnew';

describe('24', () => {
	describe('A', () => {
		it('Example 1', () => {
			expect(A24(example)).toBe(10);
		});

		it('Solution', () => {
			expect(A24(input)).toBe(479);
		});
	});

	describe('B', () => {
		it('Example 1', () => {
			expect(B24(example)).toBe(2208);
		});

		it('Solution', () => {
			expect(B24(input)).toBe(4135);
		});
	});
});
