Map<String, int> VAL = {
  '.': 0,
  'L': 1,
  '#': 2,
};

List<List<int>> parseInput(String contents) {
  return contents.split('\n').map((e) => e.split('').map((x) => VAL[x]).toList()).toList();
}

int findInDirection(int x, int y, List<List<int>> seats, int dirX, int dirY, int distance) {
  int posX = x + dirX;
  int posY = y + dirY;
  while (distance > 0 && posX >= 0 && posX < seats.length && posY >= 0 && posY < seats[0].length) {
    if (seats[posX][posY] > 0) {
      return seats[posX][posY];
    }
    posX += dirX;
    posY += dirY;
    distance--;
  }
  return 0;
}

bool toggleSeat(int x, int y, List<List<int>> seats, bool advanced) {
  int distance = advanced ? 1000 : 1; // Good enough?

  int takenCount = [
    findInDirection(x, y, seats, -1, -1, distance),
    findInDirection(x, y, seats, -1,  0, distance),
    findInDirection(x, y, seats, -1,  1, distance),
    findInDirection(x, y, seats,  0, -1, distance),
    findInDirection(x, y, seats,  0,  1, distance),
    findInDirection(x, y, seats,  1, -1, distance),
    findInDirection(x, y, seats,  1,  0, distance),
    findInDirection(x, y, seats,  1,  1, distance),
  ].where((x) => x == 2).length;

  int seat = seats[x][y];
  if (seat == 1) {
    return takenCount == 0;
  } else if (seat == 2) {
    return takenCount >= (advanced ? 5 : 4);
  }
  return false;
}

int solve(String contents, bool advanced) {
  List<List<int>> seats = parseInput(contents);

  List<List<int>> changes;
  do {
    changes = [];
    for (int x = 0; x < seats.length; x++) {
      for (int y = 0; y < seats[0].length; y++) {
        if (toggleSeat(x, y, seats, advanced)) {
          changes.add([x, y]);
        }
      }
    }

    changes.forEach((element) {
      int x = element[0];
      int y = element[1];
      seats[x][y] = seats[x][y] == 2 ? 1 : 2;
    });
  } while (changes.length > 0);

  return seats
    .map((e) => e.where((x) => x == 2).length)
    .reduce((value, element) => value + element);
}

int A11(String contents) {
  return solve(contents, false);
}

int B11(String contents) {
  return solve(contents, true);
}
