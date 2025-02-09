const crypto = require('crypto');
const ecdh = crypto.createECDH('secp256k1');
const bip39 = require ('@scure/bip39');
const wordlist = require ('@scure/bip39/wordlists/english').wordlist;

/*
console.log(
    bip39.validateMnemonic("side since wise peace fiscal gravity sauce adjust marine sauce industry champion snap mind hybrid walnut human snow", wordlist),
    bip39.validateMnemonic("side since wise peace fiscal gravity sauce adjust marine sauce industry champion snap mind hybrid walnuk human snow", wordlist)
);

console.log(createKeyPair (generateSeedPhrase(), ""))
console.log(createKeyPair ("side since wise peace fiscal gravity sauce adjust marine sauce industry champion snap mind hybrid walnut human snow"
    , "awsdfgwdfbwdfbwdf"))
console.log(createKeyPair ("side since wise peace fiscal gravity sauce adjust marine sauce industry champion snap mind hybrid walnut human snow"
    , ""))
*/

//TODO
// Store Private Key

//TODO
// Store Public Key

//TODO
// Generate Unique Identifier

//TODO
// Add Nodes

//TODO
// Send Public Key

//TODO
// Request IP + Port

//TODO
// Answer IP + Port to request

//TODO
// Send IP + Port

//TODO
// Receive and Store Public Key
// Spread Public Key info

//TODO
// Receive and Store IP + Port
// Spread IP + Port info

//TODO
// Send Message

//TODO
// Dispatch message received


function generateSeedPhrase () {

    // Generate x random words. Uses Cryptographically-Secure Random Number Generator.
    const mn = bip39.generateMnemonic(wordlist, 192);
    console.log(mn);
    return mn;
}

function createKeyPair (seedPhrase, password) {
    const key = crypto.pbkdf2Sync(seedPhrase, password, 100000, 64, 'sha512').toString('hex');

    const prvKey = key.substring(0, 64);

    ecdh.setPrivateKey(Buffer.from(prvKey, 'hex'));

    const pubKey = ecdh.getPublicKey().toString('hex');

    console.log(pubKey, prvKey);

    return {
        privateKey : prvKey,
        publicKey : pubKey
    };
}

/*
{
    const keyA = crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512').toString('hex');
    console.log(keyA);
    const prvKeyA = keyA.substring(0, 64);
    console.log(prvKeyA);

    ecdh.setPrivateKey(Buffer.from(prvKeyA, 'hex'));

    const pubKeyA = ecdh.getPublicKey().toString('hex');
    console.log(pubKeyA);


    const keyB = crypto.pbkdf2Sync('secret2', 'salt', 100000, 64, 'sha512').toString('hex');
    console.log(keyB);
    const prvKeyB = keyB.substring(0, 64);
    console.log(prvKeyB);

    ecdh.setPrivateKey(Buffer.from(prvKeyB, 'hex'));

    const pubKeyB = ecdh.getPublicKey().toString('hex');
    console.log(pubKeyB);

    ecdh.setPrivateKey(Buffer.from(prvKeyB, 'hex'));
    const sharedB = ecdh.computeSecret(Buffer.from(pubKeyA, 'hex'));

    console.log(sharedB.toString('hex'));

    ecdh.setPrivateKey(Buffer.from(prvKeyA, 'hex'));
    const sharedA = ecdh.computeSecret(Buffer.from(pubKeyB, 'hex'));

    console.log(sharedA.toString('hex'));

}
*/