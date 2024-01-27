const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//primeira = lines[0].split(" ");

let num = Number(parseInt(lines[0]));
let qtdNum = 0;

while(qtdNum < 6){
    if(num % 2 !== 0){
        console.log(num)
        qtdNum++
    }
   num++
}