const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
primeira = lines[0].split(" ");

let A = parseInt(primeira.shift());
let B = parseInt(primeira.shift());
let C = parseInt(primeira.shift());
let D = parseInt(primeira.shift());

let dif = ((C * 60) + D) - ((A * 60) + B)

if(dif <= 0){
    dif += 24 * 60
}

let hora = parseInt(dif / 60)
let minuto = dif % 60

console.log(`O JOGO DUROU ${hora} HORA(S) E ${minuto} MINUTO(S)`)