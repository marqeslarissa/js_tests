// call e apply metodo usando para controlar a invocação de uma função imediantamente
// bind usado para invocar uma funçao mais tarde

// CALL
const dados = { nome: 'Nome'};
const saudacao = (idade) => {
  console.log(`Bem vindo ${this.nome}, sua idade é ${idade}`);
};
saudacao.call(dados, 29);  // >Bem vindo Nome, sua idade é 29

// APPLY -- apply aceita argumentos de uma funcao num array, sem precisar colocar virgula para varios dados
const dados = { nome: 'Nome'};
const argumentos = [29];  // apply pode usar [29, 15, 25]
const saudacao = (idade) => {
  console.log(`Bem vindo ${this.nome}, sua idade é ${idade}`);
};
saudacao.apply(dados, argumentos);  // > Bem vindo Nome, sua idade é 29


// BIND -- pode chamar depois
const dados = { nome: 'Nome'};
const saudacao = (idade) => {
  console.log(`Bem vindo ${this.nome}, sua idade é ${idade}`);
};
const bound = saudacao.bind(dados); 
bound(29);  // > Bem vindo Nome, sua idade é 29