class Seat {
  int x;
  int y;
  int seatId;
}

List<Seat> getSeatInfo(String contents) {
	return contents.split('\n').map((ticket) {
    String code = ticket.replaceAll(RegExp(r'F|L'), '0').replaceAll(RegExp(r'B|R'), '1');
    Seat seat = new Seat();
    seat.x = int.parse(code.substring(0, 7), radix: 2);
    seat.y = int.parse(code.substring(7), radix: 2);
    seat.seatId = seat.x * 8 + seat.y;
    return seat;
	}).toList();
}

int A05(String contents) {
  List<Seat> tickets = getSeatInfo(contents);
  List<int> ids = tickets.map((e) => e.seatId).toList();
  ids.sort((a, b) => a.compareTo(b));

  return ids.last;
}

int B05(String contents) {
  List<Seat> tickets = getSeatInfo(contents);
  List<int> ids = tickets.map((e) => e.seatId).toList();
  ids.sort((a, b) => a.compareTo(b));

  for (int i = 1; i < ids.length; i++) {
    if (ids.elementAt(i) - ids.elementAt(i - 1) == 2) {
      return ids.elementAt(i) - 1;
    }
  }
}
