const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//primeira = lines[0].split(" ");

console.log('I=1 J=60');
console.log('I=4 J=55');
console.log('I=7 J=50');
console.log('I=10 J=45');
console.log('I=13 J=40');
console.log('I=16 J=35');
console.log('I=19 J=30');
console.log('I=22 J=25');
console.log('I=25 J=20');
console.log('I=28 J=15');
console.log('I=31 J=10');
console.log('I=34 J=5');
console.log('I=37 J=0');