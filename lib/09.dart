import 'dart:math';

List<int> parseInput(String contents) {
  return contents.split('\n').map((e) => int.parse(e)).toList();
}

bool checkValid(List<int> window, int target) {
  for (int index = 0; index < window.length; index++) {
    int curr = window.elementAt(index);
    int q = target - curr;
    if (window.sublist(index + 1).contains(q)) {
      return true;
    }
  }
  return false;
}

int findValid(List<int> input, int windowSize) {
  int position = windowSize;
  while(position < input.length) {
    int target = input.elementAt(position);
    List<int> check = input.sublist(position - windowSize, position);

    if (!checkValid(check, target)) {
      return target;
    }

    position++;
  }
}

int A09(String contents, {windowSize:25}) {
  List<int> input = parseInput(contents);
  
  return findValid(input, windowSize);
}

int B09(String contents, {windowSize:25}) {
  List<int> input = parseInput(contents);
  
  int invalid = findValid(input, windowSize);

  int position = 0;
  while (position < input.length) {
    List<int> numbers = [];
    int sum = 0;
    int count = 0;

    while(sum < invalid) {
      numbers.add(input.elementAt(position + count));
      sum += numbers.last;
      count++;
    }

    if (sum == invalid && count > 1) {
      return numbers.reduce(min) + numbers.reduce(max);
    }

    position++;
  }
}
