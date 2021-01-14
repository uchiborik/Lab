// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;
// OpenZeppelin トークン発行・管理に用いるライブラリ
import "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
// デモ用トークン
contract BlueToken is ERC20{
  uint INITIAL_SUPPLY = 10000;
  constructor() public ERC20("BlueToken", "BT"){
    _mint(msg.sender, INITIAL_SUPPLY);  // コントラクト発行アカウント(0x20509da180Bab0330230acb031E666D8cE6F680d)
  }
    
    // トークンを送る
    // 宛先,送信元, トークン量を指定する
    function _transferToken(address _from, address _to, uint256 _amount) internal {
        _approve(_from,_to,_amount);
        _transfer(_from, _to,_amount);
    }
}