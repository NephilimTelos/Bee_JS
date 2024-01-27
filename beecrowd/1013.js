const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
primeira = lines[0].split(" ");

let a = parseFloat(primeira.shift())
let b = parseFloat(primeira.shift())
let c = parseFloat(primeira.shift())

let maior = (a + b + Math.abs(a - b)) / 2

let maior2 = (maior + c + Math.abs(maior - c)) / 2

console.log(`${maior2} eh o maior`)