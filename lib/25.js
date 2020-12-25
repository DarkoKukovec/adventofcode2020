const COEF = 20201227n;

function getLoopSize(startSubjectNumber, publicKey) {
	let subjectNumber = 1n;
	let loopSize = 0n;
	while (subjectNumber !== publicKey) {
		subjectNumber = (subjectNumber * startSubjectNumber) % COEF;
		loopSize++;
	}
	return loopSize;
}

module.exports = {
	A25(contents) {
		let encryptionKey = 1n;
		let [cardPublicKey, doorPublicKey] = contents.split('\n').map(BigInt);
		let cardLoopSize = getLoopSize(7n, cardPublicKey);

		for (let step = 0; step < cardLoopSize; step++) {
			encryptionKey = (encryptionKey * doorPublicKey) % COEF;
		}

		return encryptionKey;
	},

	B25(contents) {},
};
