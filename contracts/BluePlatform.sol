// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;
import "./BlueToken.sol";

// 紛失物情報管理
contract BluePlatform is BlueToken{
     constructor() public{
    }
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
    Tag[] tags; // タグのリスト
    
    mapping (uint => address) public tagToOwner; // タグの所有者
    mapping (address => uint) ownerTagCount; //利用者のタグ所有数
    mapping (uint => Footprint[]) public footprints; // {タグID=>紛失物情報}
    
    // タグを登録する
    function createTag(uint _latitude, uint _longitude) public {
        tags.push(Tag({latitude: _latitude, longitude: _longitude}));
        uint tagId = tags.length -1;
        tagToOwner[tagId] = msg.sender;
        ownerTagCount[msg.sender]++;
        _transferToken(0xe5aea864FCc5E3D8859806eA16a7968AA83891e2,msg.sender,100); 
    }
    
    // 持ち主がタグの位置情報を更新する
    function updatePosition(uint _tagId,uint _newlatitude, uint _newlongitude) public {
        require(msg.sender == tagToOwner[_tagId]);
        tags[_tagId].latitude = _newlatitude;
        tags[_tagId].longitude = _newlongitude;
     }
    
    // 紛失物の情報を提供する
    function sendPosition(uint _tagId, uint _latitude, uint _longitude) public {
        require(msg.sender != tagToOwner[_tagId]); //タグの持ち主でないことを確認
        footprints[_tagId].push(Footprint({latitude: _latitude, longitude: _longitude, sender: msg.sender}));
        _transferToken(0xe5aea864FCc5E3D8859806eA16a7968AA83891e2,msg.sender,5); 
    }
    
     
    // 最新の紛失物情報を取得する
  function getPosition(uint _tagId) public returns(bool) {
        require(msg.sender == tagToOwner[_tagId]);
        tags[_tagId].latitude = footprints[_tagId][footprints[_tagId].length - 1].latitude; 
        tags[_tagId].longitude = footprints[_tagId][footprints[_tagId].length - 1].longitude; 
        _transferToken(msg.sender,footprints[_tagId][footprints[_tagId].length - 1].sender,10); 
        return true;
  }
    
    // 所有するタグ情報を取得する
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
    // 登録されているタグの位置情報を取得する
    function getTagsById(uint _tagId) public view returns(uint, uint){ 
         return (tags[_tagId].latitude,tags[_tagId].longitude); 
     }
}