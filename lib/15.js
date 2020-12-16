function parseInput(contents) {
	return contents.split(',').map(Number);
}

function findIndex(numbers, index) {
	let length = numbers.length;
	let last = numbers[numbers.length - 1];
	let map = {};
	const fragmentCount = 50;

	for (let i = 0; i < fragmentCount; i++) {
		map[i] = {};
	}

	numbers.slice(0, -1).forEach((x, i) => {
		map[x % fragmentCount][x] = i + 1;
	});

	while (length < index) {
		const fragment = last % fragmentCount;
		const lastIndex = map[fragment][last] || -1;
		map[fragment][last] = length;
		if (lastIndex === -1) {
			last = 0;
		} else {
			last = length - lastIndex;
		}
		length++;
	}

	return last;
}

module.exports = {
	A15(contents) {
		const numbers = parseInput(contents);

		return findIndex(numbers, 2020);
	},
	B15(contents) {
		const numbers = parseInput(contents);

		return findIndex(numbers, 30000000);
	},
};
