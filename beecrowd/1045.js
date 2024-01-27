const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
primeira = lines[0].split(" ");

let C = parseFloat(primeira.shift())
let B = parseFloat(primeira.shift())
let A = parseFloat(primeira.shift())

if(A >= B + C){
    console.log('NAO FORMA TRIANGULO')
}

else{
    if(A*A == B*B + C*C){
        console.log('TRIANGULO RETANGULO')
    }
    if(A*A > B*B + C*C){
        console.log('TRIANGULO OBTUSANGULO')
    }
    if(A*A < B*B + C*C){
        console.log('TRIANGULO ACUTANGULO')
    }
    if(A == B && A == C && B == C){
        console.log('TRIANGULO EQUILATERO')
    }
    if(A == B && A != C || B == C && B != A || C == A && C != B){
        console.log('TRIANGULO ISOSCELES')
    }
}