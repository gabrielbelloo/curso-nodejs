import chalk from 'chalk'
import minimist from 'minimist'

const args = minimist(process.argv.splice(2)) //ler argumentos
const nota = args['nota']
const aluno = args['aluno']


if (nota >= 6) {
    console.log(chalk.bgGreen.bold('Aluno: ' + aluno + '\nSituação: Aprovado' + '\nNota: ' + nota)) //console estilizado
} else {
    console.log(chalk.bgRed.bold('Aluno: ' + aluno + '\nSituação: Reprovado' + '\nNota: ' + nota)) //console estilizado
}