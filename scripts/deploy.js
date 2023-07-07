const { ethers } = require("hardhat");

const technician = "0x0b0605d0D05552C02c9CE6C442e14d781DD65a84";
const serialNumber = 72;

async function main() {
  const calculator = await ethers.deployContract("Calculator", [serialNumber, technician]);
  await calculator.waitForDeployment();

  let calculatorAddr = calculator.target;
  console.log("deployed smart contract address:", calculatorAddr);

  let owner = await calculator.owner();
  console.log("owner's address:", owner);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
