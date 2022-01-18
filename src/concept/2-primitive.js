// Pegar o tipo de uma variável = typeof
// Valores primitivos nao tem propriedade

// Tipos primitivos = tipo de valor
// Array/function = tipo de referencia

console.log(typeof true); //Boolean
console.log(typeof Boolean(true)); // Boolean
console.log(typeof new Boolean(true)); //Object
console.log(typeof 'Teste'); //String
console.log(typeof 3); //Number

console.log('Teste'.length); // 5

let doze = new Number(12); // Object
let quinze = doze +3; // Number