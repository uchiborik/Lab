// トークン配布用スクリプト
// truffle exec app/distribute_token.js --network ganache 

let contract = artifacts.require("BluePlatform");


//アカウント10個
const accounts = [
    '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
    '0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0',
    '0x22d491Bde2303f2f43325b2108D26f1eAbA1e32b',
    '0xE11BA2b4D45Eaed5996Cd0823791E0C93114882d',
    '0xd03ea8624C8C5987235048901fB614fDcA89b117',
    '0x95cED938F7991cd0dFcb48F0a06a40FA1aF46EBC',
    '0x3E5e9111Ae8eB78Fe1CC3bb8915d5D461F3Ef9A9',
    '0x28a8746e75304c0780E011BEd21C72cD78cd535E',
    '0xACa94ef8bD5ffEE41947b4585a84BdA5a3d3DA6E',
    '0x1dF62f291b2E969fB0849d99D9Ce41e2F137006e'
  ];

// 初期位置
var initialPosition = [
        [ 18 , 98 ]
        ,
        [ 48 , 49 ]
        ,
        [ 88 , 5 ]
        ,
        [ 71 , 25 ]
        ,
        [ 94 , 17 ]
        ,
        [ 59 , 58 ]
        ,
        [ 45 , 69 ]
        ,
        [ 59 , 84 ]
        ,
        [ 97 , 43 ]
        ,
        [ 54 , 89 ]
        ]
        


// モジュールをエクスポート
// callback関数を定義
module.exports = function(callback){

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
};