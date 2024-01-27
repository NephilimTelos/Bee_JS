const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//primeira = lines[0].split(" ");

let renda = Number(parseFloat(lines[0]));

if(renda > 0 && renda <= 2000.00){
    console.log('Isento')
}

else if(renda >= 2000.01 && renda <= 3000.00){
    let imposto1000 = 1000 * 0.08
    let impostoResto = resto * 0.18
    let impostoTotal = imposto1000 + impostoResto

    console.log(`R$ ${imposto.toFixed(2)}`)
}

else if(renda >= 3000.01 && renda <= 4500.00){
    let resto = renda % 1000
    let imposto1000 = 1000 * 0.08
    let impostoResto = resto * 0.18
    let impostoTotal = imposto1000 + impostoResto

    console.log(`R$ ${impostoTotal.toFixed(2)}`)
}

else if(renda > 4500.00){
    let resto = renda % 1000
    let imposto1000 = 1000 * 0.08
    let impostoResto = resto * 0.28
    let impostoTotal = imposto1000 + impostoResto

    console.log(`R$ ${impostoTotal.toFixed(2)}`)
}

