let contador = 0;

function animation() {
  contador += 1;
  console.log(contador);
  loop = requestAnimationFrame(animation);
}

var loop = requestAnimationFrame(animation);

setTimeout(() => {
  cancelAnimationFrame(interval);
}, 5000);

// funciona recursivamente - se chamando