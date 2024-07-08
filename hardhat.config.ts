import type { HardhatUserConfig, extendConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const userRoot = process.env.PROJECT_ROOT || __dirname

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  paths: {
    artifacts: `${userRoot}/artifacts`
  },
};

export default config;
