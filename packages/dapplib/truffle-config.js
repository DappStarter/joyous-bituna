require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy raise place modify hover another army gate'; 
let testAccounts = [
"0xe6b44ee045cf732449ee88c9f843990902ddf19308a335d091a0dcbf2c76da25",
"0xd5a27bb5c934bc33d5cbe45841732ba3e89d4d31390671833dde8a42421bca7e",
"0x20cef7505e2b53c14b0dafa9e9bad82ce80ecd95aaa2dec4a252396d83eabbe1",
"0xca98d812b7096516a6948cfe6775cde4398ea992d47fa97443de5a163996818e",
"0x8688287480e99ff26499aae10d7abfa46c3c4b622c96a8abf6368b7e41563a19",
"0xa46ef752f9ec7069927279c70a525bcca176afcef4065cf221f855ad866da181",
"0x30a385f1b421ea35a786b8e643c8a24ab2a3c37a91ecdc13d77453cffe436575",
"0x5950c34527dd74fa1228a3b9a329c5bb16c21e2bf1f742e3d24cd48618623bed",
"0x45f1faf0a1bf468ea05177c1cce1900a0b5b4e9f9836ad0412dc2de8bde56f12",
"0xf61481dc47cf1e0654228e19281936e331c3807e3128119ff65969fb007701ed"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
