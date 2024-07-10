#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// scripts/hh-cli.ts
var import_util = __toESM(require("util"));
var import_child_process = __toESM(require("child_process"));
var import_path = __toESM(require("path"));
var import_fs = __toESM(require("fs"));
var exec = import_util.default.promisify(import_child_process.default.exec);
var cwd = process.cwd();
var main = async () => {
  const command = process.argv[2];
  console.log("command: ", command);
  switch (command) {
    case "compile":
      await compile(import_path.default.join(__dirname, "..", "./contracts"));
      break;
    case "run":
      await run(`PROJECT_ROOT=${cwd} npx hardhat --config hardhat.config.ts run scripts/deploy.ts --no-compile`);
    default:
  }
};
var compile = async (folderPath) => {
  const configs = import_fs.default.readdirSync(folderPath).map((fileName) => {
    return import_path.default.join(folderPath, fileName, "hardhat.config.ts");
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
