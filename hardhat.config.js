require("@nomicfoundation/hardhat-toolbox");

// Ensure your configuration variables are set before executing the script


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://sepolia.etherscan.io/address/0x61e2a089f79c8803ad476cc764b581930b180ee4`,
      accounts: ["1ed6238eb24576dc17f2f60a8f552638123c0f2fb7ec8f35162772c2f5910a95"],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: "NPXV2XVBESXR4EPDNCIUUWFU1325UPIEU2",
    },
  },
};