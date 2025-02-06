const fs = require("fs");

const readStream = fs.createReadStream("file.txt","utf8");
const writeStream = fs.createWriteStream("write.txt");

readStream.on("data",(chunks)=>{
  writeStream.write(chunks);
})