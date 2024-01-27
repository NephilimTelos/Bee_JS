const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
primeira = lines[0].split(" ");

let V1 = parseInt(primeira.shift());
let V2 = parseInt(primeira.shift());
let V3 = parseInt(primeira.shift());

order()

console.log()
console.log(V1)
console.log(V2)
console.log(V3)

function order(){
    if(V1 < V2 && V1 < V3){
        console.log(V1)

        if(V2 > V1 && V2 < V3){
            console.log(V2)
            console.log(V3)
        }
        else{
            console.log(V3)
            console.log(V2)
        }
    }
    else if(V2 < V1 && V2 < V3){
        console.log(V2)

        if(V1 > V2 && V1 < V3){
            console.log(V1)
            console.log(V3)
        }
        else{
            console.log(V3)
            console.log(V1)
        }
    }
    else if(V3 < V1 && V3 < V2){
        console.log(V3)

        if(V2 > V3 && V2 < V1){
            console.log(V2)
            console.log(V1)
        }
        else{
            console.log(V1)
            console.log(V2)
        }
    }
}