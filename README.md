# BlockSentinel - Automated Blockchain Monitoring & Transaction Execution Bot

## 🚀 Overview
**BlockSentinel** is a real-time bot that listens for new blocks, automatically executes transactions, and dynamically optimizes gas fees for efficiency. It is designed for seamless blockchain automation, making it ideal for DeFi, NFT drops, smart contract execution, and MEV strategies.

## 📌 Features
- **Real-time Block Monitoring**: Listens for new blocks as soon as they are added to the blockchain.
- **Automatic Transaction Execution**: Sends transactions the moment a new block is detected.
- **Gas Fee Optimization**: Uses EIP-1559 gas estimation to set optimal fees dynamically.
- **Efficient Execution**: Ensures transactions are confirmed in the next block.
- **Robust Error Handling**: Catches failures and logs transaction statuses for debugging.

## 🛠 Technologies Used
- **Node.js**
- **Ethers.js**
- **Solidity** (for the smart contract interaction)
- **Hardhat** (for contract development and testing)

## 📜 Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/TheCoderAdi/BlockSentinel/
cd BlockSentinel
```

### 2️⃣ Install Dependencies
```sh
cd bot && npm install
cd contracts && npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file and add the following (bot folder):
```
RPC_URL=your_rpc_url
PRIVATE_KEY=your_wallet_private_key
CONTRACT_ADDRESS=your_smart_contract_address
```

### 4️⃣ Run the Bot
```sh
node index.js
```

## ⚡ How It Works
1. The bot **listens for new blocks** on the blockchain.
2. When a new block is detected, it **retrieves current gas fees**.
3. It then **executes a transaction** using optimized gas settings.
4. Logs transaction status:
   ```sh
   🚀 Listening for new blocks...
   📡 New Block Detected: 12345
   ✅ Transaction Sent: 0xabc123...
   ✅ Transaction Mined in Block 12346
   ```

## 📊 Use Cases
- **Automated NFT minting**: Execute mints exactly when a new block is created.
- **DeFi Trading Bots**: Execute trades instantly when liquidity conditions are met.
- **Governance Voting**: Automate DAO governance votes on-chain.
- **Security Testing**: Run smart contract security tests automatically.

## 🎯 Future Improvements
- Support for multiple transactions per block.
- Enhanced monitoring with Telegram/Discord alerts.
- Integration with smart contract automation frameworks.

## 📄 License
MIT License
