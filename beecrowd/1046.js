const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
primeira = lines[0].split(" ");

let A = parseInt(primeira.shift())
let B = parseInt(primeira.shift())
let tempo = 0

if(A < B){
    tempo = Math.abs(B - A)
}
else {
    tempo = B + 24 - A
}

console.log(`O JOGO DUROU ${tempo} HORA(S)`)