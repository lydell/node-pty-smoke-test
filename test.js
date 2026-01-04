import * as pty from "node-pty";

const ptyProcess = process.platform === "win32"
  ? pty.spawn("cmd.exe", ["/d", "/s", "/q", "/c", "node", "example.js"])
  : pty.spawn("node", ["example.js"]);

ptyProcess.onData((data) => {
  process.stdout.write(data);
});
