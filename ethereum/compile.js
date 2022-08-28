const path = require('path');
const solc = require('solc'); // solidity compiler
const fs = require('fs-extra'); // This gives us access to the local files on the system
const buildPath = path.resolve(__dirname,'build');
fs.removeSync(buildPath); // delted the folder and everything inside of it 

const campaignPath = path.resolve(__dirname,'contracts','Campaign.sol');
const source = fs.readFileSync(campaignPath,'utf8'); 

const output = solc.compile(source,1).contracts;

fs.ensureDirSync(buildPath); // creats build folder

for(let contract in output){
    fs.outputJSONSync(
        path.resolve(buildPath, contract.replace(':','') + '.json'),
        output[contract]
    );
}