import type { HardhatUserConfig, extendConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import path from "path"

const userRoot = process.env.PROJECT_ROOT || path.join(__dirname, "../../")

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  paths: {
    sources: "./contracts/rep2",
    root: userRoot,
    cache: path.join(userRoot, "cache"),
    artifacts: path.join(userRoot, "artifacts")
  },
};

export default config;
