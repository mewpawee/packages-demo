#!/usr/bin/env node
import util from "util"
import child_process from "child_process"
const exec = util.promisify(child_process.exec);
const cwd = process.cwd()

const main = async () => {
  const target = process.argv[2]
  console.log("target", target)
  switch (target) {
    case 'compile':
      console.log("compiling rep1...")
      await run(`PROJECT_ROOT=${cwd} npx hardhat --config contracts/rep1/hardhat.config.ts compile`)
      console.log("compiling rep2...")
      await run(`PROJECT_ROOT=${cwd} npx hardhat --config contracts/rep2/hardhat.config.ts compile`)
      break
    case 'run':
      await run(`PROJECT_ROOT=${cwd} npx hardhat --config hardhat.config.ts run deploy.ts --no-compile`)
    default:
  }
}


const run = async (cmd: string) => {
  const { stdout, stderr } = await exec(cmd)
  if (stdout) console.log(stdout)
  if (stderr) console.log(stderr)
}

main()
