const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
primeira = lines[0].split(" ");

let X = Number(primeira.shift()).toFixed(1)
let Y = Number(primeira.shift()).toFixed(1)

if(X >= 0.1 && Y >= 0.1){
    console.log('Q1')
}

else if(X >= 0.1 && Y <= - 0.1){
    console.log('Q4')
}

else if(X <= -0.1 && Y >= 0.1){
    console.log('Q2')
}

else if(X <= -0.1 && Y <= -0.1){
    console.log('Q3')
}
else if(X == 0 && Y != 0){
    console.log('Eixo X')
}
else if(Y == 0 && X != 0){
    console.log('Eixo Y')
}
else if(X == 0 && Y == 0){
    console.log('Origem')
}