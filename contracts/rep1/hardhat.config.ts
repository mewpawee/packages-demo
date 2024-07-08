import type { HardhatUserConfig, extendConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import path from "path"

const userRoot = process.env.PROJECT_ROOT || __dirname
console.log(path.join(__dirname, "../artifacts"));

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  paths: {
    // artifacts: `${userRoot}/artifacts`
    // sources: path.join(__dirname, "./src"),
    sources: "./",
    cache: path.join(__dirname, "../../cache/rep1"),
    artifacts: path.join(__dirname, "../../artifacts/rep1")
  },
};

export default config;
