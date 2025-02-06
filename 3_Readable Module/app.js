const { userInfo } = require("os");
const readline = require("readline");
const rl = readline.createInterface(
  {
    input : process.stdin,
    output: process.stdout
  }
);

let num1 = Math.floor((Math.random()*10)+1);
let num2 = Math.floor((Math.random()*10)+1);

let ans = num1+num2;

rl.question(`What is ${num1} + ${num2}? \n`,
  (UserInput) => {
    if(UserInput == ans) {
      rl.close();
    }else{
      rl.setPrompt("Incorrect answer try again!!");
      rl.prompt();
    }
  }
);

rl.on("close",
  ()=>{
    console.log("Correct!!");
  }
);