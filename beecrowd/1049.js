const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//primeira = lines[0].split(" ");

let vertebra = String(lines[0])
let familia = String(lines[1])
let alimento = String(lines[2])

animal()

function animal(){
    if(vertebra == 'vertebrado' && familia == 'ave' && alimento == 'carnivoro'){
        console.log('aguia')
    }
    else if(vertebra == 'vertebrado' && familia == 'ave' && alimento == 'onivoro'){
        console.log('pomba')
    }
    else if(vertebra == 'vertebrado' && familia == 'mamifero' && alimento == 'onivoro'){
        console.log('homem')
    }
    else if(vertebra == 'vertebrado' && familia == 'mamifero' && alimento == 'herbivoro'){
        console.log('vaca')
    }
    else if(vertebra == 'invertebrado' && familia == 'inseto' && alimento == 'hematofago'){
        console.log('pulga')
    }
    else if(vertebra == 'invertebrado' && familia == 'inseto' && alimento == 'herbivoro'){
        console.log('lagarta')
    }
    else if(vertebra == 'invertebrado' && familia == 'anelideo' && alimento == 'hematofago'){
        console.log('sanguessuga')
    }
    else if(vertebra == 'invertebrado' && familia == 'anelideo' && alimento == 'onivoro'){
        console.log('minhoca')
    }
    }

