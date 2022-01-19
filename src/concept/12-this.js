// this - atual contexto onde ele está sendo utilizado, ele referencia esse contexto
// Teste feito com console

this // > Window
this.nome = "Nome Qlqr"
window.nome = "Nome Qlqr"

function teste() {
  console.log(this)
}
teste(); // > Window

const dados = {funcao: teste}
dados.funcao() // > funcao { nome: "Nome Qlqr"}

const funcao2 = () => console.log(this);
const utilitarios = { funcao: funcao2 }
utilitarios.funcao() // > Window