const Person = function(name) {
  this.name = name;
}

Person.prototype.greet = function(){
  console.log(`Hi! My name is ${this.name}`);
}

const shaggy = new Person("Shaggy Rogers");
const velma = new Person("Velma Dinkley");
// console.log("Shaggy:", shaggy.name);
// console.log("Velma:", velma.name);
shaggy.age = 32;
shaggy.greet()
velma.greet()

console.log("Shaggy:", shaggy);
