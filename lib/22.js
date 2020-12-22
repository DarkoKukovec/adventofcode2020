function parseInput(contents) {
	const [one, two] = contents.split(/\n\n/g).map((player) => player.split(/\n/g).slice(1).map(Number));
	return { one, two };
}

function recursiveCombat(one, two, depth) {
	const deckCache = [[], []];
	while (one.length && two.length) {
		const deck = [one.join(), two.join()];
		if (depth && (deckCache[0].includes(deck[0]) || deckCache[1].includes(deck[1]))) {
			return 1;
		}
		deckCache[0].push(deck[0]);
		deckCache[1].push(deck[1]);
		const a = one.shift();
		const b = two.shift();
		if (a <= one.length && b <= two.length) {
			if (recursiveCombat(one.slice(0, a), two.slice(0, b), depth + 1) === 1) {
				one.push(a, b);
			} else {
				two.push(b, a);
			}
		} else {
			if (a > b) {
				one.push(a, b);
			} else {
				two.push(b, a);
			}
		}
	}

	if (depth) {
		return one.length ? 1 : 2;
	} else {
		return [...one, ...two].reverse().reduce((acc, curr, index) => {
			return acc + curr * (index + 1);
		}, 0);
	}
}

module.exports = {
	A22(contents) {
		const { one, two } = parseInput(contents);
		while (one.length && two.length) {
			const a = one.shift();
			const b = two.shift();
			if (a > b) {
				one.push(a, b);
			} else {
				two.push(b, a);
			}
		}
		return [...one, ...two].reverse().reduce((acc, curr, index) => {
			return acc + curr * (index + 1);
		}, 0);
	},

	B22(contents) {
		const { one, two } = parseInput(contents);

		return recursiveCombat(one, two, 0);
	},
};
