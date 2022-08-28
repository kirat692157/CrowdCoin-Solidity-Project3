/*  This is the truffle hd wallet this is the provider we use with the web3 and unlike the testing phase,
    where we simply used the gancahe providor and get some wallets with it, in this one, we need to give 
    it our real wallet information  */
const HDWalletProvider = require('@truffle/hdwallet-provider');
// requiring in web3
const Web3 = require('web3');

const compiledFactory = require('./build/CampaignFactory.json');

// This is where we initialize our provider, we give in our mnemonic phrase, 
// and the address of the rinkeby newtwork where we want to deploy the contract 
const provider = new HDWalletProvider(
    'memonic phrase',
    'https://rinkeby.infura.io/v3/14a04969369e4854b73df1f81f6e88f9'
);
const web3 = new Web3(provider); // web3 instance with our provider

// We will make a function so that we can have a async function, which we will later call
const deploy = async () => {
    let account = await web3.eth.getAccounts();
    console.log('Account hash', account[0]);
    let contract = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode, arguments: ['Hello World!'] })
        .send({ from: account[0], gas: 1000000 });
    console.log('deployed to', contract.options.address);
    // to prevent a hanging deployment
    provider.engine.stop();
};
deploy();
