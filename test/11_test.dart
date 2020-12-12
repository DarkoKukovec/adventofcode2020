import 'dart:io';
import 'package:test/test.dart';
import 'package:advent_of_code_2020/11.dart';

void main() {
  String contents = new File('./data/11.txt').readAsStringSync();

  String example = 'L.LL.LL.LL\nLLLLLLL.LL\nL.L.L..L..\nLLLL.LL.LL\nL.LL.LL.LL\nL.LLLLL.LL\n..L.L.....\nLLLLLLLLLL\nL.LLLLLL.L\nL.LLLLL.LL';
  
  group('A', () {
    test('Example 1', () {
      expect(A11(example), equals(37));
    });
    test('Solution', () {
      expect(A11(contents), equals(2412));
    });
  });

  group('B', () {
    test('Example 1', () {
      expect(B11(example), equals(26));
    });
    test('Solution', () {
      expect(B11(contents), equals(2176));
    });
  });
}
