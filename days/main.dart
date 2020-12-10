import 'dart:io';
import 'package:advent_of_code_2020/01.dart';
import 'package:advent_of_code_2020/02.dart';
import 'package:advent_of_code_2020/03.dart';
import 'package:advent_of_code_2020/04.dart';
import 'package:advent_of_code_2020/05.dart';
import 'package:advent_of_code_2020/06.dart';
import 'package:advent_of_code_2020/07.dart';
import 'package:advent_of_code_2020/08.dart';
import 'package:advent_of_code_2020/09.dart';
import 'package:advent_of_code_2020/10.dart';

void main(argv) {
  String day = argv[0];
  String contents = new File('./data/' + day + '.txt').readAsStringSync();

  switch(day) {
    case '01':
      print(A01(contents));
      print(B01(contents));
      break;
    case '02':
      print(A02(contents));
      print(B02(contents));
      break;
    case '03':
      print(A03(contents));
      print(B03(contents));
      break;
    case '04':
      print(A04(contents));
      print(B04(contents));
      break;
    case '05':
      print(A05(contents));
      print(B05(contents));
      break;
    case '06':
      print(A06(contents));
      print(B06(contents));
      break;
    case '07':
      print(A07(contents));
      print(B07(contents));
      break;
    case '08':
      print(A08(contents));
      print(B08(contents));
      break;
    case '09':
      print(A09(contents));
      print(B09(contents));
      break;
    case '10':
      print(A10(contents));
      print(B10(contents));
      break;
  }
}