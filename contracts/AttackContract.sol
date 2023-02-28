// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract AttackContract {
    uint256 public anyVar;
    uint256 public anotherVar;
    address public immutable owner;

    constructor() {
        owner = msg.sender;
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    function getSelector() public pure returns (bytes4) {
        bytes4 selector = bytes4(keccak256(bytes("doSomething()")));
        return selector;
    }

    function doSomething() public returns (bool) {
        anyVar = 123;
        anotherVar = 2;
        return true;
    }
}
