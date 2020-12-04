function parseData(contents) {
	return contents.split(/\n\n/g).map((item) =>
		item
			.replace(/\n/g, ' ')
			.split(/\s+/g)
			.reduce((agg, curr) => {
				const [name, value] = curr.split(':');
				agg[name] = value;
				return agg;
			}, {}),
	);
}

module.exports = {
	A04(contents) {
		const data = parseData(contents);

		return data.filter((item) => {
			const keys = Object.keys(item);
			return keys.length === 8 || (keys.length === 7 && !('cid' in item));
		}).length;
	},

	B04(contents) {
		const data = parseData(contents);

		return data.filter((item) => {
			const byr = parseInt(item.byr, 10);
			if (!byr || byr < 1920 || byr > 2002) {
				return false;
			}

			const iyr = parseInt(item.iyr, 10);
			if (!iyr || iyr < 2010 || iyr > 2020) {
				return false;
			}

			const eyr = parseInt(item.eyr, 10);
			if (!eyr || eyr < 2020 || eyr > 2030) {
				return false;
			}

			const hgt = parseInt(item.hgt?.slice(0, -2), 10);
			const measure = item.hgt?.slice(-2);
			if (!measure || !hgt) {
				return false;
			}
			if (measure === 'cm' && (hgt < 150 || hgt > 193)) {
				return false;
			}
			if (measure === 'in' && (hgt < 59 || hgt > 76)) {
				return false;
			}

			if (!/^\#[0-9a-f]{6}$/.test(item.hcl)) {
				return false;
			}

			if (!['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(item.ecl)) {
				return false;
			}

			if (!/^[0-9]{9}$/.test(item.pid)) {
				return false;
			}

			return true;
		}).length;
	},
};
