function parseInput(contents) {
	const map = {};
	let maxX;
	let maxY;

	contents.split(/\n/g).map((row, x, rows) => {
		maxX = rows.length - 1;
		maxY = row.split('').length - 1;
		row.split('').map((item, y) => {
			map[[x, y, 0, 0]] = item === '#';
		});
	});

	return { map, minX: 0, minY: 0, maxX, maxY };
}

function checkActiveNeighbors([x, y, z, w], map) {
	let count = 0;
	for (let ix = -1; ix <= 1; ix++) {
		for (let iy = -1; iy <= 1; iy++) {
			for (let iz = -1; iz <= 1; iz++) {
				for (let iw = -1; iw <= 1; iw++) {
					if ((ix || iy || iz || iw) && map[[x + ix, y + iy, z + iz, w + iw]]) {
						count++;
					}
				}
			}
		}
	}
	return count;
}

module.exports = {
	A17(contents) {
		let { map, minX, minY, maxX, maxY } = parseInput(contents);
		let minZ = 0;
		let maxZ = 0;

		for (let cycle = 0; cycle < 6; cycle++) {
			let newMap = {};
			for (let x = minX - 1; x <= maxX + 1; x++) {
				for (let y = minY - 1; y <= maxY + 1; y++) {
					for (let z = minZ - 1; z <= maxZ + 1; z++) {
						const activeNeighbors = checkActiveNeighbors([x, y, z, 0], map);
						if (map[[x, y, z, 0]]) {
							if (activeNeighbors === 2 || activeNeighbors === 3) {
								newMap[[x, y, z, 0]] = true;
							}
						} else if (activeNeighbors === 3) {
							newMap[[x, y, z, 0]] = true;
							minX = Math.min(minX, x);
							minY = Math.min(minY, y);
							minZ = Math.min(minZ, z);
							maxX = Math.max(maxX, x);
							maxY = Math.max(maxY, y);
							maxZ = Math.max(maxZ, z);
						}
					}
				}
			}
			map = newMap;
		}

		return Object.values(map).filter(Boolean).length;
	},

	B17(contents) {
		let { map, minX, minY, maxX, maxY } = parseInput(contents);
		let minZ = 0;
		let maxZ = 0;
		let minW = 0;
		let maxW = 0;

		for (let cycle = 0; cycle < 6; cycle++) {
			let newMap = {};
			for (let x = minX - 1; x <= maxX + 1; x++) {
				for (let y = minY - 1; y <= maxY + 1; y++) {
					for (let z = minZ - 1; z <= maxZ + 1; z++) {
						for (let w = minW - 1; w <= maxW + 1; w++) {
							const activeNeighbors = checkActiveNeighbors([x, y, z, w], map);
							if (map[[x, y, z, w]]) {
								if (activeNeighbors === 2 || activeNeighbors === 3) {
									newMap[[x, y, z, w]] = true;
								}
							} else if (activeNeighbors === 3) {
								newMap[[x, y, z, w]] = true;
								minX = Math.min(minX, x);
								minY = Math.min(minY, y);
								minZ = Math.min(minZ, z);
								minW = Math.min(minW, w);
								maxX = Math.max(maxX, x);
								maxY = Math.max(maxY, y);
								maxZ = Math.max(maxZ, z);
								maxW = Math.max(maxW, w);
							}
						}
					}
				}
			}
			map = newMap;
		}

		return Object.values(map).filter(Boolean).length;
	},
};
