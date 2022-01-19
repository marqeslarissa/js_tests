class Animal {
  constructor(pes){
    this.pes = pes;
  }
  quantidadePes(){
    console.log('O animal tem' + this.pes + ' pes/patas');
  }
}

class Mamifero extends Animal {  // const Mamifero = class extends Animal {
  constructor(nome, som){ // recebe os parametros da criaçao
    super(pes) // metodo usando para chamar o construtor da classe pai (Animal)
    this.nome = nome; // no this vc atribui o contexto do que ta sendo criado
    this.som = som;
  }

  emitirSom(){
    console.log('Esse animal faz ' + this.som);
  }
} 

const cachorro = new Mamifero('cachorro', 'au');
cachorro.emitirSom();  //   > "Esse animal faz au"

const cachorro = new Mamifero('cachorro', 'au', 4);
cachorro.quantidadePes();  //   > "O animal tem 4 pes/patas"

