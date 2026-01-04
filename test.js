import * as pty from "node-pty";

const ptyProcess = pty.spawn("node", ["example.js"]);

ptyProcess.onData((data) => {
  process.stdout.write(data);
});
