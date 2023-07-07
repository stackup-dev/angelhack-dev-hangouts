pragma solidity ^0.8.13;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract MyERC20Token is ERC20 {
    address public owner;

    constructor() ERC20("JamesCoin", "JCOIN") {
        owner = msg.sender;
    }

    function mintTokens(uint256 amount) external {
        require(msg.sender == owner, "only the owner can call this function");
        _mint(owner, amount);
    }
}
