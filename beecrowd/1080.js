const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//primeira = lines[0].split(" ");

let num = Number(parseInt(lines.shift()))
let maior = num
let pos = 1

for(i = 1; i <= 100; i++){

    if(maior < num){
        maior = num
        pos = i
    }

    num = Number(parseInt(lines.shift()))
}

console.log(`${maior}\n${pos}`)

