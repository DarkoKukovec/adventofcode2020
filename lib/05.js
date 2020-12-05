function getSeatInfo(contents) {
	return contents.split(/\n/g).map((ticket) => {
		const code = ticket.replace(/F|L/g, 0).replace(/B|R/g, 1);
		const x = parseInt(code.slice(0, 7), 2);
		const y = parseInt(code.slice(7), 2);
		const seatId = x * 8 + y;
		return { x, y, seatId };
	});
}

module.exports = {
	A05(contents) {
		const tickets = getSeatInfo(contents);

		return Math.max(...tickets.map((ticket) => ticket.seatId));
	},

	B05(contents) {
		const tickets = getSeatInfo(contents);
		const ids = tickets.map((ticket) => ticket.seatId).sort((a, b) => a - b);

		for (let i = 1; i < ids.length; i++) {
			if (ids[i] - ids[i - 1] === 2) {
				return ids[i] - 1;
			}
		}
	},
};
