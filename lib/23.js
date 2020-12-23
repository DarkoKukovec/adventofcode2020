function play(contents, count, moves) {
	const numbers = contents.split('').map(Number);
	let current = numbers[0];
	while (numbers.length < count) {
		numbers.push(numbers.length + 1);
	}

	const input = numbers.reduce((acc, num, index) => {
		acc[num] = numbers[index + 1] || numbers[0];
		return acc;
	}, {});

	for (let move = 0; move < moves; move++) {
		const takeFirst = input[current];
		const takeSecond = input[takeFirst];
		const takeThird = input[takeSecond];
		const next = input[takeThird];
		input[current] = next;

		const pickedUp = [takeFirst, takeSecond, takeThird];
		do {
			current = current < 2 ? numbers.length : current - 1;
		} while (pickedUp.includes(current));

		input[takeThird] = input[current];
		input[current] = takeFirst;
		current = next;
	}

	return input;
}

module.exports = {
	A23(contents) {
		const input = play(contents, 0, 100);
		let next = 1;
		let output = '';
		do {
			output += next = input[next];
		} while (next !== 1);
		return parseInt(output, 10);
	},

	B23(contents) {
		const input = play(contents, 1_000_000, 10_000_000);
		const first = input[1];
		const second = input[first];
		return BigInt(first) * BigInt(second);
	},
};
