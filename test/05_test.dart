import 'dart:io';
import 'package:test/test.dart';
import 'package:advent_of_code_2020/05.dart';

void main() {
  String contents = new File('./data/05.txt').readAsStringSync();
  
  group('A', () {
    test('Example 1', () {
      expect(A05('FBFBBFFRLR\nBFFFBBFRRR\nFFFBBBFRRR\nBBFFBBFRLL'), equals(820));
    });
    test('Solution', () {
      expect(A05(contents), equals(883));
    });
  });

  group('B', () {
    test('Solution', () {
      expect(B05(contents), equals(532));
    });
  });
}
