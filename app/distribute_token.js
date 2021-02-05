// トークン配布用スクリプト
// truffle exec app/distribute_token.js --network ganache 

const contract = artifacts.require("BluePlatform");


//アカウント10個
const accounts = [
    '0xFBf6010CDd8464bF6D0520Ba32efB172fb577082',
    '0x01613dC65510C9167EEfeCc1306d916Dc3C40574',
    '0x829A4b012e80ee62cbf603f1c41917a1B067908f',
    '0x4782C78C86024F5830C680fb67aaba14015e1190',
    '0x4A758c88f7662e2806c65484093e2917c4D586C5',
    '0xD2134c24E037d775f63639F51057D8A30836aa44',
    '0xfC8a933FB4B21D23E5A2a3A7b25cb67C240F50D0',
    '0x52ff7d1077A59F8745A82E409eda51756ada245b',
    '0xD698ece00C819acB62e47A67d6219725D55Ad55d',
    '0xC52e3f02c82C6d82DE0A7b59e34c516F28Fdd0D3'
  ];

// 初期位置
var initialPosition = 
[
    [ 6 , 82 ]
    ,
    [ 18 , 63 ]
    ,
    [ 85 , 53 ]
    ,
    [ 81 , 85 ]
    ,
    [ 10 , 57 ]
    ,
    [ 60 , 87 ]
    ,
    [ 54 , 6 ]
    ,
    [ 10 , 12 ]
    ,
    [ 74 , 21 ]
    ,
    [ 68 , 44 ]
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