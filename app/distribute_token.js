// トークン配布用スクリプト
// truffle exec app/distribute_token.js --network ganache 

const contract = artifacts.require("BluePlatform");


//アカウント10個
const accounts = [
    '0x9087D0EB87596432029481b1A6a89f0f9a3775cA',
    '0x80EbAe671F4011B24Ca58fcb8A5c156b7c2CEbe9',
    '0x7bf2e21252ef902D85029A03dc9A218fe0280Fa7',
    '0x7e83fc0FaE36632B998ad00c8C1D48e63C79c61A',
    '0x884AdfEdd35E476FFbC01782937B100f90b74379',
    '0x9a1e7c949f7b75B330198D6cdB7a03Cdb39803d1',
    '0x4C17DcF0e138E139a19262dC381522b51D6dF93E',
    '0x9a9a4ca087256A2F9e134eCD022a4787da0384b4',
    '0x6A7C3d8d2206734f30145361CFaa87f1F703af11',
    '0x0f89e337061d16EE3f32b39c5C0591171a57B722'
  ];

// 初期位置
var initialPosition = [
    [ 76 , 39 ]
    ,
    [ 28 , 14 ]
    ,
    [ 72 , 82 ]
    ,
    [ 22 , 61 ]
    ,
    [ 96 , 64 ]
    ,
    [ 82 , 85 ]
    ,
    [ 84 , 4 ]
    ,
    [ 61 , 79 ]
    ,
    [ 40 , 88 ]
    ,
    [ 3 , 96 ]
    ];

const UserNumber = accounts.length;


// モジュールをエクスポート
// callback関数を定義
module.exports = function(callback){
    //awaitはasync function内の処理待ちを行うため演算子

    const simulation =  async() => {

        //const chainId = await web3.eth.getChainId();
        //console.log('chainId=' + chainId);
        
        let instance = await contract.deployed();

        // 初期設定  
        //タグの新規登録
        for (let i=0; i < initialPosition.length; i++) {
            await instance.createTag(initialPosition[i][0], initialPosition[i][1], { from: accounts[i]});
        }


        // 確認用
        for (let i = 0;i < accounts.length;i++) {
            balance = await instance.balanceOf(accounts[i]);
            console.log('accounts' + '[' + i +']=' + balance);
        }

        //console.log(instance);
        //console.log(instance.address);

        callback();
    };
    simulation();    
}