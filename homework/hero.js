const Hero = function(name, fav_food, tasks){
  this.name = name;
  this.fav_food = fav_food;
  this.tasks = tasks;
  this.health = 100;
}

Hero.prototype.sayName = function(){
  return `Hi! My name is ${this.name}.`
}

module.exports = Hero;
