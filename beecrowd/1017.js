const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//primeira = lines[0].split(" ");

let tempo_gasto = parseInt(lines[0])
let vm = parseInt(lines[1])

let km_por_hr = tempo_gasto * vm
let lts_necessarios = km_por_hr / 12

console.log(lts_necessarios.toFixed(3))