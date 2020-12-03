function findCount(map, DIFF_X, DIFF_Y) {
	const widthCoef = map[0].length;
	let x = 0;
	let y = 0;
	let trees = 0;

	while (y < map.length) {
		trees += map[y][x % widthCoef] === '#' ? 1 : 0;
		x += DIFF_X;
		y += DIFF_Y;
	}

	return trees;
}

module.exports = {
	A03(contents) {
		const map = contents.split(/\n/g).map((line) => line.split(''));
		return findCount(map, 3, 1);
	},

	B03(contents) {
		const map = contents.split(/\n/g).map((line) => line.split(''));

		return (
			findCount(map, 1, 1) * findCount(map, 3, 1) * findCount(map, 5, 1) * findCount(map, 7, 1) * findCount(map, 1, 2)
		);
	},
};
