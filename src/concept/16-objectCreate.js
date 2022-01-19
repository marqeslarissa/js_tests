/* Aceita 2 argumentos, sendo o segundo opcional. O primeiro é o prototype que esse obj irá herdar
entao precisa passar o prototype de algum obj pra ele
o segundo sao as propriedades desse obj, sao propriedades descritoras
*/
let Usuario = function (nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const qualquer = new Usuario('nome teste', 29);
const novoQualquer = Object.create(qualquer);
console.log(novoQualquer instanceof usuario); // true -- é instacia do Usuario
console.log(novoQualquer.nome); // >  'nome teste'

function Carro(cor) {
  this.cor = cor;
  this.descricao = descricao;
}
Carro.prototype.pegaInformacoes = function () {
  return this.descricao + 'e a cor ' + this.cor;
}

let meuCarro = Object.create(Carro.prototype);
meuCarro.cor = 'azul';
console.log(meuCarro.pegaInformacoes());

// Quando uma propriedade que estamos passando recebe o obj com as props dela, 
//dizendo como as propriedades devem se comportar
const novoCarro = Object.create(Carro, {  
  cor: { //descritoras de dados
    //writable: pode ser modificado por atribuiçao. configurable: pode ser alterado ou removido
    writable: true, configurable: true, value: 'vermelho' 
  },
  descricaoPadrao: { //descriçao padrao, para iniciar com algum valor
    writable: false, configurable: true, value: 'meu carro'
  },
  descricao: {  //descritoras acessoras para lidar com dado concreto (manipular)
    configurable: true,
    get: function(){
      return this.descricaoPadrao.toUpperCase();
    },
    set: function(valor){
      this.descricaoPadrao = valor.toLowerCase();
    }
  }
});
console.log(novoCarro.descricao); //  > 'MEU CARRO' .. passou pelo get

novoCarro.descricaoPadrao = 'Nova descricao';
console.log(novoCarro.descricao); // >   !! nao retorna nada, 
//pq na descricaoPadrao está com writable em false, entao nao se pode atribuir nada a ele