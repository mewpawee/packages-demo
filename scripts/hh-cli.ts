#!/usr/bin/env node
import util from "util"
import child_process from "child_process"
import path from "path"
const exec = util.promisify(child_process.exec);
const cwd = process.cwd()
import fs from "fs"

const main = async () => {
  const command = process.argv[2]
  console.log("command: ", command)
  switch (command) {
    case 'compile':
      await compile(path.join(__dirname, "..", "./contracts"))
      break
    case 'run':
      await run(`PROJECT_ROOT=${cwd} npx hardhat --config hardhat.config.ts run scripts/deploy.ts --no-compile`)
    default:
  }
}

const compile = async (folderPath: string) => {
  const configs = fs.readdirSync(folderPath)
    .map(fileName => {
      return path.join(folderPath, fileName, "hardhat.config.ts");
    })
  for (const config of configs) {
    await run(`PROJECT_ROOT=${cwd} npx hardhat --config ${config} compile`)
  }
}

const run = async (cmd: string) => {
  const { stdout, stderr } = await exec(cmd)
  if (stdout) console.log(stdout)
  if (stderr) console.log(stderr)
}

main()
