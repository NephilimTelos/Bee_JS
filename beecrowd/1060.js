const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//primeira = lines[0].split(" ");

let positivos = 0

for(i = 0; i < 6; i++){
    let num = parseFloat(lines.shift())

    if(num > 0){
        positivos++
    }
}

console.log(`${positivos} valores positivos`)
