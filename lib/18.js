function getResult(contents, calc) {
	while (true) {
		const p1 = contents.lastIndexOf('(');
		if (p1 === -1) {
			break;
		}
		const p2 = contents.indexOf(')', p1);
		contents = contents.replace(contents.slice(p1, p2 + 1), getResult(contents.slice(p1 + 1, p2), calc));
	}
	const parts = contents.split(' ');

	return calc(parts);
}

module.exports = {
	A18(contents) {
		const tasks = contents.split(/\n/g);

		function calc(parts) {
			let nextOp = '+';
			let res = 0;
			for (let index = 0; index < parts.length; index++) {
				const val = parts[index];
				const num = parseInt(val, 10);
				if (isNaN(num)) {
					nextOp = val;
				} else {
					if (nextOp === '+') {
						res += num;
					} else {
						res *= num;
					}
				}
			}
			return res;
		}

		return tasks.map((task) => getResult(task, calc)).reduce((acc, curr) => acc + curr);
	},

	B18(contents) {
		const tasks = contents.split(/\n/g);

		function calc(parts) {
			while (parts.indexOf('+') !== -1) {
				const plus = parts.indexOf('+');
				parts.splice(plus - 1, 3, BigInt(parts[plus - 1]) + BigInt(parts[plus + 1]));
			}

			let res = 1n;
			let nextOp = '*';
			for (let index = 0; index < parts.length; index++) {
				const val = parts[index];
				const num = ['+', '*'].includes(val) ? false : BigInt(val);
				if (num === false) {
					nextOp = val;
				} else {
					if (nextOp === '+') {
						res += num;
					} else {
						res *= num;
					}
				}
			}
			return res;
		}

		return tasks.map((task) => getResult(task, calc)).reduce((acc, curr) => acc + curr);
	},
};
