class DirData {
  int x;
  int y;
  String R;

  DirData(this.x, this.y, this.R);
}

Map<String, DirData> DIR = {
  'E': new DirData(1, 0, 'S'),
  'S': new DirData(0, -1, 'W'),
  'W': new DirData(-1, 0, 'N'),
  'N': new DirData(0, 1, 'E'),
};

int Function(List<String>) move(int swpX, int swpY, bool waypoint) {
  int wpX = swpX;
  int wpY = swpY;
  int x = 0;
  int y = 0;
  String dir = 'E';

  return (List<String> args) {
    String direction = args[0];
    int distance = int.parse(args[1]);
    if (direction == 'F') {
      x += distance * wpX;
      y += distance * wpY;
    } else if (direction == 'L' || direction == 'R') {
      int rotations = (distance / 90).round() % 4;
      int times = direction == 'L' ? 4 - rotations : rotations;
      for (int index = 0; index < times; index++) {
        dir = DIR[dir].R;
        int tmpX = wpX;
        wpX = wpY;
        wpY = -tmpX;
      }
    } else if (waypoint) {
			wpX += distance * DIR[direction].x;
			wpY += distance * DIR[direction].y;
		} else {
			x += distance * DIR[direction].x;
			y += distance * DIR[direction].y;
    }
    return x.abs() + y.abs();
  };
}

int solve(String contents, int wpX, int wpY, bool waypoint) {
  return contents
    .split('\n')
    .map((ins) => [ins[0], ins.substring(1)])
    .map(move(wpX, wpY, waypoint))
    .toList()
    .last;
}

int A12(String contents) {
  return solve(contents, 1, 0, false);
}

int B12(String contents) {
  return solve(contents, 10, 1, true);
}
