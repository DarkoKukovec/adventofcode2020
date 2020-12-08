function parseProgram(contents) {
	return contents.split(/\n/g).map((line) => {
		const [cmd, param] = line.split(' ');
		return {
			cmd,
			param: parseInt(param, 10),
			count: 0,
		};
	});
}

function execProgram(cmds) {
	cmds.forEach((item) => {
		item.count = 0;
	});

	let acc = 0;
	let pos = 0;
	let curr = cmds[pos];
	while (curr && curr.count < 1) {
		curr.count++;
		if (curr.cmd === 'jmp') {
			pos += curr.param;
		} else {
			if (curr.cmd === 'acc') {
				acc += curr.param;
			}
			pos++;
		}
		curr = cmds[pos];
	}

	return { acc, loop: Boolean(curr) };
}

module.exports = {
	A08(contents) {
		const cmds = parseProgram(contents);

		return execProgram(cmds).acc;
	},

	B08(contents) {
		const cmds = parseProgram(contents);

		for (let pos = 0; pos < cmds.length; pos++) {
			if (cmds[pos].cmd !== 'acc') {
				const newCmds = cmds.slice();
				newCmds[pos] = {
					...cmds[pos],
					cmd: cmds[pos].cmd === 'jmp' ? 'nop' : 'jmp',
				};

				const exec = execProgram(newCmds);
				if (!exec.loop) {
					return exec.acc;
				}
			}
		}
	},
};
