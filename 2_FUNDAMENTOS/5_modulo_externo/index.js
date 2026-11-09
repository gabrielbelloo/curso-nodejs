const minimist = require('minimist')
const args = minimist(process.argv.slice(2)) //separa os argumentos

console.log(args)

const nome = args['nome'] //pega o argumento pelo nome dele
const idade = args['idade']

console.log('Nome: ' + nome + ' idade: ' + idade)