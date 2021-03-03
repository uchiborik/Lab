// シミュレーション用スクリプト
// truffle exec app/simulation.js --network ganache 


const contract = artifacts.require("BluePlatform");

//100個
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
    '0x1dF62f291b2E969fB0849d99D9Ce41e2F137006e',
    '0x610Bb1573d1046FCb8A70Bbbd395754cD57C2b60',
    '0x855FA758c77D68a04990E992aA4dcdeF899F654A',
    '0xfA2435Eacf10Ca62ae6787ba2fB044f8733Ee843',
    '0x64E078A8Aa15A41B85890265648e965De686bAE6',
    '0x2F560290FEF1B3Ada194b6aA9c40aa71f8e95598',
    '0xf408f04F9b7691f7174FA2bb73ad6d45fD5d3CBe',
    '0x66FC63C2572bF3ADD0Fe5d44b97c2E614E35e9a3',
    '0xF0D5BC18421fa04D0a2A2ef540ba5A9f04014BE3',
    '0x325A621DeA613BCFb5B1A69a7aCED0ea4AfBD73A',
    '0x3fD652C93dFA333979ad762Cf581Df89BaBa6795',
    '0x73EB6d82CFB20bA669e9c178b718d770C49BB52f',
    '0x9D8E5fAc117b15DaCED7C326Ae009dFE857621f1',
    '0x982a8CbE734cb8c29A6a7E02a3B0e4512148F6F9',
    '0xCDC1E53Bdc74bBf5b5F715D6327Dca5785e228B4',
    '0xf5d1EAF516eF3b0582609622A221656872B82F78',
    '0xf8eA26C3800D074a11bf814dB9a0735886C90197',
    '0x2647116f9304abb9F0B7aC29aBC0D9aD540506C8',
    '0x80a32A0E5cA81b5a236168C21532B32e3cBC95e2',
    '0x47f55A2ACe3b84B0F03717224DBB7D0Df4351658',
    '0xC817898296b27589230B891f144dd71A892b0C18',
    '0x0D38e653eC28bdea5A2296fD5940aaB2D0B8875c',
    '0x1B569e8f1246907518Ff3386D523dcF373e769B6',
    '0xCBB025e7933FADfc7C830AE520Fb2FD6D28c1065',
    '0xdDEEA4839bBeD92BDAD8Ec79AE4f4Bc2Be1A3974',
    '0xBC2cf859f671B78BA42EBB65Deb31Cc7fEc07019',
    '0xF75588126126DdF76bDc8aBA91a08f31d2567Ca5',
    '0x369109C74ea7159E77e180f969f7D48c2bf19b4C',
    '0xA2A628f4eEE25F5b02B0688Ad9c1290e2e9A3D9e',
    '0x693D718cCfadE6F4A1379051D6ab998146F3173F',
    '0x845A0F9441081779110FEE40E6d5d8b90cE676eF',
    '0xC7739909e08A9a0F303A010d46658Bdb4d5a6786',
    '0x99cce66d3A39C2c2b83AfCefF04c5EC56E9B2A58',
    '0x4b930E7b3E491e37EaB48eCC8a667c59e307ef20',
    '0x02233B22860f810E32fB0751f368fE4ef21A1C05',
    '0x89c1D413758F8339Ade263E6e6bC072F1d429f32',
    '0x61bBB5135b43F03C96570616d6d3f607b7103111',
    '0x8C4cE7a10A4e38EE96feD47C628Be1FfA57Ab96e',
    '0x25c1230C7EFC00cFd2fcAA3a44f30948853824bc',
    '0x709F7Ae06Fe93be48FbB90FFDDd69e2746FA8506',
    '0xc0514C03D097fCbB77a74B4DA5b594bA473b6CE1',
    '0x103b31135D99417A22684ED93cbbCD4ccD208046',
    '0xf8856d473639e40f60db8979F5752A9C15903Bb2',
    '0x753897706061FDE347465055FcAc4bd040745624',
    '0x7cd15A5d345558A203655e40B1afb14F936C73f7',
    '0x7d8Ae65273B9D1E6B239b36aF9AdEA0414D189B7',
    '0x05a561F51a2D8A092B11e20C72b5dF15A9D82278',
    '0x80030beCa8292f416E7906535668475c75d9c47E',
    '0xeDA51422804340e3Dc0DD9b6D441125b5C7Cf3FF',
    '0xE21812faA737FF0eEec268f509ACb306BC735feC',
    '0x4d85247717Cf8621D7894F36De35E8B6B6d384BC',
    '0x19b2d46091Dd332F0753dAbf0CF8304cf61eD1c5',
    '0x42c7c045729a84f8e65239308cA8279D6fb21c89',
    '0xEeD15Bb091bf3F615400f6F8160aC423EaF6a413',
    '0x0F6F0ecfAB78f8E54B130E3b3EBd88B3613c97D1',
    '0x33A053885A8232eD78D688B43a405587ba446e5E',
    '0x4397655dDd031043Eb0859AD7A90c3c889E12A4d',
    '0x6E57514B1997029500C13007A59fb6da1CeAc7C4',
    '0x85c38d25744f02619047B76195EcF835554F70Bc',
    '0x69901C8c4263A0368c19D3Cd9dC51B09BeC4C4b1',
    '0x256DD44a34478AceC9A7da479DBcf0C3C599AD55',
    '0x61f41c87113e04B32eB8FbaA4946b1ef98479756',
    '0xA8BA9dEa29234Be7504fAE477d2f6B1fd1078D46',
    '0x831c50Ac59c3794185fABAe289D3a5bA8B09403C',
    '0xc8f2d6111bc7207c25eB4f944cb29F0E851a8541',
    '0xBcA6ebD43DCB10851F398b4CB8FbAdE3133b2c45',
    '0x856C1365488375d21875f80d6045C956E47Ed5eC',
    '0x356780865cD279e4D2dC6d99B32eDA8FD8E8A39c',
    '0x1baEC60a021C5e26a1071776A1549C45C79951d5',
    '0x8155EB275eA6Ebd0d572a44087C948b02d794013',
    '0x6a8bBdB024861739B0DCD1700c8b8F603f1cf7c6',
    '0xB890C74caA6C052Db376837E67F0476589991922',
    '0xd5B6d6b730b1C1be10b82a0A1c89f1Db24f752C3',
    '0x2A828ADcc1a3647DBA43eD05375a4d0B00eEA789',
    '0x624a97293d8cea5ca78D538aC6599e4051a19174',
    '0xE7a3eBbA0647Fb07D0b21927305aA95284316993',
    '0xd74485a6600d8dE95d84d5E1747480c528Df1f9a',
    '0x3B1Cb706E5fff494Da8873aD9C1A30aa802f4522',
    '0xfBDB66Ae3FA6F1B37A02c82751117FC3Aad4572b',
    '0x4F92c13CACF198eB25698709e3d225E6A2E22Dd8',
    '0x18282Ec61C35bef47698C3E65314C9A0ff617b3c',
    '0xAfa5e9d58e245b7F3efECC9e706B06D52Cd28Da1',
    '0xd32115D6e4a4DFdf0807544723D514E3F293D3B6',
    '0x56Fa56dc28081f6353737061e2278631B2659598',
    '0x3Fae75Cce89a972FA1b6d87Bb080fb2c6060F0B3',
    '0xa9F913312b7ec75f755c4f3EdB6e2BBd3526b918',
    '0x1f627b7Fb483E5B8d59aa191FEc94D01753c7d24',
    '0xb45dE3796b206793E8aD3509202Da91D35E9A6d9',
    '0x17332DD7f9BD584E2E83f4cFfdCA0a448B3B903a',
    '0x9d7822d5bB9f7b9b655669550095d2F14AFaC469',
    '0x4C0408DB276Ef793333BAF5B226d8b180c3D0A89'
];


var logs = 
;


const UserNumber = accounts.length;
const MaxStep = logs.length;


module.exports = function(callback){

    const simulation =  async() => {

        //const chainId = await web3.eth.getChainId();
        //console.log('chainId=' + chainId);
        
        let instance = await contract.deployed();
        //console.log(instance);
        //console.log(instance.address);
        
        let count = [];
        for (let user = 0;i< 99;i++){
            count[i] = [];
            for (let j = 0;j<2;j++){
                count[i][j] = 0;
            }
        }

        var getPositionindex = Array(UserNumber); //getPosition用index(UserNumberの配列サイズ)
        //利用者シミュレーション
        for (let step=0;step<MaxStep;step++) {
            getindex.fill(0);
            console.log(step);
            for (let user=0;user<UserNumber;user++){

                if (logs[step][user][''] != null) {
                    // 自分のスマートタグの位置情報を更新する 
                    await instance.updatePosition(user,logs[step][user]['x'],logs[step][user]['y'], {from : accounts[user]});
                    // updataPositionの呼び出し回数
                    count[user][0]++;
                    count_updatePosition++;
                } else if (logs[step][user]['communicated'] == 1) { 
                    // 他利用者と接触し、位置情報を送信する
                    for (i=0;i< logs[step][user]['ContactUser'].length;i++) {
                        await instance.sendPosition(logs[step][user]['ContactUser'][i],logs[step][user]['x'],logs[step][user]['y'],{from: accounts[user]});
                        // sendPositionの呼び出し回数
                        count[user][1]++;
                        count_sendPosition++;
                    } 
                
                    // 紛失している場合は、位置情報の取得を試みる
                    if (logs[step][user]['lost'] == 1) {
                        //console.log(1);
                        getindex[user] = 1;
                    }
                }
            }
            for (let user=0;user<UserNumber;user++){
                if (getindex[user] !=0) {
                    await instance.getPosition(user,{from: accounts[user]});
                    // getPositionの呼び出し回数
                    count_getPosition++;
                    count[user][2]++;


                }
            }
            
        }

        //トークン残高確認
        for (let i = 0;i < accounts.length;i++) {
            let balance = await instance.balanceOf(accounts[i]);
            console.log('accounts' + '[' + i +']=' + balance);
        }


        // アカウントが所有するEther残高表示
        for (let i=0;i<accounts.length;i++) {
            const eth_balance = await web3.eth.getBalance(accounts[i]);
            console.log('accounts' + '[' + i +']=' +　eth_balance);
        }
        //メソッド呼び出し回数を表示
        console.log('updatePosition: ' + count_updatePosition + '回');
        console.log('sendPosition: ' + count_sendPosition + '回');
        console.log('getPosition: ' + count_getPosition + '回');

        console.log(count);

        //位置情報の取得
        //const position = await instance.getTagsById().call(1,{from: accounts[0]});
        //console.log(position.toString());
        callback();
    };
    simulation();    
};