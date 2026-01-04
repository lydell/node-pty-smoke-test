import * as pty from "node-pty";

const ptyProcess = pty.spawn("echo", ["success"]);

ptyProcess.onData((data) => {
  process.stdout.write(data);
});
