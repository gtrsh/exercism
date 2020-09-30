'use strict'

const buildCipherAlphabet = (alphabet, n) => alphabet.slice(n) + alphabet.slice(0, n)
const buildCodecDict = (fromValArr, toValArr) => [...fromValArr].reduce((acc, val, i) => ({
    ...acc,
    [val]: toValArr[i],
    [val.toUpperCase()]: toValArr[i].toUpperCase()
}), {})

const buildCaesarCodec = (n, opType) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const cipherAlphabet = buildCipherAlphabet(alphabet, n)
    const codecDict = opType === 'encode' ?
        buildCodecDict(alphabet, cipherAlphabet) : buildCodecDict(cipherAlphabet, alphabet)

    return (input) => [...input].map((val) => codecDict[val] ? codecDict[val] : val).join('')
}

module.exports = buildCaesarCodec
