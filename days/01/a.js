const fs = require('fs');

const contents = fs.readFileSync('input.txt', 'utf-8');
const list = contents.split(/\n/g).map(Number);

for (let x = 0; x < list.length - 1; x++) {
  for (let y = x + 1; y < list.length; y++) {
    const a = list[x];
    const b = list[y];

    if (a + b === 2020) {
      console.log(a * b);
      return;
    }
  }
}
