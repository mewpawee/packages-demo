// deploy.ts
import hre from "hardhat";
import { http } from "viem";
import { anvil } from "viem/chains";
async function main() {
  const client = await hre.viem.getPublicClient({ chain: anvil, transport: http() });
  const [_, secondWalletClient] = await hre.viem.getWalletClients({ chain: anvil, transport: http() });
  const contractA = await hre.viem.deployContract(
    "Lock.sol:Lock",
    [1819826971],
    {
      client: { wallet: secondWalletClient },
      // gas: 1000000,
      // value: parseEther("0.0001"),
      confirmations: 1
      // 1 by default
    }
  );
  console.log(contractA);
}
main();
