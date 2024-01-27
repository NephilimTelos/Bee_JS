const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//primeira = lines[0].split(" ");

let N = Number(parseInt(lines.shift('/r /n')))

let media = 0

for(i = 0; i < N; i++){

    let [a,b,c] = lines[i].split(" ")

    media = (a * 2 + b * 3 + c * 5) / 10

    console.log(media.toFixed(1))
}

