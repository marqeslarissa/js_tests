const express = require('express');
const server = express();

server.get('/teste', (req, res) => {
  res.send('Tudo certo em Js Test');
});

server.listen(3030, () => {
  console.log('JS TEST ONLINE');
});