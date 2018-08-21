const Task = require('./task.js')

const Hero = function(name, fav_food, tasks){
  this.name = name;
  this.fav_food = fav_food;
  this.tasks = tasks;
  this.health = 100;
}

Hero.prototype.sayName = function(){
  return `Hi! My name is ${this.name}.`
}

Hero.prototype.eatsFood = function(food){
  if (food.poisonous){
    this.health -= 10
  }
  else if (food.name === this.fav_food){
    this.health += 1.5*food.replenishment
  }
  else {
    this.health += food.replenishment
  }
}

Hero.prototype.sortTasksByDifficulty = function(){
  this.tasks.sort(function(a,b){ //Array now becomes [7, 8, 25, 41]
      return b.difficulty - a.difficulty
  })
}

Hero.prototype.sortTasksByUrgency = function(){
  this.tasks.sort(function(a,b){ //Array now becomes [7, 8, 25, 41]
      return b.urgency- a.urgency
  })
}

Hero.prototype.sortTasksByReward = function(){
  this.tasks.sort(function(a,b){ //Array now becomes [7, 8, 25, 41]
      return b.reward- a.reward
  })
}

Hero.prototype.viewCompletedTasks = function(){
  completed = []
  for (task of this.tasks){
    if (task.completed){
      completed.push(task)
    }
  }
  return completed
}

Hero.prototype.viewNonCompletedTasks = function(){
  notCompleted = []
  for (task of this.tasks){
    if (!task.completed){
      notCompleted.push(task)
    }
  }
  return notCompleted
}

module.exports = Hero;
