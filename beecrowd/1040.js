const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
primeira = lines[0].split(" ");
segunda = lines[1].split(" ");

let N1 = parseFloat(primeira.shift())
let N2 = parseFloat(primeira.shift())
let N3 = parseFloat(primeira.shift())
let N4 = parseFloat(primeira.shift())

let recuperacao = false

let media = parseFloat((N1 * 2 + N2 * 3 + N3 * 4 + N4) / 10)
console.log(`Media: ${media.toFixed(1)}`)

if(media >= 7.0){
    console.log('Aluno aprovado.')
}

else if(media < 5.0){
    console.log('Aluno reprovado.')
}

else if (media >= 5.0 && media <= 6.0){
    console.log('Aluno em exame.')
    recuperacao = true

    if(recuperacao){
        nota_recuperacao = parseFloat(segunda.shift())
        console.log(`Nota do exame: ${nota_recuperacao.toFixed(1)}`)

        let nova_media = (media + nota_recuperacao) / 2

        if(nova_media >= 5.0){
            console.log('Aluno aprovado.')
            console.log(`Media final: ${nova_media.toFixed(1)}`)
        }

        else if(nova_media <= 4.9){
            console.log('Aluno aprovado.')
            console.log(`Media final: ${nova_media.toFixed(1)}`)
        }
        
    }  
}
