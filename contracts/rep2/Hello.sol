// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract HelloWorld {
   string public word;
   constructor(string memory _word) {
      word = _word;
   }
   function updateMsg(string memory newWord) public {
      word = newWord;
   }
}

