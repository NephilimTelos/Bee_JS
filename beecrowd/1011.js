const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//primeira = lines[0].split(" ");

let raio = parseInt(lines[0])
let pi = 3.14159

let volume = (4/3) * pi * (raio * raio * raio)

console.log('VOLUME =', volume.toFixed(3))

