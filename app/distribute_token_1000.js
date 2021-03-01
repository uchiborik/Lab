// トークン配布用スクリプト
// truffle exec app/distribute_token.js --network ganache 

let contract = artifacts.require("BluePlatform");


//アカウント10個
const accounts = [
    '0xe96fAf293AEb578Aa374038dE341D238B4c5fE36',
    '0xDfF0B83EC29dCaBDAD84CDB1C9F4D22163a583F7',
    '0x92E2F7F86FA905A55d31A7764Cf9D505Fc47d549',
    '0xBa4983c1AE57a5ecFD010088D7BD6C4D4296cA98',
    '0xDd0719bb9316FB21c26B45441199F38fD52896dF',
    '0x77F886735d16C98d93DA5554575bbf508B94F40C',
    '0x7e6a5eE4117e248CeD276Cc024aF3553Ac8C82eA',
    '0x4B9ba69979d86066D87774ECaD183fFad367F21A',
    '0x0a20368554eF207CeCB0Ffd2EE9FA933DC360300',
    '0x989e3132E0B2D5c3909B4982ADC783cDe2C3b2B3'
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