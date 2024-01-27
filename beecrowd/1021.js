const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//primeira = lines[0].split(" ");

let N = parseFloat(lines[0])

let notas_100 = parseInt(N / 100)
let notas_50 = parseInt((N % 100) / 50)
let notas_20 = parseInt(((N % 100) % 50) / 20)
let notas_10 = parseInt((((N % 100) % 50) % 20) / 10)
let notas_5 = parseInt(((((N % 100) % 50) % 20) % 10) / 5)
let notas_2 = parseInt((((((N % 100) % 50) % 20) % 10) % 5) / 2)

let moedas_1 = parseInt(((((((N % 100) % 50) % 20) % 10) % 5) % 2) / 1)
let moedas_50 = parseInt((((((((N % 100) % 50) % 20) % 10) % 5) % 2) % 1) / 0.50)
let moedas_25 = parseInt(((((((((N % 100) % 50) % 20) % 10) % 5) % 2) % 1) % 0.50) / 0.25)
let moedas_10 = parseInt((((((((((N % 100) % 50) % 20) % 10) % 5) % 2) % 1) % 0.50) % 0.25) / 0.10)
let moedas_05 = parseInt(((((((((((N % 100) % 50) % 20) % 10) % 5) % 2) % 1) % 0.50) % 0.25) % 0.10) / 0.05)
let moedas_01 = parseInt((((((((((((N % 100) % 50) % 20) % 10) % 5) % 2) % 1) % 0.50) % 0.25) % 0.10) % 0.05).toFixed(2) / 0.01)

console.log('NOTAS:')
console.log(`${notas_100} nota(s) de R$ 100.00`)
console.log(`${notas_50} nota(s) de R$ 50.00`)
console.log(`${notas_20} nota(s) de R$ 20.00`)
console.log(`${notas_10} nota(s) de R$ 10.00`)
console.log(`${notas_5} nota(s) de R$ 5.00`)
console.log(`${notas_2} nota(s) de R$ 2.00`)
console.log('MOEDAS:')
console.log(`${moedas_1} moeda(s) de R$ 1.00`)
console.log(`${moedas_50} moeda(s) de R$ 0.50`)
console.log(`${moedas_25} moeda(s) de R$ 0.25`)
console.log(`${moedas_10} moeda(s) de R$ 0.10`)
console.log(`${moedas_05} moeda(s) de R$ 0.05`)
console.log(`${moedas_01} moeda(s) de R$ 0.01`)