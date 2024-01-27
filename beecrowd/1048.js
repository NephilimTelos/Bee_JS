const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//primeira = lines[0].split(" ");

let salario = parseFloat(lines[0]);
let nv_salario = 0;

if(salario > 0 && salario <= 400.00){
    nv_salario = salario + salario * 0.15

    console.log(`Novo salario: ${nv_salario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${(salario * 0.15).toFixed(2)}`)
    console.log(`Em percentual: 15 %`)
}

else if(salario >= 400.01 && salario <= 800.00){
    nv_salario = salario + salario * 0.12

    console.log(`Novo salario: ${nv_salario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${(salario * 0.12).toFixed(2)}`)
    console.log(`Em percentual: 12 %`)
}

else if(salario >= 800.01 && salario <= 1200.00){
    nv_salario = salario + salario * 0.10

    console.log(`Novo salario: ${nv_salario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${(salario * 0.10).toFixed(2)}`)
    console.log(`Em percentual: 10 %`)
}

else if(salario >= 1200.01 && salario <= 2000.00){
    nv_salario = salario + salario * 0.07

    console.log(`Novo salario: ${nv_salario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${(salario * 0.07).toFixed(2)}`)
    console.log(`Em percentual: 7 %`)
}

else if(salario > 2000.00){
    nv_salario = salario + salario * 0.04

    console.log(`Novo salario: ${nv_salario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${(salario * 0.04).toFixed(2)}`)
    console.log(`Em percentual: 4 %`)
}