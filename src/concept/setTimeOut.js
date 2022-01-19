// setTimeOut, SetInterval, requestAnimationFrame

const { clear } = require("console");

setTimeout(() => {
  alert('Set Timeout');
}, 2000);



const mostraAlerta = () => {
  alert('Set Timeout');
};
setTimeout(mostraAlerta, 2000);



const mostraAlerta = (nome) => {
  alert('Set Timeout' + nome);
};
setTimeout(monstraAlerta, 2000, 'Teste');
// Set Timeout Teste



const timeout = setTimeout(mostraAlerta, 3500, 'Gabriel');
setTimeout(() => {
  clearTimeout(timeout); //nao roda
}, 1500); 

