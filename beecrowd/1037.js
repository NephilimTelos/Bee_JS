const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//lines = lines[0].split(" ");

let entrada = parseFloat(lines[0])

if(entrada <= 25 && entrada >= 0 ){
    console.log('Intervalo [0,25]')
}

else if(entrada >= 25.01 && entrada <= 50 ){
    console.log('Intervalo (25,50]')
}

else if(entrada >= 50.01 && entrada <= 75 ){
    console.log('Intervalo (50,75]')
}

else if(entrada >= 75.01 && entrada <= 100 ){
    console.log('Intervalo (75,100]')
}

else{
    console.log('Fora de intervalo')
}