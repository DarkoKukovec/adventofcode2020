function parseInput(contents) {
	return contents.split(/\n/g).map((line) =>
		line.startsWith('mask')
			? {
					type: 'mask',
					value: line.slice(7),
			  }
			: {
					type: 'mem',
					key: parseInt(line.split('[')[1].split(']')[0], 10),
					value: parseInt(line.split(' = ')[1], 10),
			  },
	);
}

function toBits(value) {
	let bits = value.toString(2);
	return bits.padStart(36, '0');
}

function toNumber(value) {
	return parseInt(value, 2);
}

function setValue(value, mask) {
	let bits = '';

	for (let index = 0; index < 36; index++) {
		bits += mask[index] === 'X' ? value[index] : mask[index];
	}

	return bits.padStart(36, '0');
}

function mapKeys(val) {
	const nextIndex = val.indexOf('X');
	if (nextIndex === -1) {
		return [toNumber(val)];
	}

	return [
		...mapKeys(val.slice(0, nextIndex) + '0' + val.slice(nextIndex + 1)),
		...mapKeys(val.slice(0, nextIndex) + '1' + val.slice(nextIndex + 1)),
	];
}

function getKeys(mask, val) {
	const value = toBits(val);
	let bits = '';

	for (let index = 0; index < 36; index++) {
		bits += mask[index] === '0' ? value[index] : mask[index];
	}

	return mapKeys(bits);
}

module.exports = {
	A14(contents) {
		const memory = {};
		let mask;
		parseInput(contents).forEach((input) => {
			if (input.type === 'mask') {
				mask = input.value;
			} else {
				memory[input.key] = setValue(toBits(input.value), mask);
			}
		});

		return Object.values(memory).reduce((acc, curr) => acc + toNumber(curr), 0);
	},

	B14(contents) {
		const memory = {};
		let mask;
		parseInput(contents).forEach((input) => {
			if (input.type === 'mask') {
				mask = input.value;
			} else {
				const keys = getKeys(mask, input.key);
				keys.forEach((key) => {
					memory[key] = input.value;
				});
			}
		});

		return Object.values(memory).reduce((acc, curr) => acc + curr, 0);
	},
};
