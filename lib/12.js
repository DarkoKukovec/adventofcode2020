const DIR = {
	E: { x: 1, y: 0, R: 'S' },
	S: { x: 0, y: -1, R: 'W' },
	W: { x: -1, y: 0, R: 'N' },
	N: { x: 0, y: 1, R: 'E' },
};

function move([swpX, swpY], waypoint) {
	let wpX = swpX;
	let wpY = swpY;
	let x = 0;
	let y = 0;
	let dir = 'E';

	return ([direction, distance]) => {
		if (direction === 'F') {
			x += distance * wpX;
			y += distance * wpY;
		} else if (direction === 'L' || direction === 'R') {
			const rotations = (distance / 90) % 4;
			const times = direction === 'L' ? 4 - rotations : rotations;
			for (let index = 0; index < times; index++) {
				dir = DIR[dir].R;
				[wpX, wpY] = [wpY, -wpX];
			}
		} else if (waypoint) {
			wpX += distance * DIR[direction].x;
			wpY += distance * DIR[direction].y;
		} else {
			x += distance * DIR[direction].x;
			y += distance * DIR[direction].y;
		}
		return Math.abs(x) + Math.abs(y);
	};
}

function solve([wpX, wpY], waypoint) {
	return (contents) =>
		contents
			.split(/\n/g)
			.map((ins) => [ins[0], parseInt(ins.slice(1), 10)])
			.map(move([wpX, wpY], waypoint))
			.pop();
}

module.exports = {
	A12: solve([1, 0], false),
	B12: solve([10, 1], true),
};
