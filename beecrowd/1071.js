const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//primeira = lines[0].split(" ");

let X = Number(parseInt(lines[0]));
let Y = Number(parseInt(lines[1]));

let soma = 0

if(X < Y){
    for(i = X + 1; i < Y; i++){
        if(i % 2 != 0){
            soma += i
        }
    }
}

else if(Y < X){
    for(i = Y + 1; i < X; i++){
        if(i % 2 != 0){
            soma += i
        }
    }
}

console.log(soma)


