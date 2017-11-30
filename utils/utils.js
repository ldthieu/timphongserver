var { Buffer } = require("buffer");
var CryptoJS = require("crypto-js");
var conf = require("../config/config");

module.exports = {
    enCrypt: plaintext => {
        if (!plaintext)
            return "";
        let rs = CryptoJS.AES.encrypt(plaintext, conf.secret_key).toString();
        let buffer = new Buffer(rs);
        return buffer.toString('base64');
    },
    deCrypt: ciphertext => {
        if (!ciphertext)
            return "";
        let buffer = new Buffer(ciphertext, 'base64');
        let bytes = CryptoJS.AES.decrypt(buffer.toString(), conf.secret_key);
        return bytes.toString(CryptoJS.enc.Utf8);
    },
    hash: text => {
        let b = new Buffer(text);
        return b.toString('base64');
    },
    deHash: hash_text => {
        let b = new Buffer(hash_text, 'base64');
        return b.toString();
    }
}