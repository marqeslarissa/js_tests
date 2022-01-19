/* toda funçao tem uma propriedade chamada prototype que por padrao vem vazia e podemos adicionar propriedades a ela
é um protótipo da funçao e podemos criar uma especie de herança de um object para o outro
que é chamado de prototype chain (cadeia de prototipo). Podem ser passados para o outro como espécie de herança
Quando se cria um novo obj atraves de uma funcao construtora, o prototype passa para o obj criado como uma referencia
entao pode-se acessar o prototype de um construtor de USUARIO atraves de um novo usuario criado.
 */

const Usuario = function(nome){
  this.nome = nome;
}
const qualquer = new Usuario("Nome teste");
Usuario.prototype.getNome = function(){
  console.log(this.nome)
};
qualquer.getNome(); // > "Nome teste"
//ele foi buscar no qualquer.__proto__
//assim se herda da funçao construtora imitando classe