const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//lines = lines[0].split(" ");

let nota1 = parseFloat(lines[0])
let nota2 = parseFloat(lines[1])

let peso1 = nota1 * 3.5
let peso2 = nota2 * 7.5

let media = (peso1 + peso2) / 11

console.log('MEDIA =', media.toFixed(5))