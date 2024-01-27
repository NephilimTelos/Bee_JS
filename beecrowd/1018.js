const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//primeira = lines[0].split(" ");

let N = parseInt(lines[0])

let notas_100 = parseInt(N / 100)
let notas_50 = parseInt((N % 100) / 50)
let notas_20 = parseInt(((N % 100) % 50) / 20)
let notas_10 = parseInt((((N % 100) % 50) % 20) / 10)
let notas_5 = parseInt(((((N % 100) % 50) % 20) % 10) / 5)
let notas_2 = parseInt((((((N % 100) % 50) % 20) % 10) % 5) / 2)
let notas_1 = parseInt(((((((N % 100) % 50) % 20) % 10) % 5) % 2) / 1)


console.log(N)
console.log(`${notas_100} nota(s) de R$ 100,00`)
console.log(`${notas_50} nota(s) de R$ 50,00`)
console.log(`${notas_20} nota(s) de R$ 20,00`)
console.log(`${notas_10} nota(s) de R$ 10,00`)
console.log(`${notas_5} nota(s) de R$ 5,00`)
console.log(`${notas_2} nota(s) de R$ 2,00`)
console.log(`${notas_1} nota(s) de R$ 1,00`)