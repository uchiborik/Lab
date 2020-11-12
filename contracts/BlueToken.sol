// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

import "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BlueToken is ERC20 {
  uint public INITIAL_SUPPLY = 12000;

  constructor() public ERC20("BlueToken", "BT"){
    _mint(msg.sender, INITIAL_SUPPLY);
  }


}
