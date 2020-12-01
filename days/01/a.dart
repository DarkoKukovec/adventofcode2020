import 'dart:io';

void main() {
  new File('input.txt')
    .readAsString()
    .then((String contents) {
      Iterable<int> list = contents.split('\n').map((val) {
        return int.parse(val);
      });

      for (int x = 0; x < list.length - 1; x++) {
        for (int y = x + 1; y < list.length; y++) {
          int a = list.elementAt(x);
          int b = list.elementAt(y);

          if (a + b == 2020) {
            print(a * b);
            return;
          }
        }
      }
    });
}