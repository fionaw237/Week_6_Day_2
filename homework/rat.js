const Rat = function(name){
  this.name = name;
}

Rat.prototype.touchFood = function(food){
  if (!food.poisonous){
    food.poisonous = true
  }
}

module.exports = Rat;
