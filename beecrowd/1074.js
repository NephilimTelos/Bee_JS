const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//primeira = lines[0].split(" ");

let N = Number(parseInt(lines.shift('\r \n')))

for(i = 0; i < N; i++){

    let x = lines.shift('\r \n')

    if(x < 0 && x % 2 != 0){
        console.log('ODD NEGATIVE')
    }

    else if(x < 0 && x % 2 == 0){
        console.log('EVEN NEGATIVE')
    }

    else if(x > 0 && x % 2 == 0){
        console.log('EVEN POSITIVE')
    }

    else if(x > 0 && x % 2 != 0){
        console.log('ODD POSITIVE')
    }

    else if(x == 0){
        console.log('NULL')
    }
}