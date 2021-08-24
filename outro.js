const rLine = require('readline-sync');
const nomeAluna = rLine.question('Qual seu nome ');
console.log(`olá ${nomeAluna}`);


var nota1 = parseFloat(rLine.question('Qual sua primeira nota '));
var nota2 = parseFloat(rLine.question('Qual sua segunda nota '));
var nota3 = parseFloat(rLine.question('Qual sua terceira nota '));

var media = (nota1 + nota2 + nota3)/3;

console.log(`Sua média foi de ${media.toFixed(2)}`);

if(media>=7){
    console.log("Boa")
}else if(media<5){
    console.log("Reprovada")
}else{
    console.log("Recuperação")
}