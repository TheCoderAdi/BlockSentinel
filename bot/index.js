require("dotenv").config();
const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const contractAddress = process.env.CONTRACT_ADDRESS;
const abi =
  require("../contracts/artifacts/contracts/Counter.sol/Counter.json").abi;

const contract = new ethers.Contract(contractAddress, abi, wallet);

async function incrementOnce() {
  console.log("🚀 Listening for new blocks...");

  provider.once("block", async (blockNumber) => {
    console.log(`📡 New Block Detected: ${blockNumber}`);

    try {
      const feeData = await provider.getFeeData();
      const maxFeePerGas =
        feeData.maxFeePerGas ?? ethers.parseUnits("20", "gwei");
      const maxPriorityFeePerGas =
        feeData.maxPriorityFeePerGas ?? ethers.parseUnits("2", "gwei");

      console.log(
        `⛽ Gas Fees | Max: ${maxFeePerGas.toString()} | Priority: ${maxPriorityFeePerGas.toString()}`
      );

      const tx = await contract.increment({
        maxFeePerGas: maxFeePerGas * 2n,
        maxPriorityFeePerGas: maxPriorityFeePerGas * 2n,
      });

      console.log(`✅ Transaction Sent: ${tx.hash}`);
      await tx.wait();
      console.log(`✅ Transaction Mined in Block ${blockNumber + 1}`);

      process.exit(0);
    } catch (error) {
      console.error(`❌ Transaction Failed:`, error);
      process.exit(1);
    }
  });
}

incrementOnce();
