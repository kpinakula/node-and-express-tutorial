const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home')
  }
  if (req.url === '/about') {
    res.end('About our home')
  }
  res.end(`<h1>Oops!</h1>`);
})

server.listen(5000);