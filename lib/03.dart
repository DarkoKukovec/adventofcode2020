int findCount(Iterable<List<String>> map, int diffX, int diffY) {
  int widthCount = map.elementAt(0).length;
	int x = 0;
	int y = 0;
	int trees = 0;

	while (y < map.length) {
    trees += map.elementAt(y).elementAt(x % widthCount) == '#' ? 1 : 0;
		x += diffX;
		y += diffY;
	}

	return trees;
}

int A03(String content) {
  Iterable<List<String>> map = content.split('\n').map((e) => e.split(''));

  return findCount(map, 3, 1);
}

int B03(String content) {
  Iterable<List<String>> map = content.split('\n').map((e) => e.split(''));

  return (
    findCount(map, 1, 1) * findCount(map, 3, 1) * findCount(map, 5, 1) * findCount(map, 7, 1) * findCount(map, 1, 2)
  );
}