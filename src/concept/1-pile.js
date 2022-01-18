//first in first out = FIFO - O primeiro que entrou é o primeiro a sair
// last in last out = LIFO - O ultimo que entrea é o primeiro a sair

function funcao1 () {
  funcao2();
  console.log('executou a funcao 1');
}

function funcao2 () {
  funcao3();
  console.log('executou a funcao 2');
}

function funcao3 () {
  console.log('executou a funcao 3');
}
funcao1();

// executou funcao 3
// executou funcao 2
// executou funcao 1
