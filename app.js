var express = require('express');
var app = express();

const ethTx = require('ethereumjs-tx');
const txData = {
    nonce: '0x9',
    gasPrice: '0x4a817c800',
    gasLimit: '0x5208',
    to: '0x3535353535353535353535353535353535353535',
    value: '0xde0b6b3a7640000',
    data: '',
    v: '0x1', // Ethereum mainnet chainID 27 1b or 28 1c
    r: 0,
    s: 0
};
//0xf86c098504a817c800825208943535353535353535353535353535353535353535880de0b6b3a764000080
// 25a028ef61340bd939bc2195fe537567866
// 003e1a15d3c71ff63e1590620aa636276a067cbe9d8997f761aecb703304b3800ccf555c9f3dc64214b297fb1966a3b6d83
//0xf86c098504a817c800825208943535353535353535353535353535353535353535880de0b6b3a764000080
// 1ba08383adc8b8ae116f918fb44ca7ff9df
// d8012596a5c130c6246a2cc717ba41cdaa053ddfacf5bd4aa7e46d1575acf52636ea659b91f29e2fb91c75567a279738f38
app.get('/transfer/:tx?', function(req, res){

    //$txObject = req.query;
    tx = new ethTx(txData);
    console.log('tx:' + JSON.stringify(tx))


    //RLP
    console.log('RLP-Encoded Tx: 0x' + tx.serialize().toString('hex'))

    //hash
    txHash = tx.hash();
    console.log('Tx Hash: 0x' + txHash.toString('hex'))

    //Sign
    const privKey = Buffer.from('4646464646464646464646464646464646464646464646464646464646464646', 'hex');
    tx.sign(privKey);
    serializedTx = tx.serialize();
    rawTx = 'Signed Raw Transaction: 0x' + serializedTx.toString('hex');
    console.log(rawTx)

    res.send(rawTx);
});

app.listen(1991);
