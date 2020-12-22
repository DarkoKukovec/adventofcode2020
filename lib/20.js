function parseInput(contents) {
	const parts = [];

	contents.split(/\n\n/g).forEach((element) => {
		const [idStr, ...contentArr] = element.split(/\n/g);
		const id = idStr.slice(5, -1);
		const content = contentArr.map((row) => row.split(''));
		const sig1 = content[0].join('');
		const sig2 = content.map((row) => row[row.length - 1]).join('');
		const sig3 = content[content.length - 1].slice().reverse().join('');
		const sig4 = content
			.map((row) => row[0])
			.slice()
			.reverse()
			.join('');

		parts.push({
			id: BigInt(id),
			content,
			signatures: [sig1, sig2, sig3, sig4],
		});
	});

	return parts;
}

function reverse(str) {
	return str.split('').reverse().join('');
}

function getConnections(parts) {
	parts.forEach((part, index) => {
		const signatures = part.signatures.slice();
		const subParts = parts.slice(index + 1);
		signatures.forEach((signature) => {
			const rev = reverse(signature);
			const match1 = subParts.find((item) => item.signatures.includes(rev));
			const match2 = subParts.find((item) => item.signatures.includes(signature));
			if (match1) {
				part.signatures = part.signatures.filter((item) => item !== signature);
				match1.signatures = match1.signatures.filter((item) => item !== rev);
			} else if (match2) {
				part.signatures = part.signatures.filter((item) => item !== signature);
				match2.signatures = match2.signatures.filter((item) => item !== signature);
			}
		});
	});

	return parts;
}

function getTiles(parts) {
	const tiles = {};
	parts.forEach((part) => {
		tiles[part.id] = part.content;
	});
	return tiles;
}

function getFlips(tile) {
	return [
		tile,
		tile.slice().reverse(),
		tile.map((l) => l.slice().reverse()),
		tile
			.slice()
			.reverse()
			.map((l) => l.slice().reverse()),
	];
}

function getRots(tile) {
	const rots = [tile];
	let last = tile;
	for (let index = 0; index < 3; index++) {
		tile = tile.map((row) => row.slice());
		for (let x = 0; x < tile.length; x++) {
			for (let y = 0; y < tile[x].length; y++) {
				tile[x][y] = last[tile[x].length - y - 1][x];
			}
		}
		last = tile;
		rots.push(tile);
	}
	return rots;
}

function getBorders(tile) {
	console.log(tile);
	return [tile[0], tile.map((row) => row[row.length - 1]), tile[tile.length - 1], tile.map((row) => row[0])];
}

function recTile(tiled, tileOpts, dimension, x = 0, y = 0, seen = []) {
	if (y === dimension) {
		return tiled;
	}
	let nextX = x + 1;
	let nextY = y;
	if (nextX === dimension) {
		nextX = 0;
		nextY++;
	}
	for (let [id, tiles] of Object.entries(tileOpts)) {
		if (seen.includes(id)) {
			continue;
		}
		seen.push(id);
		for (let [transId, border] of Object.entries(tile)) {
			const top = border[0];
			const left = border[3];
			if (x > 0) {
				const [neighborId, neighborTrans] = tiled[x - 1][y];
				const neighborRight = tileOpts[neighborId][neighborTrans][1];
				if (neighborRight !== left) {
					continue;
				}
			}
			if (y > 0) {
				const [neighborId, neighborTrans] = tiled[x][y - 1];
				const neighborBottom = tileOpts[neighborId][neighborTrans][2];
				if (neighborBottom !== top) {
					continue;
				}
			}
			tiled[x][y] = [id, transId];
			const ans = recTile(tiled, tileOpts, dimension, (x = nextX), (y = nextY), seen);
			if (ans) {
				return ans;
			}
		}
		seen = seen.filter((x) => x !== id);
	}
	tiled[x][y] = null;
	return null;
}

function getTransforms(tile) {
	const possible = [];
	for (let flip of getFlips(tile)) {
		possible.push(...getRots(flip));
	}
	const output = new Set(possible);
	return Array.from(output);
}

function getTiled(tiles) {
	const tileOpts = {};
	Object.values(tiles).forEach((tile) => {
		tileOpts[getTransforms(tile)] = tile;
	});

	const tileBorderOpts = {};

	for (let [id, tiles] of Object.entries(tileOpts)) {
		for (let [idx, tile] of tiles) {
			tileBorderOpts[id] = tileBorderOpts[id] || {};
			tileBorderOpts[id][idx] = getBorders(tile);
		}
	}
	const dimension = Math.floor(Math.sqrt(tileOpts.length));
	const tiled = [];
	for (let index = 0; index < dimension; index++) {
		tiled.push(Array.from({ length: dimension }).fill([]));
	}
	return { tileOpts, tiled: recTile(tiled, tileBorderOpts, dimension) };
}

function removeGuides(tileOpts, tiled) {
	const out = [];
	for (let row of tiled) {
		const tiles = [];
		row.forEach((transId, num) => {
			const tile = tileOpts[num][transId];
			tiles.push(...tile.slice(1, -1).map((l) => l.slice(1, -1)));
		});
		for (let y = 0; y < tiles[0][0].length; y++) {
			const newRow = [];
			for (let id = 0; id < tiles.length; id++) {
				for (let x = 0; x < tiles[id].length; x++) {
					newRow.push(tiles[id][x][y]);
				}
			}
			out.push(newRow);
		}
	}
	return out;
}

const MONSTER = '                  #\n#    ##    ##    ###\n #  #  #  #  #  #   ';

function parseMonster() {
	const monsterLocs = [];
	let maxX = 0;
	let maxY = 0;

	MONSTER.split(/\n/g).forEach((line, y2) => {
		line.split('').forEach((char, x2) => {
			if (char === '#') {
				monsterLocs.append([x2, y2]);
				maxX = Math.max(x2, maxX);
				maxY = Math.max(y2, maxY);
			}
		});
	});

	return { monsterLocs, maxX, maxY };
}

function checkMonsters(grid) {
	const { monsterLocs, maxX, maxY } = parseMonster();
	const monsterSpots = [];
	for (let y = 0; y < grid.lnegth; y++) {
		if (y + maxY >= grid.length) {
			break;
		}
		for (let x = 0; x < grid[y].length; x++) {
			if (x + maxX >= grid[y].length) {
				break;
			}
			let isMonster = true;
			for (let [xOff, yOff] of monsterLocs) {
				if (grid[y + yOff][x + xOff] !== '#') {
					isMonster = false;
					break;
				}
			}
			if (isMonster) {
				for (let [dx, dy] of monsterLocs) {
					monsterSpots.push([x + dx, y + dy].join());
				}
			}
		}
	}

	if (monsterSpots.length === 0) {
		return null;
	}

	const allFilled = [];
	grid.forEach((row, y) => {
		row.forEach((char, x) => {
			if (char === '#') {
				allFilled.push([x, y].join());
			}
		});
	});

	return allFilled.filter((item) => !monsterSpots.includes(item)).length;
}

module.exports = {
	A20(contents) {
		const parts = parseInput(contents);
		getConnections(parts);

		return parts.filter((part) => part.signatures.length === 2).reduce((acc, curr) => acc * curr.id, 1n);
	},

	B20(contents) {
		const parts = parseInput(contents);
		const tiles = getTiles(parts);
		const { tileOpts, tiled } = getTiled(tiles);

		const grid = removeGuides(tileOpts, tiled);
		const gridOpts = getTransforms(grid);

		for (let opt of gridOpts) {
			const ans = checkMonsters(opt);
			if (ans) {
				return ans;
			}
		}
	},
};
