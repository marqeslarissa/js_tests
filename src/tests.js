let list = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco']

let position = list [0];
console.log(position); // Um 

let position = list[list.length - 1];
console.log(position); // Cinco

list.forEach((item, index, array) => {
  console.log(item, index, array) 
});

let newLength = list.push('Seis'); 
console.log(newLength);

let last = list.pop(); //remove last item
console.log(last);

let first = list.shift(); // remove frist item
console.log(first);

let newLength = list.unshift('Zero') // add to the front
console.log(newLength);

list.push('Sete');
console.log(list);
let pos = list.indexOf('Quarto');
console.log(pos);

let removedItem = list.splice(pos, 1); // remove last position 
console.log(removedItem);
