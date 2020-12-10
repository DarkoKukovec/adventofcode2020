function parseInput(contents) {
	const adapters = contents
		.split(/\n/g)
		.map(Number)
		.sort((a, b) => a - b);

	adapters.unshift(0);
	adapters.push(adapters[adapters.length - 1] + 3);
	return adapters;
}

function matchCount(remaining) {
	let count = 0;
	for (let index = 0; index < remaining[0]; index++) {
		if (remaining.length - 1 === index) {
			count++;
			break;
		}
		count += matchCount(remaining.slice(index + 1));
	}
	return count;
}

module.exports = {
	A10(contents) {
		const adapters = parseInput(contents);

		let ones = 0;
		let threes = 0;

		for (let index = 1; index < adapters.length; index++) {
			const diff = adapters[index] - adapters[index - 1];
			if (diff === 1) {
				ones++;
			} else if (diff === 3) {
				threes++;
			}
		}

		return ones * threes;
	},

	B10(contents) {
		const adapters = parseInput(contents);

		const options = adapters
			.map((item, index, arr) => arr.slice(index + 1).filter((x) => x - item < 4).length)
			.slice(0, -1);

		let res = 1;
		const slots = [];
		for (let index = 0; index < options.length; index++) {
			slots.push(options[index]);
			if (options[index] === 1) {
				res *= matchCount(slots);
				slots.length = 0;
			}
		}

		return res;
	},
};
