const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//primeira = lines[0].split(" ");

let X = parseInt(lines[0])
let Y = parseFloat(lines[1]).toFixed(1)

let consumo_medio = (X/Y).toFixed(3)

console.log(`${consumo_medio} km/l`)