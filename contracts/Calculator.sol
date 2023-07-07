// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Calculator {
    uint256 public serialNumber;
    address public owner;
    address public technician;

    constructor(uint256 _serialNumber, address _technician) {
        serialNumber = _serialNumber;
        owner = msg.sender;
        technician = _technician;
    }

    function add(uint256 a, uint256 b) public pure returns (uint256) {
        return (a + b);
    }

    function changeSerialNumber(uint256 newSerialNumber) external {
        require(
            msg.sender == technician,
            "only the technician can access this function"
        );
        serialNumber = newSerialNumber;
    }
}
