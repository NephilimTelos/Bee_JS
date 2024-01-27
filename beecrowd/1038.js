const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//lines = lines[0].split(" ");

let codigo = Number(parseInt(lines[0]))
let qtd = Number(parseInt(lines[1]))
let code_value = 0

switch (codigo) {
    case 1:
        code_value = parseFloat(4.00)
        console.log(`Total: R$ ${parseFloat(code_value * qtd).toFixed(2)}`)
        break;

    case 2:
        code_value = parseFloat(4.50)
        console.log(`Total: R$ ${parseFloat(code_value * qtd).toFixed(2)}`)
        break

    case 3:
        code_value = parseFloat(5.00)
        console.log(`Total: R$ ${parseFloat(code_value * qtd).toFixed(2)}`)
        break

    case 4:
        code_value = parseFloat(2.00)
        console.log(`Total: R$ ${parseFloat(code_value * qtd).toFixed(2)}`)
        break

    case 5:
        code_value = parseFloat(1.50)
        console.log(`Total: R$ ${parseFloat(code_value * qtd).toFixed(2)}`)
        break
}



// if(codigo == 1){
//     code_value = 4
// }

// else if(codigo == 2){
//     code_value = 4.50
// }

// else if(codigo == 3){
//     code_value = 5
// }

// else if(codigo == 4){
//     code_value = 2
// }

// else if(codigo == 5){
//     code_value = 1.50
// }

// let total = parseFloat(code_value * qtd).toFixed(2)
// console.log(`Total: R$ ${total}`)

