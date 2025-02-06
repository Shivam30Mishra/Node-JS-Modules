const http   = require('http');
const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.write("Hello from root domain");
    res.end();
  }else{
    res.write("Hello from other domain");
    res.end();
  }
})

server.listen('3000');