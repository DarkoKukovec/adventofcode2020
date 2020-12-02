int A02(String contents) {
  RegExp parser = RegExp(r'(\d+)\-(\d+)\s([a-z])\:\s([a-z]+)');

  Iterable<String> list = contents.split('\n').where((val) {
    int min = int.parse(parser.firstMatch(val).group(1));
    int max = int.parse(parser.firstMatch(val).group(2));
    String char = parser.firstMatch(val).group(3);
    String str = parser.firstMatch(val).group(4);
    int len = str.split('').where((ch) { return ch == char; }).length;
    return len >= min && len <= max;
  });

  return list.length;
}

int B02(String contents) {
  RegExp parser = RegExp(r'(\d+)\-(\d+)\s([a-z])\:\s([a-z]+)');

  Iterable<String> list = contents.split('\n').where((val) {
    int a = int.parse(parser.firstMatch(val).group(1));
    int b = int.parse(parser.firstMatch(val).group(2));
    String char = parser.firstMatch(val).group(3);
    String str = parser.firstMatch(val).group(4);
    return (str.substring(a - 1, a) == char && str.substring(b - 1, b) != char) || (str.substring(a - 1, a) != char && str.substring(b - 1, b) == char);
  });

  return list.length;
}