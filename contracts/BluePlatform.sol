// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

import "./BlueToken.sol";

contract BluePlatform {
  // 初期値を設定
  // デフォルト値 (例)ユーザーAがデバイスA1を所有する など
  constructor() public {
  }

// 登録されたデバイス情報のリスト(配列)
  Device[] public devices;
  
  // デバイスIDで紛失物情報を検索するため
  // デバイスIDから提供された紛失情報へマッピングする
  mapping(uint256 => Footprint[]) public footprints;

  // 所有数を調べるため
  // 利用者アドレスから所有デバイスのリスト(配列)へマッピングする
  mapping(address => uint[]) public deviceOwner;

  // スマートタグのメイン構造
  struct SmartTag {
    address owner;      // スマートタグ所有者のEthereumアドレス
    uint256 latitude;   // 位置情報
    uint256 longitude;
    bool lostmode;      // 紛失モード
    
  }
  
  // 提供される紛失物情報のデータ構造
  struct Footprint {
    address sender;
    uint deviceId;
    uint256 latitude;
    uint256 longitude;
  } 

  /**
  * @dev msg.senderがデバイス所有者であることを保証する
  * @param _deviceId uint デバイスの所有権を確認するために利用するデバイスID
  */
  modifier isOwner(uint _deviceId) {
    require(devices[_deviceId].owner == msg.sender);
    _;
  }

  /**
  * @dev 作成したコントラクトがトークンの生成者であることを保証する
  * @param _tokenRepostitoryAddress address トークンの保存場所
  * @param _tokenId uint256 登録されたトークン保存場所でのID
  */
  modifier contractIsTokenOwner(address _tokenRepostitoryAddress,uint256 _tokenId) {
    address tokenOwner = TokenRepository(_tokenRepostitoryAddress).ownerOf(_tokenId);
    require(tokenOwner == address(this));
    _;
  }
  
  /** 
  * @dev 所有デバイスの配列を取得する 
  * @param _owner　デバイス所有者のアドレス
  */
  function getDevicesof(address _owner) public view returns(uint[]){
    uint[] memory ownedDevices = deviceOwner[_owner];
    return ownedDevices;
  }

  /**
  * @dev デバイス登録数を取得する
  * @return uint デバイス登録数
  */
  function getCount() public view returns(uint) {
    return devices.length;
  }

  /**
  * @dev デバイスに提供された紛失情報のデータ数を取得する
  * @param _deviceId uint256 デバイスID
  */
  function getFootprintsCount(uint256 _deviceId) public view returns(uint) {
    return footprints[_deviceId].length;
  }

  /**
  * @dev 所有デバイスのリスト(配列)を取得する
  * @param _owner デバイス所有者のアドレス
  */
  function getDevicesOf(address _owner) public view returns(uint[]) {
    uint[] memory ownedDevices = deviceOwner[_owner];
    return ownedDevices;
  }

  /**
  * @dev 非活性(紛失)所有デバイスに提供された最新の情報を取得する
  * @param _deviceId uint256 デバイス所有者のID
  * @return uint256 位置情報(緯度,経度), address 最後に提供したユーザアドレス
  */
  function getCurrentFootprint(uint256 _deviceId) public view returns(uint256,uint256,address) {
    uint footprintsLength = footprints[_deviceId].length;
    // 紛失物の情報提供があったとき
    if( footprintsLength > 0) {
        Footprint memory lastFootprint = footprints[_deviceId][footprintLength - 1];
        return (lastFootprint.latitude,lastFootprint.longitude, lastFootprint.sender);
    }
    return (0,0,0);
  }

  /**
  * @dev アカウントアドレスで所有するデバイス総数を取得する
  * @param _owner デバイス所有者のアドレス
  * @return uint 所有デバイス総数
  */
  function getDevicesCountOfOwner(address _owner) public view returns(uint) {
    return deviceOwner[_owner].length;
  }

  /**
  * @dev デバイスIDを用いてデバイス情報を取得する
  * @param _deviceId uint256 デバイスID
  * @return string デバイス名
  * @return uint256 緯度
  * @return uint256 経度
  * @return uint256 トークンID(デポジット)
  * @return address デポジットされたコントラクトアドレス
  * @return bool デバイスの状態(活性/非活性(紛失))
  * @return address デバイスの所有者アドレス
  */
  function getDeviceById(uint256 _deviceId) public view returns(
    string name,
    uint256 latitude,
    uint256 longitude,
    uint256 tokenId,
    address tokenRepositoryAddress,
    bool active) {
      Device memory dev = devices[_deviceId];
      return (
        dev.name,
        dev.latitude,
        dev.longitude,
        dev.tokenId,
        dev.tokenRepositoryAddress,
        dev.active);
  } 
 
  /**
  * @dev デバイス情報を登録する
  * @param _latitude uint256 緯度(位置情報)
  * @param _longitude uint256 経度(位置情報)
  * @param _owner address 送信者アドレス
  * @param _time uint 送信時間
  */
  function registerDevice(string name,uint256 _latitude, uint256 _longitude) public returns(bool) {
    uint256 deviceId = devices.length;
    Device memory newDevice;
    newDevice.latitude = _latitude;
    newDevice.longitude = _longitude;
    newDevice.active = true;
    newDevice.owneer = msg.sender;

    devices.push(newDevice);
    deviceOwner[msg.sender].push(deviceId);

    emit DeviceRegistered(msg.sender,deviceId);
    return true;
  }

  /**
  * @dev 受信したデバイスの位置情報を送信する
  *
  */
  function sendFootprint(uint256 _deviceId, uint256 _latitude, uint256 _longitude) public returns(bool) {
    uint footprintsLength = footprints[_deviceId].length;
     
        Footprint memory newFootprint = footprints[_deviceId][footprintLength - 1];
        newFootprint.sender = msg.sender;
        newFootprint.deviceId = _deviceId;
        newFootprint.latitude = _latitude;
        newFootprint.longitude = longitude;
        newFootprint.time = block.timestamp;

        footprints.push(newFootprint);
        return true;
  }

  /**
  * @dev 紛失状態に設定する
  * @param 
  */
  function toggleInactuve(uint256 _deviceId) public returns(bool) {

  }


    /**
  * @dev 位置情報を要求する
  *
  */
//  function toggleActive




  
  
  
  /**
  * @dev トークンを送金する
  * @param _from トークンの送信者アドレス
  * @param _to トークンの受信者アドレス
  * @param _tokenRepositoryAddress 作成されたトークンの保存先
  */
 // function approveTransfer(address _from, amount);

}
