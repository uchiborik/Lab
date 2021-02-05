// gas予測値測定用スクリプト
// truffle exec app/estimate_gas.js --network ganache 


const contract = artifacts.require("BluePlatform");

//トランザクションを送信するアカウント
const accounts = ['0x0B2BdB85F329EF9bA6Bed1680389af279BA9aC74','0xf62272f46E7f2215144e77087F82AF8Ab44271bA'];


module.exports = function(callback){

    const simulation =  async() => {

        //const chainId = await web3.eth.getChainId();
        //console.log('chainId=' + chainId);
        
        let instance = await contract.deployed();

      
        // // createTagのガスを測定
        // const gasAmount_createTag = await instance.createTag.estimateGas(10,10, {from : accounts[0]});
        // console.log('createTag_gas: ' + gasAmount_createTag);


        //  // 初期を設定
        // await instance.createTag(10,10, {from : accounts[0]});
        // await instance.updatePosition(0,10,10, {from : accounts[0]});
        // await instance.sendPosition(0,20,20, {from : accounts[1]});

  
        // // updatePositionのガスを測定
        // const gasAmount_updatePosition = await instance.updatePosition.estimateGas(0,11,11, {from : accounts[0]});
        // console.log('updatePosition_gas: ' + gasAmount_updatePosition);

        // // sendPositionのガスを測定
        // const gasAmount_sendPosition = await instance.sendPosition.estimateGas(0,20,20, {from : accounts[1]});
        // console.log('sendPosition_gas: ' + gasAmount_sendPosition);

        // // getPositionのガスを測定
        // const gasAmount_getPosition = await instance.getPosition.estimateGas(0, {from : accounts[0]});
        // console.log('getPosition_gas: ' + gasAmount_getPosition);
        
        // // gas料金を表示
        // const gasPrice = await web3.eth.getGasPrice();
        // console.log('gasPrice=' + gasPrice);




        callback();
    };
    simulation();    
}