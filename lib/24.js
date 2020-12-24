const directions = {
	w: [2, 0],
	e: [-2, 0],
	sw: [1, 1],
	se: [-1, 1],
	nw: [1, -1],
	ne: [-1, -1],
};

function parseInput(contents) {
	return contents.split(/\n/g).map((line) => line.match(/(se|sw|ne|nw|w|e)/g).map((cmd) => directions[cmd]));
}

function executeInstructions(input) {
	const tiles = {};

	input.forEach((tile) => {
		let x = 0;
		let y = 0;
		tile.forEach(([diffX, diffY]) => {
			x += diffX;
			y += diffY;
		});
		tiles[[x, y]] = !tiles[[x, y]];
	});

	return tiles;
}

function getNeighborCoordinates(x, y) {
	return Object.values(directions).map(([diffX, diffY]) => [x + diffX, y + diffY]);
}

function executeDay(tiles) {
	const newTiles = {};

	const toCheck = [];
	Object.keys(tiles).map((coordinates) => {
		const [x, y] = coordinates.split(',').map(Number);
		toCheck.push(...[[x, y], ...getNeighborCoordinates(x, y)].map((c) => c.join(',')).flat());
	});

	new Set(toCheck).forEach((coo) => {
		const [tx, ty] = coo.split(',').map(Number);
		const isBlack = Boolean(tiles[coo]);
		const blackNeighbors = getNeighborCoordinates(tx, ty).filter(([nx, ny]) => tiles[[nx, ny]]).length;

		if (isBlack && (blackNeighbors === 1 || blackNeighbors === 2)) {
			newTiles[coo] = true;
		} else if (!isBlack && blackNeighbors === 2) {
			newTiles[coo] = true;
		}
	});

	return newTiles;
}

module.exports = {
	A24(contents) {
		const input = parseInput(contents);
		const tiles = executeInstructions(input);

		return Object.values(tiles).filter(Boolean).length;
	},

	B24(contents) {
		const input = parseInput(contents);
		let tiles = executeInstructions(input);

		for (let day = 0; day < 100; day++) {
			tiles = executeDay(tiles);
		}

		return Object.values(tiles).length;
	},
};
