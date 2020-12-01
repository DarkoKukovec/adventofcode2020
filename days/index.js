const day = process.argv[2].slice(0, 2).padStart(2, '0');

const fs = require('fs');

const exec = require(`../lib/${day}`);
const input = fs.readFileSync(`./data/${day}.txt`, 'utf-8');

console.log(exec[`A${day}`](input));
console.log(exec[`B${day}`](input));
