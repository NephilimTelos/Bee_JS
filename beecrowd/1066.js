const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//primeira = lines[0].split(" ");

let pares = 0
let impares = 0
let positivos = 0
let negativos = 0

for(i = 0; i < 5; i++){
    let num = parseInt(lines.shift())

    if(num % 2 == 0){
        pares++
    }

    if(num % 2 != 0){
        impares++
    }

    if(num > 0){
        positivos++
    }

    if(num < 0){
        negativos++
    }
}

console.log(`${pares} valor(es) par(es)`)
console.log(`${impares} valor(es) impar(es)`)
console.log(`${positivos} valor(es) positivo(s)`)
console.log(`${negativos} valor(es) negativo(s)`)