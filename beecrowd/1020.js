const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//primeira = lines[0].split(" ");

let dias_totais = parseInt(lines[0])

let anos = parseInt(dias_totais / 365)
let meses = parseInt((dias_totais - 365 * anos) / 30)
let dias = parseInt(dias_totais - (365 * anos + 30 * meses))

console.log(`${anos} ano(s)`)
console.log(`${meses} mes(es)`)
console.log(`${dias} dia(s)`)