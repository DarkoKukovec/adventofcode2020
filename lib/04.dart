class PassportItem {
  int byr = 0;
  int iyr = 0;
  int eyr = 0;
  String hgt = '';
  String hcl = '';
  String ecl = '';
  String pid = '';
}

Iterable<PassportItem> parseData(String contents) {
  return contents
    .split('\n\n')
    .map((e) {
      PassportItem item = new PassportItem();
      e
        .replaceAll(new RegExp(r'\n'), ' ')
        .split(' ')
        .forEach((e) {
          String name = e.split(':').elementAt(0);
          String value = e.split(':').elementAt(1);
          
          if (name == 'byr') {
            item.byr = int.parse(value);
          } else if (name == 'iyr') {
            item.iyr = int.parse(value);
          } else if (name == 'eyr') {
            item.eyr = int.parse(value);
          } else if (name == 'hgt') {
            item.hgt = value;
          } else if (name == 'hcl') {
            item.hcl = value;
          } else if (name == 'ecl') {
            item.ecl = value;
          } else if (name == 'pid') {
            item.pid = value;
          }
        });
      return item;
    });
}

int A04(String contents) {
  Iterable<PassportItem> data = parseData(contents);

  return data.where((element) {
    return element.byr > 0 && element.iyr > 0 && element.eyr > 0 &&
      element.hgt != '' && element.hcl != '' && element.ecl != '' && element.pid != '';
  }).length;
}

int B04(String contents) {
  Iterable<PassportItem> data = parseData(contents);

  return data.where((element) {
    if (element.byr < 1920 || element.byr > 2002) {
      return false;
    }

    if (element.iyr < 2010 || element.iyr > 2020) {
      return false;
    }

    if (element.eyr < 2020 || element.eyr > 2030) {
      return false;
    }

    int hgtLen = element.hgt.length;
    if (hgtLen < 3) {
      return false;
    }
    int hgt = int.parse(element.hgt.substring(0, hgtLen - 2));
    String measure = element.hgt.substring(hgtLen - 2);
    if (measure == 'cm' && (hgt < 150 || hgt > 193)) {
      return false;
    }
    if (measure == 'in' && (hgt < 59 || hgt > 76)) {
      return false;
    }

    if (!RegExp(r'^\#[0-9a-f]{6}$').hasMatch(element.hcl)) {
      return false;
    }

    if (!['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].contains(element.ecl)) {
      return false;
    }

    if (!RegExp(r'^[0-9]{9}$').hasMatch(element.pid)) {
      return false;
    }

    return true;
  }).length;
}
