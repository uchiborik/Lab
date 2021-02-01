// シミュレーション用スクリプト
// truffle exec app/simulation.js
// --network ganache 

// Noneをnullに変換する

 // コントラクトアドレス
 var contract_address = '0xc8df235f055DA1efC22519594dD2007618E5b1c4';
// ganache アカウントアドレス
// (1-100)個

//10個
var accounts = [
  '0xCc61dA40805e02f0B278b9Ec39F07272041A5CC6',
  '0xAc3ebbB69E4ABbb178903Ce6909446094feA6929',
  '0x414C870E68526826a4E9360991c82d7c3C952723',
  '0x67BdCD4014989ED341B752459Db649b288Ce8192',
  '0x270e3C4019Db2Ee8Bebb90b8cd7781185ae7E224',
  '0x6294b19FBEdc07E45496ac4D5ac400015bE34328',
  '0x965D102128C5A1316768B0559565cdFb78A79E45',
  '0x0D71b3E2a60A76C821FfCb6c6BF4cF86a78f89eA',
  '0x67736818D9B7CbfD6Ef38fc8d5a7d1476d20D072',
  '0xFDfa3b21ADe3bC202B1407f977d8F11fb7da30f6'
]
// 初期位置
var initialPosition =[
  [ 18 , 53 ]
  ,
  [ 83 , 85 ]
  ,
  [ 64 , 51 ]
  ,
  [ 45 , 42 ]
  ,
  [ 94 , 60 ]
  ,
  [ 53 , 88 ]
  ,
  [ 63 , 26 ]
  ,
  [ 86 , 0 ]
  ,
  [ 93 , 45 ]
  ,
  [ 16 , 6 ]
]


var logs = 
[
  [
  {'x': 91, 'y': 90, 'lost': 0, 'communicated': 0, 'ContactUser': null},
  {'x': 28, 'y': 94, 'lost': 0, 'communicated': 0, 'ContactUser': null},
  {'x': 88, 'y': 56, 'lost': 0, 'communicated': 0, 'ContactUser': null},
  {'x': 37, 'y': 4, 'lost': 0, 'communicated': 0, 'ContactUser': null},
  {'x': 24, 'y': 92, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 80, 'y': 60, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 95, 'y': 7, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 1, 'y': 26, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 0, 'y': 43, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 73, 'y': 63, 'lost': 0, 'communicated': 0, 'ContactUser': null}
  ]
  ,
  [
  {'x': 94, 'y': 90, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 30, 'y': 91, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 84, 'y': 53, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 39, 'y': 0, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 23, 'y': 89, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 81, 'y': 60, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 93, 'y': 7, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 0, 'y': 23, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 0, 'y': 44, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 70, 'y': 64, 'lost': 0, 'communicated': 0, 'ContactUser': null}
  ]
  ,
  [
  {'x': 93, 'y': 86, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 30, 'y': 87, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 85, 'y': 50, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 35, 'y': 0, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 26, 'y': 92, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 78, 'y': 62, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 90, 'y': 10, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 0, 'y': 22, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 0, 'y': 43, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 72, 'y': 61, 'lost': 0, 'communicated': 0, 'ContactUser': null}
  ]
  ,
  [
  {'x': 94, 'y': 89, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 28, 'y': 85, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 85, 'y': 50, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 31, 'y': 0, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 28, 'y': 90, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 76, 'y': 65, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 93, 'y': 10, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 0, 'y': 20, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 0, 'y': 39, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 74, 'y': 58, 'lost': 0, 'communicated': 0, 'ContactUser': null}
  ]
  ,
  [
  {'x': 92, 'y': 89, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 27, 'y': 86, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 88, 'y': 48, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 28, 'y': 3, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 31, 'y': 93, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 74, 'y': 63, 'lost': 1, 'communicated': 0, 'ContactUser': null} ,
  {'x': 96, 'y': 6, 'lost': 1, 'communicated': 0, 'ContactUser': null} ,
  {'x': 3, 'y': 16, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 0, 'y': 37, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 76, 'y': 54, 'lost': 0, 'communicated': 0, 'ContactUser': null}
  ]
  ,
  [
  {'x': 92, 'y': 88, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 30, 'y': 88, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 90, 'y': 49, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 30, 'y': 6, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 32, 'y': 94, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 73, 'y': 66, 'lost': 1, 'communicated': 0, 'ContactUser': null} ,
  {'x': 93, 'y': 2, 'lost': 1, 'communicated': 0, 'ContactUser': null} ,
  {'x': 1, 'y': 18, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 0, 'y': 36, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 79, 'y': 52, 'lost': 0, 'communicated': 0, 'ContactUser': null}
  ]
  ,
  [
  {'x': 93, 'y': 85, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 30, 'y': 84, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 88, 'y': 50, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 30, 'y': 9, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 30, 'y': 93, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 73, 'y': 66, 'lost': 1, 'communicated': 1, 'ContactUser': 9} ,
  {'x': 95, 'y': 0, 'lost': 1, 'communicated': 0, 'ContactUser': null} ,
  {'x': 0, 'y': 21, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 0, 'y': 36, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 80, 'y': 53, 'lost': 0, 'communicated': 1, 'ContactUser': 5}
  ]
  ,
  [
  {'x': 94, 'y': 88, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 29, 'y': 87, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 89, 'y': 52, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 26, 'y': 7, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 33, 'y': 96, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 72, 'y': 65, 'lost': 1, 'communicated': 1, 'ContactUser': 9} ,
  {'x': 98, 'y': 0, 'lost': 1, 'communicated': 0, 'ContactUser': null} ,
  {'x': 0, 'y': 20, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 0, 'y': 37, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 77, 'y': 54, 'lost': 0, 'communicated': 1, 'ContactUser': 5}
  ]
  ,
  [
  {'x': 96, 'y': 86, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 25, 'y': 87, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 90, 'y': 55, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 23, 'y': 7, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 33, 'y': 92, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 72, 'y': 67, 'lost': 1, 'communicated': 0, 'ContactUser': null} ,
  {'x': 100, 'y': 0, 'lost': 1, 'communicated': 0, 'ContactUser': null} ,
  {'x': 0, 'y': 19, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 2, 'y': 35, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 73, 'y': 51, 'lost': 0, 'communicated': 0, 'ContactUser': null}
  ]
  ,
  [
  {'x': 94, 'y': 87, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 27, 'y': 86, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 90, 'y': 52, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 23, 'y': 6, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 32, 'y': 89, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 68, 'y': 70, 'lost': 1, 'communicated': 0, 'ContactUser': null} ,
  {'x': 97, 'y': 0, 'lost': 1, 'communicated': 0, 'ContactUser': null} ,
  {'x': 0, 'y': 16, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 0, 'y': 34, 'lost': 0, 'communicated': 0, 'ContactUser': null} ,
  {'x': 76, 'y': 54, 'lost': 0, 'communicated': 0, 'ContactUser': null}
  ]
  ]
  

//100個
//var accounts = ['0x20509da180Bab0330230acb031E666D8cE6F680d','0x8C6D0fB9De42DF6d38FA0Afc29c15c76817D293A','0xD170E20bf5E4dA435759cfa09Ec0877A74009dFE','0xc3C1d5d54224022a07932f6F57a176Cdaa500dE1','0x1e9a5273D8fF855dB5c57b73cCFcD0BF48823ccc','0xe69a5bB0890159cc43544A2DE401cf9712c82001','0xECADc59237C452Af4A5EDDA8C1B09B1eea3Bd496','0xbBb38e09B03Bb85E68C1FD36c2BC64019310195b','0xbD60E3525bED296ca85e85Be5bEBfDE8D313FE43','0x19B639970f5Bb37259D5228E2b38252512a34777','0x13B977Fe2bfd7A82eD91b0CcDAa2CB1DFc9853De','0x7cC19027201E54463dD45284884eb60643F4D84C','0xE188Ba663E77c075276Aa30AbEAae6f5Da6b21f1','0x79C63a51E829663dbc136891D5E55Fc1B4376f64','0xE72297Fdd142c8D0313B3Aa4201B820D614CBA16','0x08abed7acB7868e092FFF078b8Db75D13fFB1174','0x5942e77de0A6F02a30fD7E758Cbb1EeA26E4a989','0x2A58976D63B7B20129690a05F1fe4Ba372a40691','0xe754566653A74B815518AfdCa304be5A71325Fb0','0xaB8ABAe89FC8472F6ABfB69De19B6a0Ec646e741','0x701256946C1ACe3605AEFE60451E9D962cC39661','0xAE8Ff2b610d9e2BDECD0A6933a35Ef50Caa85d49','0xBf04FD95bEe53a3b6A4B0d734b3CEa58B397fAA6','0x02d69e647F563B8F77624DdE470bA59E218d995a','0x102314a42f4f6b516fd3C098Cd8fdF6FCBC497f5','0x8aF8DA811bcd4547FA8fdf04559F45E402AbAF22','0x9eCb4a087F883a4ACe432769d97ff2D02BfaE8Da','0x75ede5Dd2F20c73D6B6692c9E3e0d039c5b52150','0x5A3e5E0a50C0bcb2C68100Da6CaCC231BC2a4b69','0x1b13432a7f3C652f78F1f575cF2f3f066D09e794','0x6495F8d0f1050B2D75A72dD97531e298cf1Fbb46','0xc02206Ff39caa8e61623443F8cC3c45422A4722e','0x44e245EB7792eACa058F92ce0c10912ABe3e31d5','0x86287C613e30E0C6133BCFa04e310dAB22E7354e','0xf957B1Edf49B20507318a65C31f7dB70C1D88983','0xB33fb4668197372c0a408b8338c1A270c23961C0','0xfacDe38eD157920f055aE5D1280BE6eA5A8D797E','0xD24ac6257fE4a1BABF9C6E1324fEDf6cA627c2D3','0x1d244177a01b83c8a6E809f1388B1C1446f92CD5','0x1f27ff61CB3f55068B3feDe580e589DEaa575FDe','0x72Cd8F766f35690B9C23f514B9D7a69A43fc4a32','0xC2a1fa18DAA505c7F6AEBf4b0795Af63C230F2E6','0x814A19C5aFc35Ad6B866AfBba0474F7B8EB8e784','0xdA43cec4c00C3B283f64282100080844a46C1713','0x7b883B532C6E6593302aA12ADd3c9FA959FAD91e','0xf682e85053d2C14a9a4B9e2189dcF472CED615C0','0x51cB48a1D7bcC9DE43aBFe304878B13467B42158','0x97C1b146A3d7df906b8e393c2875Cd3A9Be8C5d7','0xEC664c977fc5Eaa8904bE8feB192518DC0ABD34F','0xD4221f72eFDcf2198fe0196fc3dfB1D1809DA21c','0x9633b999866592b51729a86aAe54ceA319f1512C','0xDE3a5c2c6Cae253E60d7B10D5636F15E6534013A','0xD270fF45143112E48de661058eC1BC472AF79A52','0xf0CD2d112f408d3E71c6119c57c27c41625459C5','0x871Bd8B87786f240a760f55555240CA534E08f09','0x9DC2cAb3A4699b04671b68beF2BBdb6F933C2BE8','0x0299a68ba53867902D69F0a8FD9c100f15404fC2','0x813D166c9A66590AaF11d2fD986cd0FBfE2D3245','0xEeAa6F208Cd5ae346dAf49549f5318C1ef5f7934','0x5413Cf5e05444d0b4b01bA03Fe08eC4711CA2971','0x2BB92fB939e22547AAB46E932494056E7BEc303a','0x8efF94f8Cdb33b9538D1a4Df2Be8F6459cb8419A','0x643Fe9aFF9a1Dce8e679CBAcB2b6976fce6622bC','0xC143C5b6011938D251f87A2136835442360aceB4','0x302F53ce9f4E271B919E0109708e0cd5cd8d714A','0x1dacbd4Ef540BeAfc3A1099b2927BA39C6FabEC7','0x1B1AB969D6d5F3F414d60726F18E5eCa9Ca661e8','0xb5854443c118a0f0264FA1dEe296B0A56d80334f','0x20e8AC12Eb59B604A095b06123dd8F60684aF901','0xfBC48527f16ffb022450d845d1b5e0542F529c7A','0xAfD791B4B1dCb9fe96519F74A3a516364E4436d9','0x3Cc9a54FFB35D01e80C10dD0902ad817f9F69869','0xf08F981EFD6947F43DCDb562004e111DA68f57Be','0x7C506BA64F2E20e821D344d3Bc07369568ce3e46','0x88C2fbaD44AC4Ef92e6660c431a1766A52b56386','0x9b1f56eeCECa5810338082F5b98deA1dF16BA627','0x9A5680a7Bd9A6f6FB256a976Af8cCA08b7b3e864','0x1f134Ffa645F51db74df4017bfa769e0B8d0c07e','0x3B5Fe7bD0da531BFF323A024c57fed4cFA8A4d95','0x24e40C96B3959D6354a224AB2bA2520939667e6B','0x5385EBCfe751Dc2D075B2Af1D0eDd0409f01Aebf','0xDA2DC05Ac0dFA613a022B88283D6D2e68f4F4e90','0x12Ad6d1a1A3Ab541715eFef91E75965d6897361C','0x824CA63D2876BfE88c2bE1f084DB7c3A50087bB7','0xdb0255f2864B54be82b342c1546232E547Bc8690','0x5c19aEB5E3C0379746352A0C6584f0c5b11D4870','0xC11D62122eD990E5432Ec03686E6f70FcdA8EBC3','0x99ed41D7b58d0a5799357E007366Ba34d306Bf34','0x720Fd8dB2837856c0BaA9ef759dBe1616C1199a6','0x69e30e74E3dB006c37D59093aF69194e29c9791E','0xb28afE3B3db4FEe7ED52A39FEBc501466cAa8c10','0xDDA09156110E002CF493171eB592A5FbFc048553','0xE74B5B4152CC0d5BeE22B6b7b2450DAeD68339E8','0xA17EeeD8CdB07fa8C27Cff7bFE2aA148979600Fb','0xeBc3D503B2bfe5BF1635703B058aC6f0D9C0E064','0xC5490718C3Eb0E22713DeE388a77c93038674663','0xf50B840eB543Fab20221cfB2aC72724Cf12eF222','0x8e28b291145265dE132158bD0407d60F4FCb40DC','0xfe3F52a42dB22710a2744A126be991B00359aF6f','0x38120bEfdAF05893E1F2A7EEA5fc01071Db46fA5'];
var USER = accounts.length;
var STEP = logs.length;

 // build/contracts/BluePlatform.jsonから
 // コントラクトを取得
 var contract = artifacts.require("BluePlatform");

  // モジュールをエクスポート
  // callback関数を定義
  module.exports = function(callback) {
    // 非同期処理 async
    //awaitはasync function内の処理待ちを行うため演算子
    var simulation =  async () => {
        // const chainId = await web3.eth.getChainId();
        // console.log('chainId=' + chainId);
        
        // const gasPrice = await web3.eth.getGasPrice();
        // console.log('gasPrice=' + gasPrice);

      // consoles.log(instance);
      // console.log(instance.address);
      const instance = await contract.deployed();
      // let balance0 = await instance.balanceOf(accounts[0]);
      // let balance1 = await instance.balanceOf(accounts[1]);

      // console.log('balance(account[0])=' + balance0);
      // console.log('balance(account[1])=' + balance1);

      // let accounts_list = await web3.eth.getAccounts();
      // console.log(accounts_list);
      console.log(logs[step][user]]['x']);

      // タグの新規登録
      for (i=0; i < initialPosition.length; i++) {
        instance.methods['createTag(uint256,uint256)'](initialPosition[i][0], initialPosition[i][1], { from: accounts[i]});
      }
      //トークンを分配する
      //for (let i=1;i< accounts.length;i++) {
      //  await blue.transfer(accounts[i],20, {from: accounts[0]});
      //}
     
     
      //位置情報の更新
      //タグID, 緯度, 経度, 持ち主ID
      //for (step=0;step<STEP ;step++) {
        //for (user=0;user<USER;user++){
          //if (logs[step][user]['ContactUser'] == null) {
            //instance.methods['changePosition(uint256,uint256,uint256)'](user,12,12, {from : accounts[user]});
         // }

       // }
        
        
        //instance.methods['sendPosition(uint256,uint256,uint256)'](1,12,12, {from : accounts[2]});
      //}



      // let result = await instance.getTagsByOwner.call(accounts[i]);
      // console.log('ユーザ'+ i + "が所有するtagId:" +result.toString());
      // }




      //位置情報の更新
       //タグID, 緯度, 経度, 持ち主ID

      //instance.methods['changePosition(uint256,uint256,uint256)'](0,12,12, {from : accounts[0]});

      //位置情報の提供
      // 管理者から報酬を受ける
      //タグID, 緯度, 経度, 提供者ID
      //instance.methods['sendPosition(uint256,uint256,uint256)'](1,12,12, {from : accounts[2]});
      
      
      //位置情報の取得
      //const position = await instance.getTagsById().call(1,{from: accounts[0]});
      //console.log(position.toString());

      // 位置情報を登録する
      //タグID,持ち主ID
      //instance.methods['registerPosition(uint256)'](1 ,{from : accounts[3]});
        
      

       // 確認用
        // for (let i = 0; i < accounts.length; i++) {
        //   let balance = await blue.balanceOf(accounts[i]);
        //   console.log('balance' + '(' + i +')=' + balance);
        // }

        // await blue.createTag.send(124,34,{from:accounts[0]});
        // console.log(tx);

        // let point = await blue.methods.getTagsById.call(1);
        // console.log(point);
  
    callback();
   };
   simulation();    
};