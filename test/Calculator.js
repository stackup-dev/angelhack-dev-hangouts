const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Calculator contract", () => {
  let owner, technician, calculator;

  beforeEach(async () => {
    [owner, technician, _] = await ethers.getSigners();

    const calculatorFactory = await ethers.getContractFactory("Calculator");
    calculator = await calculatorFactory.connect(owner).deploy(72, technician.address);
  });

  describe("Deployment", () => {
    it("Should store the serial number", async () => {
      let serialNumber = await calculator.serialNumber();
      expect(serialNumber).to.equal(72);
    });

    it("Should store the owner and technician address", async () => {
      let ownerAddr = await calculator.owner();
      let technicianAddr = await calculator.technician();

      expect(ownerAddr).to.eq(owner.address);
      expect(technicianAddr).to.eq(technician.address);
    });
  });

  describe("Addition", () => {
    it("Should add correctly", async () => {
      let answer = await calculator.add(3, 2);
      expect(answer).to.eq(5);
    });
  });

  describe("Change serial number", () => {
    it("Should revert if someone who is not the technician tries to access", async () => {
      await expect(calculator.connect(owner).changeSerialNumber(105)).to.be.revertedWith("only the technician can access this function");
    });

    it("Should change serial number", async () => {
      await calculator.connect(technician).changeSerialNumber(105);

      let newSerialNumber = await calculator.serialNumber();
      expect(newSerialNumber).to.eq(105);
    });
  });
});
