function parseInput(contents) {
	const [time, items] = contents.split('\n');
	return {
		time: parseInt(time, 10),
		items: items.split(',').map(Number),
	};
}

// https://en.wikipedia.org/wiki/Chinese_remainder_theorem
function crt(a, b) {
	let x = 1n;
	let y = 0n;
	let r = 0n;
	let s = 1n;

	while (b !== 0n) {
		let c = a % b;
		let q = a / b;
		a = b;
		b = c;

		let rPrim = r;
		let sPrim = s;
		r = x - q * r;
		s = y - q * s;
		x = rPrim;
		y = sPrim;
	}

	return x;
}

module.exports = {
	A13(contents) {
		const { time, items } = parseInput(contents);
		let nextBus = {
			id: -1,
			time: Infinity,
		};
		items.filter(Boolean).forEach((id) => {
			const nextLeaveNumber = Math.ceil(time / id);
			const nextLeave = nextLeaveNumber * id;
			if (nextLeave < nextBus.time) {
				nextBus = {
					id,
					time: nextLeave,
				};
			}
		});

		return nextBus.id * (nextBus.time - time);
	},
	B13(contents) {
		const { items } = parseInput(contents);
		const buses = items
			.map((id, index) => {
				if (id) {
					const newId = BigInt(id);
					return { id: newId, index: newId - BigInt(index) };
				}
			})
			.filter(Boolean);

		const a = buses
			.map(({ id, index }) => {
				const N = buses.filter((x) => x.id !== id).reduce((acc, x) => acc * x.id, 1n);
				const M = crt(N, id);
				return index * N * M;
			})
			.reduce((acc, curr) => acc + curr);
		const b = buses.reduce((acc, x) => acc * x.id, 1n);

		return parseInt(((a % b) + b) % b, 10);
	},
};
