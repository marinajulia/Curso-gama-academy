const cpf = "Meu CPF é 461.459.808-00";
const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}.[0-9]{2}');

console.log(cpf.match(regex));
