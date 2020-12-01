const fs = require('fs');

const { A01, B01 } = require('../lib/01');
const input = fs.readFileSync('./data/01.txt', 'utf-8');

console.log(A01(input));
console.log(B01(input));
