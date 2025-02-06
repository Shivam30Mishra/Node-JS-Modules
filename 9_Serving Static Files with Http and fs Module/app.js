const http   = require('http');
const fs     = require('fs');

// const server = http.createServer((req,res)=>{
//   const readStream = fs.createReadStream('./static/index.html');
//   res.writeHead(200,{'content-type': 'text/html'})
//   readStream.pipe(res);
// })

// const server = http.createServer((req,res)=>{
//   const readStream = fs.createReadStream('./static/example.json');
//   res.writeHead(200,{'content-type': 'application/json'})
//   readStream.pipe(res);
// })

const server = http.createServer((req,res)=>{
  const readStream = fs.createReadStream('./static/random.jpeg');
  res.writeHead(200,{'content-type': 'image/jpeg'})
  readStream.pipe(res);
})

server.listen('3000');