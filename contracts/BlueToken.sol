// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;
import "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
// トークン発行
contract BlueToken is ERC20{
  uint INITIAL_SUPPLY = 1000000000;
  constructor() public ERC20("BlueToken", "BT"){
    _mint(msg.sender, INITIAL_SUPPLY);  
  }
    // トークン転送
    function _transferToken(address _from, address _to, uint256 _amount) internal {
        _approve(_from,_to,_amount);
        _transfer(_from, _to,_amount);
    }
}

