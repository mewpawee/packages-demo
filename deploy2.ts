import { createPublicClient, createWalletClient, http, Hex } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { anvil } from 'viem/chains'
// import { abi, bytecode } from 'artifacts/contracts/Lock.sol/Lock.json'

const anvilPrivateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'
const account = privateKeyToAccount(anvilPrivateKey)

const publicClient = createPublicClient({
  chain: anvil,
  transport: http()
})

const walletClient = createWalletClient({
  account,
  chain: anvil,
  transport: http()
})

const deployContract = async () => {
  // const contract = "artifacts/contracts/Lock.sol/Lock.json";
  const { abi, bytecode } = await import('artifacts/contracts/Lock.sol/Lock.json')
  const hash = await walletClient.deployContract({
    abi,
    account,
    args: [account.address],
    bytecode: bytecode as Hex,
  })

  const receipt = await publicClient.waitForTransactionReceipt({
    hash: hash
  })
  const contractAddress = receipt.contractAddress
  console.log("Deployed Contract: ", contractAddress)
}

deployContract()
