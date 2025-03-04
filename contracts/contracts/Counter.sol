// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Counter {
    uint256 public count;

    function increment() public {
        require(tx.origin == msg.sender, "PBH Feature: Humans only!");
        count += 1;
    }
}
