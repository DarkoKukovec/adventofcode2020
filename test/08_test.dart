import 'dart:io';
import 'package:test/test.dart';
import 'package:advent_of_code_2020/08.dart';

void main() {
  String contents = new File('./data/08.txt').readAsStringSync();

  String example = 'nop +0\nacc +1\njmp +4\nacc +3\njmp -3\nacc -99\nacc +1\njmp -4\nacc +6';
  
  group('A', () {
    test('Example 1', () {
      expect(A08(example), equals(5));
    });
    test('Solution', () {
      expect(A08(contents), equals(1941));
    });
  });

  group('B', () {
    test('Example 1', () {
      expect(B08(example), equals(8));
    });
    test('Solution', () {
      expect(B08(contents), equals(2096));
    });
  });
}
