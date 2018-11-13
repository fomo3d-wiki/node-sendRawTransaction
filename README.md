# node-sendRawTransaction

[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/fomo3d-wik)

### 1、区块链离线签名：（具体用法）

```JavaScript
const ethTx = require('ethereumjs-tx');
const txData = {
    nonce: '0x9',
    gasPrice: '0x4a817c800',
    gasLimit: '0x5208',
    to: '0x3535353535353535353535353535353535353535',
    value: '0xde0b6b3a7640000',
    data: '',
    v: '0x1b', // Ethereum mainnet chainID 27 1b or 28 1c(测试链和主链不同,rinkeby为0x2b,如不懂可以提issue)
    r: 0,
    s: 0
  };
  
    tx = new ethTx(txData);
    
    //①测试--->RLP(序列化)
    console.log('RLP-Encoded Tx: 0x' + tx.serialize().toString('hex'))

    //②测试--->hash（哈希）
    txHash = tx.hash();
    console.log('Tx Hash: 0x' + txHash.toString('hex'))

    //③测试--->Sign（离线签名）
    const privKey = Buffer.from('4646464646464646464646464646464646464646464646464646464646464646', 'hex');
    tx.sign(privKey);
    serializedTx = tx.serialize();
    rawTx = 'Signed Raw Transaction: 0x' + serializedTx.toString('hex');
    console.log(rawTx)
```
# Code of Conduct

We aim to share our knowledge and findings as we work daily to improve our product, for our community, in a safe and open space. We work as we live, as kind and considerate human beings who learn and grow from giving and receiving positive, constructive feedback. We reserve the right to delete or ban any behavior violating this base foundation of respect.

# Donations

I do this because I love it, but if you want to buy me a coffee, I won't say no. :o)
```php
Ethereum: 0x104F8FE69dF59fe4c27dd487779D49A9Ec5caCC9
```
# License

Completely MIT Licensed. Including ALL dependencies. If you love or like it ！Please jion us!
```go
E-mail:lucklidi@126.com，WechatID:adi1427569517
```
## 如感兴趣，请直接加入:
```
or you can scan it
```

![Image text](https://github.com/fomo3d-wiki/books/blob/master/images/weixinGZ.jpg)
