int A06(String contents) {
  List<int> groups = contents.split('\n\n').map((group) {
    return group.replaceAll('\n', '').split('').toSet().length;
  }).toList();

  return groups.reduce((value, element) => value + element);
}

int B06(String contents) {
  List<int> groups = contents.split('\n\n').map((group) {
    List<List<String>> people = group.split('\n').map((person) => person.split('')).toList();
    return people.elementAt(0).where((q) => people.every((person) => person.contains(q))).length;
  }).toList();

  return groups.reduce((value, element) => value + element);
}
