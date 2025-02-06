const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send("Hello World ~~ From EXpress")
});

app.get('/example',(req,res)=>{
  res.send("Hellow World ~~ This is the example webpage");
});

// app.get('/example/:name/:age',(req,res)=>{
//   console.log(req.params);
//   res.send("Hello World ~~ This expres with route");
// })

app.get('/example/:name/:age',(req,res)=>{
  console.log(req.params);
  console.log(req.query);
  res.send("Hello " + req.params.name + " ~~ This expres with route");
})

app.listen(3000);