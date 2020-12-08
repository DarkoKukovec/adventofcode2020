class Command {
  String cmd;
  int param;
  int count = 0;
}

class Result {
  int acc = 0;
  bool loop = true;
}

List<Command> parseProgram(String contents) {
  return contents.split('\n').map((line) {
    Command cmd = new Command();
    cmd.cmd = line.split(' ').elementAt(0);
    cmd.param = int.parse(line.split(' ').elementAt(1));
    return cmd;
  }).toList();
}

Result execProgram(List<Command> cmds) {
  cmds.forEach((element) {
    element.count = 0;
  });

  Result res = new Result();
  int pos = 0;
  Command curr = cmds.elementAt(pos);
  while(curr.count < 1) {
    curr.count++;
    if (curr.cmd == 'jmp') {
      pos += curr.param;
    } else {
      if(curr.cmd == 'acc') {
        res.acc += curr.param;
      }
      pos++;
    }
    if (cmds.length > pos) {
      curr = cmds.elementAt(pos);
    } else {
      res.loop = false;
      return res;
    }
  }

  return res;
}

int A08(String contents) {
  List<Command> cmds = parseProgram(contents);

  return execProgram(cmds).acc;
}

int B08(String contents) {
  List<Command> cmds = parseProgram(contents);

  for(int pos = 0; pos < cmds.length; pos++) {
    if (cmds[pos].cmd != 'acc') {
      List<Command> newCmds = cmds.toList();
      Command curr = newCmds.elementAt(pos);
      Command newCurr = new Command();
      newCurr.cmd = curr.cmd == 'jmp' ? 'nop' : 'jmp';
      newCurr.param = curr.param;
      newCmds.replaceRange(pos, pos + 1, [newCurr]);

      Result exec = execProgram(newCmds);
      if (!exec.loop) {
        return exec.acc;
      }
    }
  }
}
