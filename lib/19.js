function parseInput(contents) {
	const rules = [];
	const [ruleList, inputList] = contents.split('\n\n');

	let autoRules = -1;

	function addAndRule(number, content) {
		const nums = content.split(/\s/).filter(Boolean);
		rules[number] = (input) => {
			let values = [input];
			for (let index = 0; index < nums.length; index++) {
				const num = nums[index];
				values = values.map((val) => rules[num](val)).flat();
			}
			return values;
		};
	}

	ruleList.split(/\n/g).forEach((rule) => {
		const [number, content] = rule.split(': ');
		if (content.indexOf('"') !== -1) {
			rules[number] = (input) => {
				if (input[0] === content[1]) {
					return [input.slice(1)];
				} else {
					return [];
				}
			};
		} else if (content.indexOf('|') !== -1) {
			const numbers = content.split(/\|/g).map((val) => {
				autoRules--;
				addAndRule(autoRules, val);
				return autoRules;
			});
			rules[number] = (input) => {
				return numbers.map((num) => rules[num](input)).flat();
			};
		} else {
			addAndRule(number, content);
		}
	});

	return {
		rules,
		inputs: inputList.split(/\n/g),
	};
}

module.exports = {
	A19(contents) {
		const { rules, inputs } = parseInput(contents);
		return inputs.filter((input) => rules[0](input).filter((match) => match === '').length).length;
	},

	B19(contents) {
		contents = contents
			.split(/\n/g)
			.map((line) => {
				if (line.startsWith('8:')) {
					return '8: 42 | 42 8';
				} else if (line.startsWith('11:')) {
					return '11: 42 31 | 42 11 31';
				}
				return line;
			})
			.join('\n');
		const { rules, inputs } = parseInput(contents);
		return inputs.filter((input) => rules[0](input).filter((match) => match === '').length).length;
	},
};
