const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//lines = lines[0].split(" ");

let notaA = lines[0]
let notaB = lines[1]
let notaC = lines[2]

let notaFinal = (notaA * 2 + notaB * 3 + notaC * 5) / 10

console.log('MEDIA =', notaFinal)