
const http = require('http')
// Costante criada com o nome de http que recebe requisição do modulo http do nodeJS.

const port = 3000;
// Definido o número da porta localhost.

const server = http.createServer((req, res) => {

  res.end("Olá mundo")
  // servidos inicia o que está na parte res.end.
})
server.listen(port, () => {
  console.log(`Servidor iniciou em http://localhost:${port}/`)
})
