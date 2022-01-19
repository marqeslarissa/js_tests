/* Object Assign = Atribuir, recebe objetos e juntar os objetos em um só
pode usar para criar um novo objeto sem a referencia aos objetos utilizados para criar ele
com isso é um objeto totalmente novo e rebece como parametros quantos objetos quiser
Porem o primeiro objeto será o Objeto ALVO, que receberá todas as propriedades dos objetos passados
após ele. Depois do objeto ALVO, pode-se passar objetos na qual ierá copiar as propriedades para obj ALVO
*/

const alvo = {a:1, b:2};
const dados = {b:5, c:4};
const resultado = Object.assign(alvo, dados);
console.log(resultado); // > a: 1, b: 5, c:4
//sobrescreveu B - quando tiver propriedade repetida ele repete o que ta presente no obj perto do final

resultado.a = 'a';
console.log(alvo); // > a: 'a', b:5, c:4

const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};
const resultado = Object.assign({}, obj1, obj2);
console.log(resultado); // a: 1, b: 2, c:3, d:4

