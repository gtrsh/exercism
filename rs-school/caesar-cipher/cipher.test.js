const buildCaesarCodec = require('./index')

const caesarEncoderBySeven = buildCaesarCodec(7, 'encode')
const caesarDecoderBySeven = buildCaesarCodec(7, 'decode')

const test = 'This is secret. Message about "_" symbol!'
const encodedTest = caesarEncoderBySeven(test)

console.log('TEXT: ', test)
console.log('CIPH: ', encodedTest)
console.log('DECD: ', caesarDecoderBySeven(encodedTest))
