const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("tutorial", (num1,nums2) =>{
  console.log(num1+nums2);
})

// creating a class that extends the EventEmitter class
class Person extends EventEmitter {
  constructor(name){
    super();
    this._name = name;
  }
  get name(){
    return this._name;
  }
}

emitter.emit("tutorial",1,2);

const james = new Person("James");

james.on("name",()=>{
  console.log("my name is " + james.name);
})

james.emit("name","SHivam",1,12);