const x = 10
const y = 'Oi'
const z = [1, 2]

console.log(y, x, z) //imprimir varios a

//contagem de impressões
for (i=0; i < 5; i++) {
    console.count(`O valor de x é ${x}, contagem`)
}

console.log('%s, tudo bem?', y) //variável entre string

//limpar console
setTimeout(() => {
    console.clear()
}, 2000)