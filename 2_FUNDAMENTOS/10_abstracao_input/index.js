import inquirer from 'inquirer'
import chalk from 'chalk'

inquirer.prompt([{
    name: 'p1',
    message: 'Qual o valor de pi?'
},{
    name: 'p2',
    message: 'Qual é a raiz quadrada de 81?'
}]).then((answers) => {
    const p1 = parseFloat(answers.p1)
    const p2 = parseFloat(answers.p2)
    
    if(p1 == 3.14 && p2 == 9){
        console.log(chalk.bgGreen.bold("Parabéns, você acertou as duas perguntas!!"))
    } else if(p1 == 3.14){
        console.log(chalk.green.bold('Parabéns, você acertou a primeira pergunta!'))
    } else if(p2 == 9){
        console.log(chalk.green.bold('Parabéns, você acertou a segunda pergunta!'))
    } else{
        console.log(chalk.bgRed.bold('Infelizmente você não acertou nenhuma pergunta'))
    }
}).catch(err => console.log(err))