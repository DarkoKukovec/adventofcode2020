import 'dart:io';
import 'package:test/test.dart';
import 'package:advent_of_code_2020/02.dart';

void main() {
  String contents = new File('./data/02.txt').readAsStringSync();

  group('A', () {
    test('Example 1', () {
      expect(A02('1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc'),
          equals(2));
    });
    test('Solution', () {
      expect(A02(contents), equals(445));
    });
  });

  group('B', () {
    test('Example 1', () {
      expect(B02('1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc'),
          equals(1));
    });
    test('Solution', () {
      expect(B02(contents), equals(491));
    });
  });
}
