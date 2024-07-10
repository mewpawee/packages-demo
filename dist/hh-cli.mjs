#!/usr/bin/env node

// scripts/hh-cli.ts
import util from "util";
import child_process from "child_process";
import path from "path";
import fs from "fs";
var exec = util.promisify(child_process.exec);
var cwd = process.cwd();
var main = async () => {
  const command = process.argv[2];
  console.log("command: ", command);
  switch (command) {
    case "compile":
      await compile(path.join(cwd, "./contracts"));
      break;
    case "run":
      await run(`PROJECT_ROOT=${cwd} npx hardhat --config hardhat.config.ts run scripts/deploy.ts --no-compile`);
    default:
  }
};
var compile = async (folderPath) => {
  const configs = fs.readdirSync(folderPath).map((fileName) => {
    return path.join(folderPath, fileName, "hardhat.config.ts");
  });
  for (const config of configs) {
    await run(`PROJECT_ROOT=${cwd} npx hardhat --config ${config} compile`);
  }
};
var run = async (cmd) => {
  const { stdout, stderr } = await exec(cmd);
  if (stdout) console.log(stdout);
  if (stderr) console.log(stderr);
};
main();
