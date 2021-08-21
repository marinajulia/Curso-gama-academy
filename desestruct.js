const pessoa = {
    nome: 'teste',
    sobrenome: 'teste',
    idade: 28,
    profissao: 'reporter'
}

// console.log(pessoa);

// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let idade = pessoa.idade;
// let profissao = pessoa.profissao;

let { nome, sobrenome, idade, profissao } = pessoa;
console.log(nome, sobrenome, idade, profissao)
