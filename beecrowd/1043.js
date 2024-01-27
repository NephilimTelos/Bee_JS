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

isTri()

function isTri(){
    if(A > B && A > C){

        if(B + C <= A){
            let area = (A + B) * C / 2
            console.log(`Area = ${area.toFixed(1)}`)
        }

        else{
            let perimetro = A + B + C
            console.log(`Perimetro = ${perimetro.toFixed(1)}`)
        }
    }

    else if(B > A && B > C){

        if(A + C <= B){
            let area = (A + B) * C / 2
            console.log(`Area = ${area.toFixed(1)}`)
        }

        else{
            let perimetro = A + B + C
            console.log(`Perimetro = ${perimetro.toFixed(1)}`)
            
        }
    }

    else if(C > A && C > B){

        if(A + B <= C){
            let area = (A + B) * C / 2
            console.log(`Area = ${area.toFixed(1)}`)
        }

        else{
            let perimetro = A + B + C
            console.log(`Perimetro = ${perimetro.toFixed(1)}`)
        }
    }
}