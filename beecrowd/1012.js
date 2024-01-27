const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
primeira = lines[0].split(" ");

let a = parseFloat(primeira.shift())
let b = parseFloat(primeira.shift())
let c = parseFloat(primeira.shift())

let pi = 3.14159

let area_triangulo = (a * c) / 2
let area_circulo = pi * (c*c)
let area_trapezio = ((a+b) * c) / 2
let area_quadrado = b*b
let area_retangulo = a*b

console.log('TRIANGULO:', area_triangulo.toFixed(3))
console.log('CIRCULO:', area_circulo.toFixed(3))
console.log('TRAPEZIO:', area_trapezio.toFixed(3))
console.log('QUADRADO:', area_quadrado.toFixed(3))
console.log('RETANGULO:', area_retangulo.toFixed(3))