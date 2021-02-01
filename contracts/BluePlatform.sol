// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;
import "./BlueToken.sol";

// 紛失物情報管理
contract BluePlatform is BlueToken{
    constructor() public{
    }
 
    event NewTag(uint tagId, uint latitude, uint longitude); // イベントを定義
    
    // 構造体 {タグ情報}
    struct Tag{
        uint latitude;
        uint longitude;
    }
    
    // 構造体 {紛失物情報}
    struct Footprint {
        uint latitude;
        uint longitude;
        address sender;
    } 
      
    Tag[] tags; // 登録されたタグのリスト
    
    mapping (uint => address) public tagToOwner; // タグの所有者
    mapping (address => uint) ownerTagCount; //利用者のタグ所有数
    
    // {タグID=>紛失物情報}
    mapping(uint => Footprint[]) public footprints;
    
    // タグを登録する
    function createTag(uint _latitude, uint _longitude) public {
        tags.push(Tag({latitude: _latitude, longitude: _longitude}));
        uint tagId = tags.length -1;
        tagToOwner[tagId] = msg.sender;
        ownerTagCount[msg.sender]++;
        emit NewTag(tagId, _latitude, _longitude);
    }
    
    // 持ち主が
    // タグの位置情報を更新する
    // ユーザは常に位置情報を送信する
    function updatePosition(uint _tagId,uint _newlatitude, uint _newlongitude) external {
        require(msg.sender == tagToOwner[_tagId]);
        tags[_tagId].latitude = _newlatitude;
        tags[_tagId].longitude = _newlongitude;
     }
    
    // 紛失物の情報を提供する
    function sendPosition(uint _tagId, uint _latitude, uint _longitude) public {
        require(msg.sender != tagToOwner[_tagId]); //タグの持ち主でないことを確認
        footprints[_tagId].push(Footprint({latitude: _latitude, longitude: _longitude, sender: msg.sender}));
        _transferToken(0x9e000457f4141071ea78E8907BF23B8d0Df9a962,msg.sender,1); 
    }
    
     
    // 提供された最新の紛失物情報をタグの情報として登録する
  function registerPosition(uint _tagId) public returns(bool) {
        require(msg.sender == tagToOwner[_tagId]);
        tags[_tagId].latitude = footprints[_tagId][footprints[_tagId].length - 1].latitude; 
        tags[_tagId].longitude = footprints[_tagId][footprints[_tagId].length - 1].longitude; 
        _transferToken(msg.sender,footprints[_tagId][footprints[_tagId].length - 1].sender,10); 
        return true;
  }
    
    // 所有するタグ情報を取得する
    // getter関数(view)はgasを利用しない
    // タグの配列に関数呼出し時でのみデータ保持する{memory変数}を用いることでgasを節約
    function getTagsByOwner(address _owner) external view returns(uint[] memory) {
        uint[] memory result = new uint[](ownerTagCount[_owner]);
        uint counter = 0;
        for (uint i = 0; i < tags.length; i++) {
            if (tagToOwner[i] == _owner) {
                result[counter] = i;
                counter++;
            }
        }
        return result;
    }
        // @dev 実装中
    // // 所有するタグの紛失物情報を取得する
    // function getFootprintsById(uint _tagId,uint _owner) external view returns(Footprint memory) {
    //     Footprint memory result = new footprints[_tagId];
    //     uint counter = 0;
    //     for (uint i = 0; i < footprints[_tagId].length; i++) {
    //             result[counter] = i;
    //             counter++;
    //     }
    //     return result;
    // }
    
    // タグIDにより、登録されているタグの位置情報を取得する
    function getTagsById(uint _tagId) public view returns(uint, uint){ 
         return (tags[_tagId].latitude,tags[_tagId].longitude); 
     }
}