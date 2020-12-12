import 'dart:io';
import 'package:test/test.dart';
import 'package:advent_of_code_2020/12.dart';

void main() {
  String contents = new File('./data/12.txt').readAsStringSync();

  String example = 'F10\nN3\nF7\nR90\nF11';
  
  group('A', () {
    test('Example 1', () {
      expect(A12(example), equals(25));
    });
    // test('Solution', () {
    //   expect(A12(contents), equals(582));
    // });
  });

  // group('B', () {
  //   test('Example 1', () {
  //     expect(B12(example), equals(286));
  //   });
  //   test('Solution', () {
  //     expect(B12(contents), equals(52069));
  //   });
  // });
}
