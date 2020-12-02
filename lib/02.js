module.exports = {
	A02(contents) {
		const lines = contents
			.split(/\n/g)
			.map((line) => {
				return line.match(/(\d+)\-(\d+)\s([a-z])\:\s([a-z]+)/).slice(1, 5);
			})
			.filter(([min, max, char, str]) => {
				const length = str.split('').filter((ch) => ch === char).length;
				return length >= min && length <= max;
			});

		return lines.length;
	},

	B02(contents) {
		const lines = contents
			.split(/\n/g)
			.map((line) => {
				return line.match(/(\d+)\-(\d+)\s([a-z])\:\s([a-z]+)/).slice(1, 5);
			})
			.filter(([a, b, char, str]) => {
				return (str[a - 1] === char) ^ (str[b - 1] === char);
			});

		return lines.length;
	},
};
