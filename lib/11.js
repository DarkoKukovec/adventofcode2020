const VAL = {
	'.': 0,
	L: 1,
	'#': 2,
};

function parseInput(contents) {
	return contents.split(/\n/g).map((row) => row.split('').map((x) => VAL[x]));
}

function findInDirection(x, y, seats, dirX, dirY, distance) {
	let posX = x + dirX;
	let posY = y + dirY;
	while (distance > 0 && posX >= 0 && posX < seats.length && posY >= 0 && posY < seats[0].length) {
		if (seats[posX][posY]) {
			return seats[posX][posY];
		}
		posX += dirX;
		posY += dirY;
		distance--;
	}
	return 0;
}

function toggleSeat(x, y, seats, advanced) {
	const distance = advanced ? Infinity : 1;

	const takenCount = [
		findInDirection(x, y, seats, -1, -1, distance),
		findInDirection(x, y, seats, -1, 0, distance),
		findInDirection(x, y, seats, -1, 1, distance),
		findInDirection(x, y, seats, 0, -1, distance),
		findInDirection(x, y, seats, 0, 1, distance),
		findInDirection(x, y, seats, 1, -1, distance),
		findInDirection(x, y, seats, 1, 0, distance),
		findInDirection(x, y, seats, 1, 1, distance),
	].filter((x) => x === 2).length;

	if (seats[x][y] === 1) {
		return takenCount === 0;
	} else if (seats[x][y] === 2) {
		return takenCount >= (advanced ? 5 : 4);
	}
	return false;
}

function solve(advanced) {
	return (contents) => {
		const seats = parseInput(contents);

		let changes = [];
		do {
			changes.length = 0;
			for (let x = 0; x < seats.length; x++) {
				for (let y = 0; y < seats[0].length; y++) {
					if (toggleSeat(x, y, seats, advanced)) {
						changes.push([x, y]);
					}
				}
			}

			changes.forEach(([x, y]) => {
				seats[x][y] = seats[x][y] === 2 ? 1 : 2;
			});
		} while (changes.length > 0);

		return seats.reduce((acc, curr) => acc + curr.filter((x) => x === 2).length, 0);
	};
}

module.exports = {
	A11: solve(false),
	B11: solve(true),
};
