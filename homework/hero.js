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
  if (food.isPoisonous){
    this.health -= 10
  }
  else if (food.name === this.fav_food){
    this.health += 1.5*food.replenishment
  }
  else {
    this.health += food.replenishment
  }
}
//---------------------------------------------
//suggestions from hwork review:

//make addTask function
Hero.prototype.addTask = function(task){
  this.tasks.push(task);
}

//and a sortTasks
Hero.prototype.sortTasks = function(property){
  this.tasks.sort(function(a,b){
    return b[property] - a[property];
  })
}

//---------------------------------------------
// My initial go - wrote a function to sort by each property but better to pass a property in to one function

// Hero.prototype.sortTasksByDifficulty = function(){
//   this.tasks.sort(function(a,b){
//       return b.difficulty - a.difficulty
//   })
// }
//
// Hero.prototype.sortTasksByUrgency = function(){
//   this.tasks.sort(function(a,b){
//       return b.urgency- a.urgency
//   })
// }
//
// Hero.prototype.sortTasksByReward = function(){
//   this.tasks.sort(function(a,b){
//       return b.reward- a.reward
//   })
// }

Hero.prototype.viewCompletedTasks = function(){
  // completed = []
  // for (task of this.tasks){
  //   if (task.isComplete){
  //     completed.push(task)
  //   }
  // }
  // or could use filter
  return this.tasks.filter(task => task.isComplete)
  //return completed
}

Hero.prototype.viewIncompleteTasks = function(){
  // notCompleted = []
  // for (task of this.tasks){
  //   if (!task.isComplete){
  //     notCompleted.push(task)
  //   }
  // }
  // return notCompleted

  // or use filter
  return this.tasks.filter(task => !task.isComplete)

}

module.exports = Hero;
