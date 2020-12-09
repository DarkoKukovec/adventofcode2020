function parseInput(contents) {
	return contents.split(/\n/g).map(Number);
}

function checkValid(window, target) {
	for (let index = 0; index < window.length; index++) {
		const curr = window[index];
		const q = target - curr;
		if (window.slice(index + 1).includes(q)) {
			return true;
		}
	}
	return false;
}

function findInvalid(input, windowSize) {
	let position = windowSize;
	while (position < input.length) {
		const target = input[position];
		const check = input.slice(position - windowSize, position);

		if (!checkValid(check, target)) {
			return target;
		}

		position++;
	}
}

module.exports = {
	A09(contents, windowSize = 25) {
		const input = parseInput(contents);

		return findInvalid(input, windowSize);
	},

	B09(contents, windowSize = 25) {
		const input = parseInput(contents);

		const invalid = findInvalid(input, windowSize);

		let position = 0;
		while (position < input.length) {
			let numbers = [];
			let sum = 0;
			let count = 0;

			while (sum < invalid) {
				sum += input[position + count];
				numbers.push(input[position + count]);
				count++;
			}

			if (sum === invalid && count > 1) {
				return Math.min(...numbers) + Math.max(...numbers);
			}

			position++;
		}
	},
};
