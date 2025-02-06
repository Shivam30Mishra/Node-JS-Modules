const fs = require("fs");

// fs.mkdir("Folder",(err)=>{
//   if(err){
//     console.log(err);
//   }else{
//     fs.writeFile("./Folder/example.txt","123",(err)=>{
//       if(err){
//         console.log(err);
//       }else{
//         console.log("Successfully made example.txt");
//       }
//     })
//   }
// });

fs.readdir("./Folder",(err,files)=>{
  if(err){
    console.log(err);
  }else{
    console.log(files);// files here is array of files
  }
})