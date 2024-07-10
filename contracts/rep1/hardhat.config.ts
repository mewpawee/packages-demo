import path from "path"
import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

import { baseHardhatUserConfig } from "../../hardhat-base.config"

const userRoot = process.env.PROJECT_ROOT || process.cwd()

const remappings: string[] = []

const config: HardhatUserConfig = {
  ...baseHardhatUserConfig(remappings),
  solidity: "0.8.24",
  paths: {
    sources: "./contracts/rep1",
    root: userRoot,
    cache: path.join(userRoot, "cache"),
    artifacts: path.join(userRoot, "artifacts")
  },
};

export default config;
