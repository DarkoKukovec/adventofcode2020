function parseInput(contents) {
	return contents.split(/\n/g).map((row) => {
		const [ingredients, allergens] = row.split(' (contains ');
		return {
			ingredients: ingredients.split(/\s/g),
			allergens: allergens.slice(0, -1).split(/,\s/g),
		};
	});
}

function getAllergens(foods) {
	const checkedAllergens = [];
	const map = {};
	foods.forEach((food) => {
		food.allergens.forEach((allergen) => {
			if (checkedAllergens.includes(allergen)) {
				Object.keys(map)
					.filter((key) => !food.ingredients.includes(key))
					.forEach((key) => {
						if (map[key].includes(allergen)) {
							map[key] = map[key].filter((x) => x !== allergen);
						}
					});
				food.ingredients.forEach((ingredient) => {
					map[ingredient] = map[ingredient] || [];
				});
			} else {
				food.ingredients.forEach((ingredient) => {
					map[ingredient] = map[ingredient] || [];
					map[ingredient].push(allergen);
				});
				checkedAllergens.push(allergen);
			}
		});
	});
	return map;
}

module.exports = {
	A21(contents) {
		const foods = parseInput(contents);
		const map = getAllergens(foods);
		const safe = Object.keys(map).filter((key) => map[key].length === 0);
		return foods
			.map((food) => food.ingredients)
			.flat()
			.filter((ingredient) => safe.includes(ingredient)).length;
	},

	B21(contents) {
		const foods = parseInput(contents);
		const map = getAllergens(foods);
		const allergens = {};
		let list = Object.keys(map).filter((ing) => map[ing].length > 1);

		while (list.length) {
			Object.keys(map)
				.filter((ing) => map[ing].length === 1)
				.forEach((ing) => {
					const allergen = map[ing][0];
					allergens[allergen] = ing;
					list.forEach((ing2) => {
						map[ing2] = map[ing2].filter((x) => x !== allergen);
					});
					list = list.filter((x) => x !== ing);
				});
		}

		return Object.keys(allergens)
			.sort()
			.map((key) => allergens[key])
			.join(',');
	},
};
