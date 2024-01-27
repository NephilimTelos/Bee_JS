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
let C = parseInt(primeira.shift())
let D = parseInt(primeira.shift())

if(B > C && D > A && C + D > A + B && C >= 0 && D >= 0 && A % 2 == 0 ){
    console.log('Valores aceitos')
}
else{
    console.log('Valores não aceitos')
}