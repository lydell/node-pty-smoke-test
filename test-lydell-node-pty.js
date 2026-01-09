import * as pty from "@lydell/node-pty";

const ptyProcess = process.platform === "win32"
  ? pty.spawn("cmd.exe", ["/d", "/s", "/q", "/c", "node", "example.js"])
  : pty.spawn("node", ["example.js"]);

ptyProcess.onData((data) => {
  process.stdout.write(data);
});

ptyProcess.onExit(({ exitCode: actualExitCode, signal }) => {
  const exitCode =
    signal === undefined || signal === 0 ? actualExitCode : 128 + signal;
  process.exit(exitCode);
})
