import 'dart:io';
import 'package:advent_of_code_2020/01.dart';

void main() {
  String contents = new File('./data/01.txt').readAsStringSync();

  print(A01(contents));
  print(B01(contents));
}