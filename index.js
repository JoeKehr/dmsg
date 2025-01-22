const crypto = require('crypto');
const ecdh = crypto.createECDH('secp256k1');

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


