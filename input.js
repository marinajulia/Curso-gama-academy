// const rLine = require('readline');

// const rl = rLine.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question(`Qual é seu nome `, (nome) =>{
//     console.log(`Olá ${nome}`)
//     rl.close()
// })

// rl.on('close', () =>{
//     console.log('volte sempre');
// })


const rLine = require('readline-sync');
const nome = rLine.question('Qual seu nome ');
console.log(`olá ${nome}`);
