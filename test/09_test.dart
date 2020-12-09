import 'dart:io';
import 'package:test/test.dart';
import 'package:advent_of_code_2020/09.dart';

void main() {
  String contents = new File('./data/09.txt').readAsStringSync();

  String example = '35\n20\n15\n25\n47\n40\n62\n55\n65\n95\n102\n117\n150\n182\n127\n219\n299\n277\n309\n576';
  
  group('A', () {
    test('Example 1', () {
      expect(A09(example, windowSize: 5), equals(127));
    });
    test('Solution', () {
      expect(A09(contents), equals(10884537));
    });
  });

  group('B', () {
    test('Example 1', () {
      expect(B09(example, windowSize: 5), equals(62));
    });
    test('Solution', () {
      expect(B09(contents), equals(1261309));
    });
  });
}
