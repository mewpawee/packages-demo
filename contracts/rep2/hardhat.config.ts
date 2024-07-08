import type { HardhatUserConfig, extendConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import path from "path"

const userRoot = process.env.PROJECT_ROOT || path.join(__dirname, "../../")

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  paths: {
    sources: "./",
    cache: path.join(userRoot, "cache/rep2"),
    artifacts: path.join(userRoot, "artifacts/rep2")
  },
};

export default config;
