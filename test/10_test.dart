import 'dart:io';
import 'package:test/test.dart';
import 'package:advent_of_code_2020/10.dart';

void main() {
  String contents = new File('./data/10.txt').readAsStringSync();

  String example1 = '16\n10\n15\n5\n1\n11\n7\n19\n6\n12\n4';
  String example2 =
	'28\n33\n18\n42\n31\n14\n46\n20\n48\n47\n24\n23\n49\n45\n19\n38\n39\n11\n1\n32\n25\n35\n8\n17\n7\n9\n4\n2\n34\n10\n3';
  
  group('A', () {
    test('Example 1', () {
      expect(A10(example1), equals(35));
    });
    test('Example 2', () {
      expect(A10(example2), equals(220));
    });
    test('Solution', () {
      expect(A10(contents), equals(2048));
    });
  });

  group('B', () {
    test('Example 1', () {
      expect(B10(example1), equals(8));
    });
    test('Example 2', () {
      expect(B10(example2), equals(19208));
    });
    test('Solution', () {
      expect(B10(contents), equals(1322306994176));
    });
  });
}
