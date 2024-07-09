import type { HardhatUserConfig, extendConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
//TODO resolve caller path
import path from "path"

// const userRoot = process.env.PROJECT_ROOT || path.join(__dirname, "../../")

// console.log(userRoot)
const config: HardhatUserConfig = {
  // paths: {
  // sources: "./contracts/rep1",
  // root: userRoot,
  // cache: path.join(userRoot, "cache"),
  // artifacts: path.join(userRoot, "artifacts")
  // },
};

export default config;
