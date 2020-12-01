import 'dart:io';

void main() {
  new File('input.txt')
    .readAsString()
    .then((String contents) {
      Iterable<int> list = contents.split('\n').map((val) {
        return int.parse(val);
      });

      for (int x = 0; x < list.length - 2; x++) {
        for (int y = x + 1; y < list.length - 1; y++) {
          for (int z = y + 1; z < list.length; z++) {
            int a = list.elementAt(x);
            int b = list.elementAt(y);
            int c = list.elementAt(z);

            if (a + b + c == 2020) {
              print(a * b * c);
              return;
            }
          }
        }
      }
    });
}