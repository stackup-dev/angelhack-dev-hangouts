require("@nomicfoundation/hardhat-toolbox");

const SEPOLIA_URL = "https://rpc.sepolia.org";
const PRIVATE_KEY = "replace-with-metamask-private-key";

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {},
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
