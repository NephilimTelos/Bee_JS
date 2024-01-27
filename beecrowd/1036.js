const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
primeira = lines[0].split(" ");

let A = parseFloat(primeira.shift())
let B = parseFloat(primeira.shift())
let C = parseFloat(primeira.shift())

let num_raiz = B*B - 4*A*C
let delta = Math.sqrt(num_raiz)

let x1 = ((-B + delta) / (2*A)).toFixed(5)
let x2 = ((-B - delta) / (2*A)).toFixed(5)

if(num_raiz < 0 || A == 0){
    console.log('Impossivel calcular')
}
else{
    console.log(`R1 = ${x1}`)
    console.log(`R2 = ${x2}`)
}