function parseInput(contents, pad = 0) {
	const input = {};
	const numbers = contents.split('').map(Number);

	while (numbers.length < pad) {
		numbers.push(numbers.length + 1);
	}

	numbers.forEach((num, index) => {
		input[num] = numbers[index + 1] || numbers[0];
	});

	return {
		current: numbers[0],
		input,
	};
}

function doMove(input, prev, maxVal) {
	const current = prev;

	const takeFirst = input[prev];
	const takeSecond = input[takeFirst];
	const takeThird = input[takeSecond];
	const next = input[takeThird];

	const pickedUp = [takeFirst, takeSecond, takeThird];
	let insertAfter = current - 1;
	while (pickedUp.includes(insertAfter) || insertAfter < 1) {
		insertAfter--;
		if (insertAfter < 1) {
			insertAfter = maxVal;
		}
	}

	input[prev] = next;
	input[takeThird] = input[insertAfter];
	input[insertAfter] = takeFirst;

	return next;
}

module.exports = {
	A23(contents) {
		let { current, input } = parseInput(contents);
		for (let move = 0; move < 100; move++) {
			current = doMove(input, current, 9);
		}

		let next = input[1];
		let output = '';
		do {
			output += next;
			next = input[next];
		} while (next !== 1);

		return parseInt(output, 10);
	},

	B23(contents) {
		let { current, input } = parseInput(contents, 1_000_000);
		for (let move = 0; move < 10_000_000; move++) {
			current = doMove(input, current, 1_000_000);
		}
		const first = input[1];
		const second = input[first];
		return BigInt(first) * BigInt(second);
	},
};
