require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remind concert grace basket force squirrel'; 
let testAccounts = [
"0xb502e3c389ae1bae5e5c069f69130dda284c303ad081edf3699bba7b54276b48",
"0xebb5704572f28d9d43b78dd51315c48e6658acb1307a8615423347d1ee125137",
"0x85b7ba9ac5053516a50e82e726c11050e7713ad343c0d56d4b39ccdde7f6d16c",
"0x8775d3318da841f3ca7eb21a74c82b93cdd90a18ba8d0a65ce3c287a35dca95b",
"0xebf874b65c6e81839e28c574cee0a100beb82b9b5c03c38548259074fa107555",
"0xc2d1136a6f76004ba319b1e54026c1639cc9fca55f34284576c8a2c72d0ab072",
"0x65be43c9207d9184dc04d4154123bc94a8959e5764af8985d96322e86eea9130",
"0x06af88eb7012f2616a476158ee5e15cc6faac2205f8c8c34eb8ce0d7d5112420",
"0xe63f0251d8aefa3db48bc14c515cdfa4d512848e1a94abd8c1dc1faa1954eea7",
"0x1e7ddfa342dbd9fd1fd8520488900e626b40f338c11b5a96c7f3f23590340fb8"
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
            version: '^0.8.0'
        }
    }
};

