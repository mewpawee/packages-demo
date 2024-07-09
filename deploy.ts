import hre from "hardhat";
import { http } from "viem";
import { anvil } from "viem/chains"
import { Lock$Type } from "./artifacts/rep1/Lock.sol/Lock";

async function main() {
  const client = await hre.viem.getPublicClient({ chain: anvil, transport: http() })
  const [_, secondWalletClient] = await hre.viem.getWalletClients({ chain: anvil, transport: http() });

  // console.log()
  console.log(hre.artifacts)
  const path = await hre.artifacts.getArtifactPaths()
  console.log(path)
  const art = await hre.artifacts.readArtifact("HelloWorld")
  // const art = await hre.artifacts.readArtifact("contracts/rep1/Lock2.sol:Lock")
  console.log(art)
  // const art = await hre.artifacts.readArtifact("rep1/Lock2.sol:Lock")
  // console.log(art)
  // const lock = await hre.artifacts.readArtifact("Lock2.sol:Lock");
  // console.log(lock)
  // const contractA = await hre.viem.deployContract(
  //   "",
  //   [1819826971],
  //   {
  //     client: { wallet: secondWalletClient },
  //     // gas: 1000000,
  //     // value: parseEther("0.0001"),
  //     confirmations: 1, // 1 by default
  //   }
  // );


}

main()
