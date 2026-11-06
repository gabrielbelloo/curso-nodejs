console.log(process.argv) //argumentos passados pelo terminal

const args = process.argv.slice(2) //separa os argumentos
console.log(args)

const nome = args[0].split('=')[1] //imprime nome
console.log(nome)

const idade = args[1].split('=')[1] //imprime idade
console.log(idade)

console.log("Nome: " + nome + ", idade: " + idade)