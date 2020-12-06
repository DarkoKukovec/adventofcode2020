import 'dart:io';
import 'package:test/test.dart';
import 'package:advent_of_code_2020/06.dart';

void main() {
  String contents = new File('./data/06.txt').readAsStringSync();
  
  group('A', () {
    test('Example 1', () {
      expect(A06('abc\n\na\nb\nc\n\nab\nac\n\na\na\na\na\n\nb'), equals(11));
    });
    test('Solution', () {
      expect(A06(contents), equals(6630));
    });
  });

  group('B', () {
    test('Example 1', () {
      expect(B06('abc\n\na\nb\nc\n\nab\nac\n\na\na\na\na\n\nb'), equals(6));
    });
    test('Solution', () {
      expect(B06(contents), equals(3437));
    });
  });
}
