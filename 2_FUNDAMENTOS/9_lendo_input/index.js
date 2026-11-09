const readline = require ('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

console.clear() //limpa console antes da question
readline.question('Qual o seu nome? ', (nome) => { //faz a pergunta, o input entra no parâmetro 'nome' e em seguida a função anônima é executada
    if(nome=='Gabriel Bello'){
        console.log('Oi, ' + nome + '!')
    } else {
        console.log('Espera... eu nem te conheço')
    }
    readline.close()
})