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
// const Taxi = function(manufacturer, model, driver){
//   this.manufacturer = manufacturer;
//   this.model = model;
//   this.driver = driver;
//   this.passengers = [];
// }
//
// Taxi.prototype.numberOfPassengers = function(){
//   return this.passengers.length;
// }
//
// Taxi.prototype.addPassenger = function(passengerName){
//   this.passengers.push(passengerName);
// }
//
// Taxi.prototype.removePassengerByName = function(passengerName){
//   const index = this.passengers.indexOf(passengerName);
//   this.passengers.splice(index, 1);
//   // this.passengers = this.passengers.filter(i => i !== name)
// }
//
// Taxi.prototype.removeAllPassengers = function(){
//   this.passengers = [];
//   //this.passengers.splice(0, this.numberOfPassengers())
// }
//
// module.exports = Taxi;
