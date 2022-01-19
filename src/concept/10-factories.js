/* é uma funcao que nao é classe nem construtor, que retorna um novo obejto
Se retorna sem usar a palavra new é factories
Nao precisa entender de classes */

// Factorie = fabrica novos objeto sempre que for chamada

const mamifero = function(nome, som){ //toda vez que chamar essa funcao esstará criando um objeto novo
  return {nome, som}; // chave = nome, valor = som
}

const cachorro = Mamifero('cachorro', 'au');
console.log(cachorro);
/*
[object Object] {
  nome: 'cachorro',
  som: 'au'
}
 */