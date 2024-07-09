// deploy.ts
import hre from "hardhat";
import { http } from "viem";
import { anvil } from "viem/chains";
async function main() {
  const client = await hre.viem.getPublicClient({ chain: anvil, transport: http() });
  const [_, secondWalletClient] = await hre.viem.getWalletClients({ chain: anvil, transport: http() });
  console.log(hre.artifacts);
  const path = await hre.artifacts.getArtifactPaths();
  console.log(path);
  const art = await hre.artifacts.readArtifact("HelloWorld");
  console.log(art);
}
main();
