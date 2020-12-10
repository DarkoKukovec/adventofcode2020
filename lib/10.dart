List<int> parseInput(String contents) {
  List<int> adapters = contents.split('\n').map((e) => int.parse(e)).toList();
  adapters.add(0);
  adapters.sort((a, b) => a.compareTo(b));
  adapters.add(adapters.last + 3);

  return adapters;
}

int matchCount(List<int> remaining) {
  int count = 0;
  for (int index = 0; index < remaining.elementAt(0); index++) {
    if (remaining.length - 1 == index) {
      count++;
      break;
    }
    count += matchCount(remaining.sublist(index + 1));
  }
  return count;
}

int A10(String contents) {
  List<int> adapters = parseInput(contents);

  int ones = 0;
  int threes = 0;

  for (int index = 1; index < adapters.length; index++) {
    int diff = adapters.elementAt(index) - adapters.elementAt(index - 1);
    if (diff == 1) {
      ones++;
    } else if (diff == 3) {
      threes++;
    }
  }

  return ones * threes;
}

int B10(String contents) {
  List<int> adapters = parseInput(contents);

  List<int> options = adapters
    .map((item) => adapters.sublist(adapters.indexOf(item) + 1).where((element) => element - item < 4).length).toList()
    .sublist(0, adapters.length - 1);

  int res = 1;
  List<int> slot = [];
  for (int index = 0; index < options.length; index++) {
    slot.add(options.elementAt(index));
    if (options.elementAt(index) == 1) {
      res *= matchCount(slot);
      slot.length = 0;
    }
  }

  return res;
}
