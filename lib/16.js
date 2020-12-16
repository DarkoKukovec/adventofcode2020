function parseInput(content) {
	const [rules, my, others] = content.split(/\n\n/g);

	return {
		rules: rules.split(/\n/g).map((val) => {
			const match = val.match(/([\w\s]+)+:\s(\d+)-(\d+)\sor\s(\d+)-(\d+)/);
			return {
				name: match[1],
				ranges: match.slice(2).map(Number),
			};
		}),
		my: my.split(/\n/g)[1].split(',').map(Number),
		others: others
			.split(/\n/g)
			.slice(1)
			.map((item) => item.split(',').map(Number)),
	};
}

function isMatch(rule, item) {
	return (item >= rule.ranges[0] && item <= rule.ranges[1]) || (item >= rule.ranges[2] && item <= rule.ranges[3]);
}

module.exports = {
	A16(contents) {
		const { rules, my, others } = parseInput(contents);

		return others
			.flat()
			.filter((item) => {
				return !rules.some((rule) => isMatch(rule, item));
			})
			.reduce((acc, curr) => acc + curr);
	},

	B16(contents) {
		const { rules, my, others } = parseInput(contents);

		// Filter valid
		const valid = others.filter((ticket) => {
			return ticket.every((item) => {
				return rules.some((rule) => isMatch(rule, item));
			});
		});

		const matches = [];
		const fields = [];

		rules.forEach((rule) => {
			for (let index = 0; index < rules.length; index++) {
				if (valid.every((item) => isMatch(rule, item[index]))) {
					matches[index] = matches[index] || [];
					matches[index].push(rule.name);
				}
			}
		});

		console.log('matches', matches);

		let found = 0;
		while (found < rules.length) {
			const nextIndex = matches.findIndex((item) => item.length === 1);
			fields[nextIndex] = matches[nextIndex][0];
			matches.forEach((item, index) => {
				matches[index] = item.filter((x) => x !== fields[nextIndex]);
			});
			found++;
		}

		console.log(fields);

		return my.reduce((acc, curr, index) => {
			if (fields[index].startsWith('departure')) {
				return acc * curr;
			}
			return acc;
		}, 1);
	},
};
