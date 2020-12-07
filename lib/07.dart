class Link {
  Bag bag;
  int count;
}

class Bag {
  List<Link> contains = [];
  List<Bag> containedIn = [];
  String name;

  int count() {
    int count = 1;

    this.contains.forEach((element) {
      count += element.count * element.bag.count();
    });

    return count;
  }
}

Bag findBag(List<Bag> list, String name) {
  return list.firstWhere((element) => element.name == name, orElse: () {
    Bag bag = new Bag();
    bag.name = name;
    list.add(bag);
    return bag;
  });
}

List<Bag> parseInput(String contents) {
  List<Bag> keys = [];

  contents.split('\n').forEach((row) {
    String target = row.split(' contain ').elementAt(0);
    String contains = row.split(' contain ').elementAt(1);
    String name = target.replaceFirst(' bags', '');
    List<Link> children = (contains == 'no other bags.'
      ? []
      : contains.split(', ').map((item) => ([
        int.parse(item.split(' ').elementAt(0)),
        item.split(' ').sublist(1, 3).join(' '),
      ])).map((data) {
        Link link = new Link();

        link.count = data.elementAt(0);
        link.bag = findBag(keys, data.elementAt(1));
        link.bag.name = data.elementAt(1);

        return link;
      }).toList()
    );
    Bag key = findBag(keys, name);
    if (!keys.contains(key)) {
      keys.add(key);
    }
    key.contains.addAll(children);
    children.forEach((child) {
      child.bag.containedIn.add(key);
      if (!keys.contains(child.bag)) {
        keys.add(child.bag);
      }
    });
  });

  return keys;
}

int A07(String contents) {
  List<Bag> keys = parseInput(contents);

  Bag gold = findBag(keys, 'shiny gold');
  List<Bag> queued = gold.containedIn;
  List<String> items = [];
  int pointer = 0;

  while(pointer < queued.length) {
    Bag curr = queued.elementAt(pointer);
    items.add(curr.name);
    queued.addAll(curr.containedIn);
    pointer++;
  }

  return items.toSet().length;
}

int B07(String contents) {
  List<Bag> keys = parseInput(contents);

  Bag gold = findBag(keys, 'shiny gold');
  return gold.count() - 1;
}
