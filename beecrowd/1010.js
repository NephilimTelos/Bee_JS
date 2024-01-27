const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
primeira = lines[0].split(" ");
segunda = lines[1].split(" ")

let peca1 = primeira.shift()
let numpec1 = parseFloat(primeira.shift())
let valpec1 = parseFloat(primeira.shift())

let peca2 = segunda.shift()
let numpec2 = parseFloat(segunda.shift())
let valpec2 = parseFloat(segunda.shift())

let valAPagar = ((numpec1 * valpec1) + (numpec2 * valpec2)).toFixed(2)

console.log('VALOR A PAGAR: R$', valAPagar)