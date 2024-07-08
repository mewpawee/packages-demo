#!/usr/bin/env node

// cli.ts
import { exec } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var dir = path.join(__dirname, "..");
exec(`PROJECT_ROOT=${dir} npx hardhat --config contracts/rep1/hardhat.config.ts compile`, { cwd: dir }, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
