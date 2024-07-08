#!/usr/bin/env node
import { exec } from "child_process"
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dir = path.join(__dirname, "..");
// var dir = path.join(import.meta.dirname, '..')

exec(`PROJECT_ROOT=${dir} npx hardhat --config hardhat.config.ts compile`, { cwd: dir }, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
})
