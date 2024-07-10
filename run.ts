import hre from "hardhat";

import config from "./contracts/rep1/hardhat.config"

async function main() {
  const artifacts = await hre.artifacts
  // console.log("Path", path)
  // const config = hre.config
  // console.log(config)
  // hre.run()
  // hre.config.paths.configFile = "/Users/paweetantivasdakarn/Coding/demo/packages-demo/contracts/rep1/hardhat.config.ts"
  // hre.config = config
  // hre.userConfig = config
  // console.log(hre.userConfig)
  hre.userConfig.solidity = config.solidity
  hre.userConfig.paths = config.paths
  const run = hre.run("compile")
  // console.log(hre.config)
  // await this.hre.run("compile", { quiet: true });
}

main()
