import 'dart:io';
import 'package:test/test.dart';
import 'package:advent_of_code_2020/03.dart';

void main() {
  String contents = new File('./data/03.txt').readAsStringSync();
  
  String example = '..##.......\n#...#...#..\n.#....#..#.\n..#.#...#.#\n.#...##..#.\n..#.##.....\n.#.#.#....#\n.#........#\n#.##...#...\n#...##....#\n.#..#...#.#';

  group('A', () {
    test('Example 1', () {
      expect(A03(example),
          equals(7));
    });
    test('Solution', () {
      expect(A03(contents), equals(198));
    });
  });

  group('B', () {
    test('Example 1', () {
      expect(B03(example),
          equals(336));
    });
    test('Solution', () {
      expect(B03(contents), equals(5140884672));
    });
  });
}
