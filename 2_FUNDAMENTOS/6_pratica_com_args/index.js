const minimist = require('minimist') //externo
const soma = require('./soma.js').soma //interno

const args = minimist(process.argv.slice(2)) //separa argumentos
const a = parseInt(args['a']) //valor 1
const b = parseInt(args['b']) //valor 2

console.log(a + ' + ' + b + ' = ' + soma(a, b)) //imprime soma