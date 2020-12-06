module.exports = {
	A06(contents) {
		const groups = contents.split(/\n\n/g).map((group) => {
			const gr = group.replace(/\n/g, '').split('');
			return new Set(gr).size;
		});

		return groups.reduce((acc, curr) => acc + curr);
	},

	B06(contents) {
		const groups = contents.split(/\n\n/g).map((group) => {
			const people = group.split(/\n/g).map((person) => person.split(''));
			return people[0].filter((q) => people.every((person) => person.includes(q))).length;
		});

		return groups.reduce((acc, curr) => acc + curr);
	},
};
