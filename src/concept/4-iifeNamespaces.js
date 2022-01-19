// IIFE

function alerta(){
  alert('Teste')
}

const alerta = function (){  // fuction anonima
  alert('Teste')
}
alerta();

!function(){    // ! o js trata como expressao e nao se espera mais nada
  alert('teste');
}();  //automaticamente invoca

(function(){ // o mesmo que a função a cima
  alert('teste')
}());

//(()=> alert('teste') ());

var variavel = 20;
!function teste(){
  variavel = 30;
}();
console.log(variavel);


var dados = (function(){
  var contador = 0;
  return {
    incrementar: function(){
      contador = contador +1;
      return contador;
    }
  }
}());
console.log(dados.incrementar());
console.log(dados.contador);