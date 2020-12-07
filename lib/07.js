class Bag {
	contains = [];
	containedIn = [];

	constructor(name, contains = []) {
		this.name = name;
		this.contains.push(...contains);
	}

	get count() {
		return this.contains.reduce((acc, curr) => {
			return acc + curr.count * curr.bag.count;
		}, 1);
	}
}

function parseInput(contents) {
	const keys = {};
	contents.split(/\n/g).map((row) => {
		const [target, contains] = row.split(' contain ');
		const name = target.replace(' bags', '');
		const children = (contains === 'no other bags.'
			? []
			: contains.split(', ').map((item) => ({
					count: parseInt(item.split(' ')[0], 10) || 0,
					key: item.split(' ').slice(1, 3).join(' '),
			  }))
		).map(({ count, key }) => ({ count, bag: keys[key] || new Bag(key) }));
		keys[name] = keys[name] || new Bag(name);
		keys[name].contains.push(...children);
		children.forEach((child) => {
			child.bag.containedIn.push(keys[name]);
			keys[child.bag.name] = child.bag;
		});
	});

	return keys;
}

module.exports = {
	A07(contents) {
		const keys = parseInput(contents);

		const gold = keys['shiny gold'];

		const queued = gold.containedIn;
		const items = new Set();
		while (queued.length) {
			const curr = queued.shift();
			items.add(curr.name);
			queued.push(...curr.containedIn);
		}
		return items.size;
	},

	B07(contents) {
		const keys = parseInput(contents);

		const gold = keys['shiny gold'];
		return gold.count - 1;
	},
};
