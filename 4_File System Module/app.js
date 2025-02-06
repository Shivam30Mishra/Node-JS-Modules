const fs = require('fs');

// create a file
// fs.writeFile("example.txt","File created using fs module",
//   (err) =>{
//   if(err){
//     console.log("error generated");
//   } else{
//     console.log("file successfully created");
//   }
// });

// fs.readFile("example.txt",'utf8',(err,file)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log(file);
//   }
// });

// renaming the file
// fs.rename("example.txt","Example.txt",(err)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully renamed the file");
//   }
// });

// appending the data in file
// fs.appendFile("Example.txt","Data Appended",(err)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully appended the data");
//   }
// });

fs.unlink("example.txt",(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log("Successfully deleted file");
  }
})