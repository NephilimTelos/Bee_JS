const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//lines = lines[0].split(" ");

let num = parseFloat(lines[0])
let hrsTrabaladas = parseFloat(lines[1])
let valorHora = lines[2]

let salario = hrsTrabaladas * valorHora

console.log('NUMBER =', num)
console.log('SALARY = U$', salario.toFixed(2))