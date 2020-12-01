import 'dart:io';
import 'package:test/test.dart';
import 'package:advent_of_code_2020/01.dart';

void main() {
  String contents = new File('./data/01.txt').readAsStringSync();

  group('A', () {
    test('Example 1', () {
      expect(A01('1721\n979\n366\n299\n675\n1456'),
          equals(514579));
    });
    test('Solution', () {
      expect(A01(contents), equals(567171));
    });
  });

  group('B', () {
    test('Example 1', () {
      expect(B01('1721\n979\n366\n299\n675\n1456'),
          equals(241861950));
    });
    test('Solution', () {
      expect(B01(contents), equals(212428694));
    });
  });
}
