import 'dart:io';
import 'package:advent_of_code_2020/01.dart';

void main(argv) {
  String day = argv[0];
  String contents = new File('./data/' + day + '.txt').readAsStringSync();

  switch(day) {
    case '01':
      print(A01(contents));
      print(B01(contents));
      break;
  }
}