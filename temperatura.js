function calculo(celcius){
return 9 * celcius / 5 + 32;
}

const rLine = require('readline-sync');
const temperaturaCelcius = rLine.question('Qual a temperatura em celcius:\n');
console.log(`Sua temperatura em F é`, calculo(temperaturaCelcius))