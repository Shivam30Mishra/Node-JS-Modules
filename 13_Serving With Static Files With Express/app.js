const express = require('express');
const app     = express();
const path    = require('path');

app.use('/public',express.static(path.join(__dirname,'static')));

app.get('/',(req,res)=>{
  console.log(req.params);
  console.log(req.query);
  res.send(path.join('static','index.html'));
})

app.listen(3000);