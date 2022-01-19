const interval = setInterval(() => {
  console.log('teste');
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 5000);

/* 
teste
teste
teste
teste
teste
 -- depois de 5 nao executa mais 
*/