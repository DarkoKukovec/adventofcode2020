module.exports = {
  A01(contents) {
    const list = contents.split(/\n/g).map(Number);

    for (let x = 0; x < list.length - 1; x++) {
      for (let y = x + 1; y < list.length; y++) {
        const a = list[x];
        const b = list[y];

        if (a + b === 2020) {
          return a * b;
        }
      }
    }
  },

  B01(contents) {
    const list = contents.split(/\n/g).map(Number);

    for (let x = 0; x < list.length - 2; x++) {
      for (let y = x + 1; y < list.length - 1; y++) {
        for (let z = y + 1; z < list.length; z++) {
          const a = list[x];
          const b = list[y];
          const c = list[z];
    
          if (a + b + c === 2020) {
            return a * b * c;
          }
        }
      }
    }
  }
};
