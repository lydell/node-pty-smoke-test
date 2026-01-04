import fs from "node:fs";

if (process.platform === "linux" && process.arch === "arm64") {
  fs.chmodSync("node_modules/node-pty/prebuilds/linux-arm64/pty.node", 0o755);
  console.log("chmod +x pty.node!");
}
