/* new cria um novo objeto vazio com o contexto de this onde será o escopo do novo objeto
entao ele executa o corpo dessa funçao, depois no obj novo ele cria uma nova propriedade __proto__
que aponta para as propriedades do prototype da funcao construtora que foi utilizada pra criar esse novo obj
Ele adiciona um return this no final da funçao construtora para que o obj que estamos criando 
(que vai suar o new e constructor) receba o this que foi criando na funçao construtora
*/

function Usuario(nome) {
  // ele cria this = {};
  this.nome = nome;
  this.log = function(){
    console.log(this);
  }
  //ele cria return this;
}
const qualquer = new Usuario('Qualquer');
console.log(qualquer);
/* > [object Object] {
  log: function () {
    window.runnerWindow.proxyConsole.log(this);
  },
  nome: "Qualquer"
}
*/

const nome = "Nome";  // >"Nome"
const novoNome = new String("Nome"); // > String{"Gabriel"} .. array, length, __proto__

// checar se a variavel foi ou nao criada apartir de um construtor
console.log(novoNome instanceof Usuario); // > true .. é uma instancia do construtor Usuario
console.log(novoNome instanceof String); // false